import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'; 
import * as S from '../../styles/globalStyles'; 


const rank_colors_rgb = {
    "CEO": [170, 0, 0], "ADMIN": [170, 0, 0], "HEAD_ADMIN": [170, 0, 0], "Administrador": [170, 0, 0],
    "MOD+": [146, 33, 145], "Moderador Primário": [146, 33, 145],
    "MOD": [146, 33, 145], "Moderador Secúndario": [146, 33, 145],
    "TRIAL": [146, 33, 145], "Trial Moderador": [146, 33, 145],
    "CREATOR+": [4, 156, 156], "Creator+": [4, 156, 156],
    "CREATOR": [85, 255, 255], "Creator": [85, 255, 255],
    "STUDIO": [170, 0, 170], "Studio": [170, 0, 170],
    "BUILDER": [0, 170, 0],
    "LEGEND": [170, 0, 170],
    "BETA": [4, 4, 192],
    "FLAME": [255, 170, 0],
    "SPARK": [255, 255, 85],
    "Membro": [170, 170, 170] 
};
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');
const getRankColorHex = (rankName) => {
    const normalizedRank = rankName || "Membro";
    const colorRGB = rank_colors_rgb[normalizedRank];
    return colorRGB ? rgbToHex(colorRGB[0], colorRGB[1], colorRGB[2]) : '#aaaaaa'; 
};
const fetchPlayerData = async (nick) => {
    if (!nick) return null;
    try {
        const response = await fetch(`https://api.flamemc.com.br/players/${nick}`);
        if (!response.ok) { return null; }
        const data = await response.json();
        return data;
    } catch (error) { console.error(`NETWORK ERROR fetching [${nick}]:`, error); return null; }
};


const getStatNamesForMode = (mode) => {
  switch (mode?.toLowerCase()) {
    case 'cxc':
      return { id: 30, exp: 'competitive_exp', kills: 'competitive_kills', deaths: 'competitive_deaths', wins: 'competitive_wins', modeName: 'Competitive (CxC)' };
    case 'fl':
      return { id: 25, exp: 'league_exp', kills: 'league_kills', deaths: 'league_deaths', wins: 'league_wins', modeName: 'FlameLeague (FL)' };
    case 'pvp':
      return { id: 3, exp: 'pvp_exp', kills: 'pvp_arena_kills', deaths: 'pvp_arena_deaths', wins: null, modeName: 'PvP (Arena/FPS)' }; 
    case 'hg':
    default:
      return { id: 19, exp: 'hg_exp', kills: 'hg_kills', deaths: 'hg_deaths', wins: 'hg_wins', modeName: 'Hardcore Games (HG)' }; 
  }
};


const availableModes = [
    { key: 'hg', name: 'Hardcore Games' },
    { key: 'cxc', name: 'Competitive' },
    { key: 'fl', name: 'FlameLeague' },
    { key: 'pvp', name: 'PvP Arena/FPS' },
];


const ModeLink = styled(Link)`
  display: block; padding: 10px 12px; border-radius: 5px; text-decoration: none;
  font-weight: bold;
  color: ${props => props.$isActive ? 'var(--dark-text-color)' : 'var(--dark-nav-text)'};
  background-color: ${props => props.$isActive ? '#0aa' : 'transparent'};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${props => props.$isActive ? '#0bb' : 'var(--dark-section-bg)'};
    color: var(--dark-text-color);
  }

  body.light-mode & {
      color: ${props => props.$isActive ? 'var(--light-button-text)' : 'var(--light-nav-text)'};
      background-color: ${props => props.$isActive ? 'var(--light-link-color)' : 'transparent'};
       &:hover {
           background-color: ${props => props.$isActive ? 'var(--light-link-color)' : 'var(--light-dropdown-hover)'};
           color: ${props => props.$isActive ? 'var(--light-button-text)' : 'var(--light-nav-hover)'};
       }
  }
`;

const TableNickname = styled(Link)`
  color: ${props => props.$rankColor || 'var(--dark-text-color)'}; 
  text-decoration: ${props => props.$isBanned ? 'line-through' : 'none'};
  font-weight: bold; vertical-align: middle;
  opacity: ${props => props.$isBanned ? 0.6 : 1};
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: ${props => props.$isBanned ? 'line-through' : 'underline'};
    opacity: ${props => props.$isBanned ? 0.8 : 1};
  }
  
  body.light-mode & { color: ${props => props.$rankColor || 'var(--light-text-color)'}; }
`;



