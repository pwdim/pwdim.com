import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import MusicPlayerUI from '../../components/MusicPlayerUI';
import { FaTrophy, FaInfoCircle, FaGithub, FaDiscord } from 'react-icons/fa';
import backgroundMusic from '/public/music/ofeliasdream.mp3'; 

const HomePage = () => {
  const YOUR_DISCORD_ID = '386563422055170048';
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [discordData, setDiscordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
     setLoading(true);
     setError(null);
     setDiscordData(null);
     fetch(`https://api.lanyard.rest/v1/users/${YOUR_DISCORD_ID}`)
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
   }, [YOUR_DISCORD_ID]);

   const profileData = {
       links: [
         { name: 'Leaderboards', url: '/leaderboard/hg', icon: FaTrophy, isInternal: true },
         { name: 'Sobre', url: '/about', icon: FaInfoCircle, isInternal: true },
         { name: 'GitHub', url: 'https://git.pwdim.com', icon: FaGithub, isInternal: false },
         { name: 'Discord', url: 'https://dc.pwdim.com/', icon: FaDiscord, isInternal: false },
       ]
   };

   const renderLinkButton = (link) => {
       const IconComponent = link.icon;
       const content = (
         <>
           {IconComponent && <S.IconWrapper><IconComponent /></S.IconWrapper>}
         </>
       );
       if (link.isInternal) {
          return <S.LinkButton key={link.name} href={link.url} title={link.name}>{content}</S.LinkButton>;
       } else {
         return (
           <S.LinkButton key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
             {content}
           </S.LinkButton>
         );
       }
   };

   const togglePlayPause = () => {
     if (!audioRef.current) return;
     const audio = audioRef.current;
     const shouldPlay = !isPlaying;
     if (shouldPlay) {
       audio.play().then(() => { setIsPlaying(true); }).catch(playError => { setIsPlaying(false); });
     } else {
       audio.pause();
       setIsPlaying(false);
     }
   };

   useEffect(() => {
        if (audioRef.current) { audioRef.current.volume = 0.3; }
    }, []);

  const currentTrack = {
      title: "Ofelia's dream",
      artist: "Benjamin Tissot",
      albumArt: "https://cdn.bensound.com/image/cover/ofeliasdream.webp"
  };

  return (
    <S.HomePageContainer>
        <audio ref={audioRef} src={backgroundMusic} loop />

        <MusicPlayerUI
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            songTitle={currentTrack.title}
            artistName={currentTrack.artist}
            albumArtUrl={currentTrack.albumArt}
        />

      <S.MainContent>
        {loading && <p>Carregando...</p>}
        {error && <S.ErrorMessage>Erro: {error}</S.ErrorMessage>}
        {!loading && !error && discordData && (
            <DiscordProfileDisplay userId={YOUR_DISCORD_ID} />
        )}
         {!loading && !error && !discordData && (
             <p>Não foi possível carregar os dados do perfil.</p>
         )}

        <S.LinksSection>
          {profileData.links.map(renderLinkButton)}
        </S.LinksSection>

      </S.MainContent>
    </S.HomePageContainer>
  );
};

export default HomePage;