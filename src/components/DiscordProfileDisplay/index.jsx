import React, { useState, useEffect } from 'react';
import * as S from '../../containers/Home/styles'; // Ajuste o caminho se moveu os estilos
import { FaSpotify, FaPlaystation, FaXbox, FaSteam } from 'react-icons/fa';
import { VscCode } from "react-icons/vsc";
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const getStatusColor = (status) => {
  switch (status) {
    case 'online': return '#43b581';
    case 'idle': return '#faa61a';
    case 'dnd': return '#f04747';
    default: return '#747f8d';
  }
};

const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    try {
        return formatDistanceToNowStrict(new Date(timestamp), { locale: ptBR });
    } catch (e) {
        console.error("Timestamp format error", e);
        return '';
    }
};

const getActivityIcon = (activityName) => {
    const lowerCaseName = activityName?.toLowerCase() || '';
    if (lowerCaseName.includes('visual studio code')) return <VscCode />;
    if (lowerCaseName.includes('playstation')) return <FaPlaystation />;
    if (lowerCaseName.includes('xbox')) return <FaXbox />;
    if (lowerCaseName.includes('steam')) return <FaSteam />;
    return null;
}

const DiscordProfileDisplay = ({ userId }) => {
  const [discordData, setDiscordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
        setLoading(false);
        setError('ID de usuário não fornecido.');
        return;
    }

    setLoading(true);
    setError(null);
    setDiscordData(null);

    fetch(`https://api.lanyard.rest/v1/users/${userId}`)
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Network response was not ok')))
      .then(data => {
        if (data.success) {
          setDiscordData(data.data);
        } else {
          throw new Error('Lanyard API returned success: false');
        }
      })
      .catch(err => {
        console.error("Erro Lanyard:", err);
        setError(err.message || 'Falha ao buscar dados');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  const getAvatarUrl = (size = 96) => {
    const user = discordData?.discord_user;
    if (!user) return 'https://via.placeholder.com/96';
    if (!user.avatar) return `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discriminator || '0') % 5}.png`;
    const format = user.avatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${format}?size=${size}`;
  };

  const getAvatarDecorationUrl = () => {
    const asset = discordData?.discord_user?.avatar_decoration_data?.asset;
    if (asset) {
      return `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
    }
    return null;
  };

  if (loading) {
    return <S.ProfileSection><p>Carregando Perfil Discord...</p></S.ProfileSection>;
  }

  if (error || !discordData || !discordData.discord_user) {
    return <S.ProfileSection><S.ErrorMessage>Erro ao carregar perfil: {error || 'Dados não encontrados'}</S.ErrorMessage></S.ProfileSection>;
  }

  const { discord_user, discord_status, activities, spotify } = discordData;
  const statusColor = getStatusColor(discord_status);
  const customStatus = activities?.find(a => a.type === 4);
  const otherActivities = activities?.filter(a => a.type !== 4 && !(a.type === 2 && spotify)) || [];

  return (
    <S.ProfileSection>
      <S.AvatarContainer>
        <S.ProfileImage src={getAvatarUrl(80)} alt={discord_user.username} $statusColor={statusColor} />
        {getAvatarDecorationUrl() && <S.AvatarDecoration src={getAvatarDecorationUrl()} alt="" />}
        <S.StatusIndicator $status={discord_status} $borderColor={'#101114'} />
      </S.AvatarContainer>

      <S.UsernameDisplay>
        {discord_user.display_name || discord_user.username}
      </S.UsernameDisplay>
      <S.FullUsername>
         {discord_user.username}
         {discord_user.discriminator !== '0' && `#${discord_user.discriminator}`}
      </S.FullUsername>

      {customStatus?.state && (
         <S.StatusSection>
             {customStatus.emoji && <S.StatusEmoji>{customStatus.emoji.name}</S.StatusEmoji>}
             <S.StatusText>{customStatus.state}</S.StatusText>
         </S.StatusSection>
      )}

      {otherActivities.length > 0 && (
        <S.ActivitySection>
          {otherActivities.map((activity, index) => (
              <S.ActivityItem key={activity.id || index}>
                  <S.ActivityIcon>{getActivityIcon(activity.name)}</S.ActivityIcon>
                  <S.ActivityText>
                      <strong>{activity.name === 'Custom Status' ? 'Status' : activity.name}</strong>
                      {activity.details && <div>{activity.details}</div>}
                      {activity.state && <div>{activity.state}</div>}
                      {activity.timestamps?.start && <div>há {formatTimestamp(activity.timestamps.start)}</div>}
                  </S.ActivityText>
              </S.ActivityItem>
          ))}
        </S.ActivitySection>
       )}

       {spotify && (
         <S.SpotifySection>
             <S.ActivityIcon><FaSpotify color="#1DB954" /></S.ActivityIcon>
             <S.SongInfo>
                 <strong>{spotify.song}</strong>
                 <span>por {spotify.artist}</span>
             </S.SongInfo>
         </S.SpotifySection>
       )}
    </S.ProfileSection>
  );
};

export default DiscordProfileDisplay;