const PlayerTableRow = ({ player, currentRank }) => {
  const { position, name = 'Erro', expValue, killsValue, deathsValue, winsValue, uuid, rankTag = 'Membro', isBanned = false, clan = null } = player || {};
  const rankColor = getRankColorHex(rankTag);
  const avatarSrc = uuid ? `https://mc-heads.net/avatar/${uuid}/32` : "https://mc-heads.net/avatar/MHF_Steve/32";

  return (
    
    <tr>
      <td>#{currentRank}</td>
      <td>
        <S.TableAvatar src={avatarSrc} alt="" />
        
        <TableNickname to={`/perfil/${name}`} $isBanned={isBanned} $rankColor={rankColor}>
            {name}
        </TableNickname>
        
        {clan && <S.ClanText>[{clan}]</S.ClanText>}
        
        {isBanned && <S.BanIndicator>(BANIDO)</S.BanIndicator>}
      </td>
      
      <td>{typeof expValue === 'number' ? expValue.toLocaleString('pt-BR') : '-'}</td>
      <td>{typeof killsValue === 'number' ? killsValue.toLocaleString('pt-BR') : '-'}</td>
      <td>{typeof deathsValue === 'number' ? deathsValue.toLocaleString('pt-BR') : '-'}</td>
      
      {winsValue !== null && <td>{typeof winsValue === 'number' ? winsValue.toLocaleString('pt-BR') : '-'}</td>}
      
      {winsValue === null && <td>-</td>}
    </tr>
  );
};



const LeaderboardPage = () => {
  const { modo: currentMode } = useParams();
  const activeMode = useMemo(() => currentMode || 'hg', [currentMode]);

  const [originalData, setOriginalData] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('xp');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id: currentStatId, exp: expStatName, kills: killsStatName, deaths: deathsStatName, wins: winsStatName, modeName } = useMemo(() => getStatNamesForMode(activeMode), [activeMode]);
  const leaderboardApiUrl = useMemo(() => `https://api.flamemc.com.br/leaderboards?statId=${currentStatId}&size=100`, [currentStatId]);

  
  useEffect(() => {
    const fetchAndProcessLeaderboard = async () => {
        setLoading(true); setError(null); setOriginalData(null);
        console.log(`Workspaceing leaderboard for mode: ${activeMode} (ID: ${currentStatId})`);
        let leaderboardList = [];
        try {
            const leaderboardResponse = await fetch(leaderboardApiUrl);
            if (!leaderboardResponse.ok) throw new Error(`Falha ao buscar lista (${leaderboardResponse.status})`);
            leaderboardList = await leaderboardResponse.json();
             if (!leaderboardList || leaderboardList.length === 0) { setOriginalData([]); setLoading(false); return; }

            const playerDetailPromises = leaderboardList.map(async (playerInList) => {
                const basicInfo = { position: playerInList.position, name: playerInList.name };
                let details = { expValue: null, killsValue: null, deathsValue: null, winsValue: null, uuid: null, rankTag: 'Membro', isBanned: false, clan: null };
                try {
                    const playerData = await fetchPlayerData(playerInList.name);
                    if (playerData) {
                        details.uuid = playerData.uuid || null;
                        details.rankTag = playerData.playerRanks?.[0]?.rankName || 'Membro';
                        details.isBanned = playerData.banned || false;
                        details.clan = playerData.clan || null;
                        if (playerData.accountStats) {
                            const findStatValue = (statName) => {
                                if (!statName) return null; 
                                const stat = playerData.accountStats.find(s => s.statsMap?.name === statName);
                                return (stat?.value !== null && stat?.value !== undefined) ? stat.value : null;
                            };
                            details.expValue = findStatValue(expStatName);
                            details.killsValue = findStatValue(killsStatName);
                            details.deathsValue = findStatValue(deathsStatName);
                            details.winsValue = findStatValue(winsStatName); 
                        }
                    }
                } catch (detailError) { console.error(`Erro processando [${playerInList.name}]:`, detailError); }
                return { ...basicInfo, ...details };
            });

            const combinedData = await Promise.all(playerDetailPromises);
            setOriginalData(combinedData);
        } catch (fetchError) { setError(fetchError.message || "Erro ao buscar dados."); setOriginalData(null); }
        finally { setLoading(false); }
    };
    fetchAndProcessLeaderboard();
  }, [activeMode, leaderboardApiUrl, expStatName, killsStatName, deathsStatName, winsStatName]); 

  
  const sortedData = useMemo(() => {
    if (!originalData) return [];
    const dataToSort = [...originalData];
    try {
      switch (sortCriteria) {
        case 'wins': dataToSort.sort((a, b) => (b.winsValue ?? -Infinity) - (a.winsValue ?? -Infinity)); break;
        case 'kills': dataToSort.sort((a, b) => (b.killsValue ?? -Infinity) - (a.killsValue ?? -Infinity)); break;
        case 'deaths': dataToSort.sort((a, b) => (b.deathsValue ?? -Infinity) - (a.deathsValue ?? -Infinity)); break;
        case 'xp': default: dataToSort.sort((a, b) => a.position - b.position); break;
      }
      dataToSort.sort((a, b) => (a.isBanned === b.isBanned)? 0 : a.isBanned? 1 : -1); 
      return dataToSort;
    } catch (sortError) { console.error("Sort Error:", sortError); return originalData || []; }
  }, [originalData, sortCriteria]);

   
   
   const tableHeaders = useMemo(() => {
        const headers = [
            { key: 'rank', label: '#', style: S.thRankStyle }, 
            { key: 'player', label: 'Jogador', style: S.thPlayerStyle },
            { key: 'xp', label: 'XP', style: S.thStatStyle },
            { key: 'kills', label: 'Abates', style: S.thStatStyle },
            { key: 'deaths', label: 'Mortes', style: S.thStatStyle },
        ];
        if (winsStatName) { 
             headers.push({ key: 'wins', label: 'Vitórias', style: S.thStatStyle });
        }
        return headers;
   }, [winsStatName]); 

   const colSpanValue = tableHeaders.length; 

   return (
    
    <S.LeaderboardPageContainer>
        <S.ModeSidebar>
            <h3>Modos de Jogo</h3>
            <S.ModeList>
                {availableModes.map(mode => (
                    <S.ModeListItem key={mode.key}>
                        
                        <ModeLink to={`/leaderboard/${mode.key}`} $isActive={activeMode === mode.key}>
                            {mode.name}
                        </ModeLink>
                    </S.ModeListItem>
                ))}
            </S.ModeList>
        </S.ModeSidebar>

        <S.LeaderboardDisplayContainer>
            <h2>Temporada {modeName} - Top 100</h2>
            <S.SortButtonContainer>
                 <S.SortButton onClick={() => setSortCriteria('xp')} $isActive={sortCriteria === 'xp'}>XP (Posição)</S.SortButton>
                 
                 {winsStatName && <S.SortButton onClick={() => setSortCriteria('wins')} $isActive={sortCriteria === 'wins'}>Vitórias</S.SortButton>}
                 <S.SortButton onClick={() => setSortCriteria('kills')} $isActive={sortCriteria === 'kills'}>Abates</S.SortButton>
                 <S.SortButton onClick={() => setSortCriteria('deaths')} $isActive={sortCriteria === 'deaths'}>Mortes</S.SortButton>
            </S.SortButtonContainer>

            {loading && <p style={{textAlign: 'center', color: '#ccc'}}>Carregando...</p>}
            {error && <p style={{textAlign: 'center', color: 'red'}}>Erro: {error}</p>}
            {!loading && !error && (!originalData || originalData.length === 0) && <p style={{ textAlign: 'center', color: '#aaa' }}>Nenhum jogador encontrado.</p>}

            {!loading && !error && originalData && originalData.length > 0 && (
                
                <S.LeaderboardTable>
                    <thead>
                    <tr>
                       {tableHeaders.map(header => (
                           <th key={header.key} style={header.style || S.thStyle}>{header.label}</th> 
                       ))}
                    </tr>
                    </thead>
                    <tbody>
                    {sortedData.map((player, index) => (
                        <PlayerTableRow
                            key={`${activeMode}-${player.position}-${player.name}`}
                            player={player}
                            currentRank={index + 1}
                        />
                    ))}
                    </tbody>
                </S.LeaderboardTable>
            )}
        </S.LeaderboardDisplayContainer>
    </S.LeaderboardPageContainer>
  );
};

export default LeaderboardPage;