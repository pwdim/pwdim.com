import React, { useState, useEffect } from 'react';
import * as S from '../../styles/globalStyles';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useParams } from 'react-router-dom';

const Perfil = () => {
  const { nickname: initialNickname } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleStats, setVisibleStats] = useState({});
  const [expandedStats, setExpandedStats] = useState(null); 
  const currentDate = new Date();
  const rawPlayerRank = playerData?.playerRanks?.[0]?.rankName;
  const playerRank = ['CEO', 'HEAD_ADMIN', 'ADMIN'].includes(rawPlayerRank) ? 'ADMIN' : rawPlayerRank || 'Membro';


  const rank_colors = {
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
    "Membro": [221, 221, 221] 
  };

  useEffect(() => {
    if (initialNickname) {
      fetchPlayerData(initialNickname);
    }
  }, [initialNickname]);

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) {
      return 'Indisponível';
    }
    try {
      const dt = new Date(dateTimeString.replace('Z', '+00:00'));
      return format(dt, 'dd/MM/yy \'às\' HH:mm', { locale: ptBR });
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return 'Erro na data';
    }
  };

  const fetchPlayerData = async (nick) => {
    setPlayerData(null);
    setError(null);
    setLoading(true);
    setVisibleStats({});
    setExpandedStats(null); 

    try {
      const playerResponse = await fetch(`https://api.flamemc.com.br/players/${nick}`);
      if (!playerResponse.ok) {
        if (playerResponse.status === 404) {
          setError('Jogador não encontrado.');
        } else {
          setError(`Erro ao buscar jogador: ${playerResponse.status}`);
        }
        return;
      }
      const data = await playerResponse.json();
      setPlayerData(data);
    } catch (err) {
      console.error('Erro ao buscar jogador:', err);
      setError('Falha ao conectar com a API.');
    } finally {
      setLoading(false);
    }
  };

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const getRankColor = (rank) => {
    const colorRGB = rank_colors[rank];
    if (colorRGB) {
      return rgbToHex(colorRGB[0], colorRGB[1], colorRGB[2]);
    }
    return '#ddd'; 
  };

  const toggleStatsVisibility = (modeKey) => {
    setVisibleStats((prevState) => ({
      ...prevState,
      [modeKey]: !prevState[modeKey],
    }));
  };

  const toggleExpand = (modeKey) => {
    setExpandedStats(expandedStats === modeKey ? null : modeKey); 
  };

  const getHGPlayerRank = (exp, position) => {
    if (position !== undefined && position !== null) {
      if (1 <= position <= 3) {
        return { name: "Master", symbol: "👑", color: "#aa0000" };
      } else if (4 <= position <= 10) {
        return { name: "Amethyst", symbol: "🔮", color: "#aa00aa" };
      } else if (11 <= position <= 30) {
        return { name: "Ruby", symbol: "🔴", color: "#ff5555" };
      }
    }

    const ranks = [
      { threshold: 6000, name: "Sapphire", symbol: "🔷", color: "#0000aa" },
      { threshold: 4755, name: "Emerald", symbol: "🟢", color: "#00aa00" },
      { threshold: 3000, name: "Diamond", symbol: "🛡️", color: "#55ffff" },
      { threshold: 1815, name: "Platinum", symbol: "🩶", color: "#ff55ff" },
      { threshold: 580, name: "Gold", symbol: "🥇", color: "#ffaa00" },
      { threshold: 70, name: "Silver", symbol: "⚪", color: "#aaaaaa" },
      { threshold: 0, name: "Bronze", symbol: "🟤", color: "#ff5555" },
    ];

    for (const rank of ranks) {
      if (exp >= rank.threshold) {
        return { name: rank.name, symbol: rank.symbol, color: rank.color };
      }
    }
    return { name: "Desconhecido", symbol: "❓", color: "#777" };
  };


  const getLeaguePlayerRank = (exp, position) => {
    if (position !== undefined && position !== null) {
      if (1 <= position <= 3) {
        return { name: "Master", symbol: "👑", color: "#aa0000" };
      } else if (4 <= position <= 10) {
        return { name: "Amethyst", symbol: "🔮", color: "#aa00aa" };
      } else if (11 <= position <= 30) {
        return { name: "Ruby", symbol: "🔴", color: "#ff5555" };
      }
    }

    const ranks = [
      { threshold: 6000, name: "Sapphire", symbol: "🔷", color: "#0000aa" },
      { threshold: 4755, name: "Emerald", symbol: "🟢", color: "#00aa00" },
      { threshold: 3000, name: "Diamond", symbol: "🛡️", color: "#55ffff" },
      { threshold: 1815, name: "Platinum", symbol: "🩶", color: "#ff55ff" },
      { threshold: 580, name: "Gold", symbol: "🥇", color: "#ffaa00" },
      { threshold: 70, name: "Silver", symbol: "⚪", color: "#aaaaaa" },
      { threshold: 0, name: "Bronze", symbol: "🟤", color: "#ff5555" },
    ];

    for (const rank of ranks) {
      if (exp >= rank.threshold) {
        return { name: rank.name, symbol: rank.symbol, color: rank.color };
      }
    }
    return { name: "Desconhecido", symbol: "❓", color: "#777" };
  };

  const getPlayerRankName = () => {
    return playerData?.playerRanks?.[0]?.rankName || 'Membro';
  };

  const gameModesConfigWithImages = {
    arena: { ...gameModesConfig.arena, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    fps: { ...gameModesConfig.fps, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    league: { ...gameModesConfig.league, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    competitive: { ...gameModesConfig.competitive, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    hg: { ...gameModesConfig.hg, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    bedwars: { ...gameModesConfig.bedwars, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    gladiator: { ...gameModesConfig.gladiator, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    simulator: { ...gameModesConfig.simulator, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    sopa: { ...gameModesConfig.sopa, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    bridge_solo: { ...gameModesConfig.bridge_solo, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
    bridge_duo: { ...gameModesConfig.bridge_duo, backgroundImage: 'url("https://imgur.com/JgXQdID.png")' },
  };

  const categorizedGameModes = {
    HG: ["hg", "league", "competitive"],
    PVP: ["arena", "fps"],
    DUELS: ["gladiator", "simulator", "sopa"],
    BEDWARS: ["bedwars_geral", "bedwars_solo", "bedwars_dupla", "bedwars_trio", "bedwars_quarteto"],
    BRIDGE: ["bridge_solo", "bridge_duo"],
  };

  const [activeCategory, setActiveCategory] = useState("HG"); 

  const BEDWARS_STATS = {
    "geral": {
      "bed_wars_total_games_played": "<a:wins:1348790119070564402> Partidas (Geral)",
      "bed_wars_total_beds_broken": "Camas Quebradas (Geral)",
      "bed_wars_total_beds_lost": "Camas Perdidas (Geral)",
      "bed_wars_total_wins": "<a:wins:1348790119070564402> Vitórias (Geral)",
      "bed_wars_total_losses": "<a:skull:1348799160979030096> Derrotas (Geral)",
      "bed_wars_total_deaths": "<a:skull:1348799160979030096> Mortes (Geral)",
      "bed_wars_total_kills": "<a:abates:1348799859603406979> Abates (Geral)",
      "bed_wars_total_final_kills": "<a:abates:1348799859603406979> Abates Finais (Geral)",
      "bed_wars_total_winstreak": "<a:streak:1348793266358714521> WinStreak (Geral)",
      "bed_wars_experience": "<a:xp:1348792513300795504> XP em BedWars",
    },
    "solo": {
      "bed_wars_solo_games_played": "<a:wins:1348790119070564402> Partidas (Solo)",
      "bed_wars_solo_beds_broken": "Camas Quebradas (Solo)",
      "bed_wars_solo_beds_lost": "Camas Perdidas (Solo)",
      "bed_wars_solo_wins": "<a:wins:1348790119070564402> Vitórias (Solo)",
      "bed_wars_solo_losses": "<a:skull:1348799160979030096> Derrotas (Solo)",
      "bed_wars_solo_deaths": "<a:skull:1348799160979030096> Mortes (Solo)",
      "bed_wars_solo_kills": "<a:abates:1348799859603406979> Abates (Solo)",
      "bed_wars_solo_final_kills": "<a:abates:1348799859603406979> Abates Finais (Solo)",
      "bed_wars_solo_winstreak": "<a:streak:1348793266358714521> WinStreak (Solo)",
      "bed_wars_experience": "<a:xp:1348792513300795504> XP em BedWars",

    },
    "dupla": {
      "bed_wars_doubles_games_played": "<a:wins:1348790119070564402> Partidas (Dupla)",
      "bed_wars_doubles_beds_broken": "Camas Quebradas (Dupla)",
      "bed_wars_doubles_beds_lost": "Camas Perdidas (Dupla)",
      "bed_wars_doubles_wins": "<a:wins:1348790119070564402> Vitórias (Dupla)",
      "bed_wars_doubles_losses": "<a:skull:1348799160979030096> Derrotas (Dupla)",
      "bed_wars_doubles_deaths": "<a:skull:1348799160979030096> Mortes (Dupla)",
      "bed_wars_doubles_kills": "<a:abates:1348799859603406979> Abates (Dupla)",
      "bed_wars_doubles_final_kills": "<a:abates:1348799859603406979> Abates Finais (Dupla)",
      "bed_wars_doubles_winstreak": "<a:streak:1348793266358714521> WinStreak (Dupla)",
      "bed_wars_experience": "<a:xp:1348792513300795504> XP em BedWars",
    },
    "trio": {
      "bed_wars_threesome_games_played": "<a:wins:1348790119070564402> Partidas (Trio)",
      "bed_wars_threesome_beds_broken": "Camas Quebradas (Trio)",
      "bed_wars_threesome_beds_lost": "Camas Perdidas (Trio)",
      "bed_wars_threesome_wins": "<a:wins:1348790119070564402> Vitórias (Trio)",
      "bed_wars_threesome_losses": "<a:skull:1348799160979030096> Derrotas (Trio)",
      "bed_wars_threesome_deaths": "<a:skull:1348799160979030096> Mortes (Trio)",
      "bed_wars_threesome_kills": "<a:abates:1348799859603406979> Abates (Trio)",
      "bed_wars_threesome_final_kills": "<a:abates:1348799859603406979> Abates Finais (Trio)",
      "bed_wars_threesome_winstreak": "<a:streak:1348793266358714521> WinStreak (Trio)",
      "bed_wars_experience": "<a:xp:1348792513300795504> XP em BedWars",
    },
    "quarteto": {
      "bed_wars_group_games_played": "<a:wins:1348790119070564402> Partidas (Quarteto)",
      "bed_wars_group_beds_broken": "Camas Quebradas (Quarteto)",
      "bed_wars_group_beds_lost": "Camas Perdidas (Quarteto)",
      "bed_wars_group_wins": "<a:wins:1348790119070564402> Vitórias (Quarteto)",
      "bed_wars_group_losses": "<a:skull:1348799160979030096> Derrotas (Quarteto)",
      "bed_wars_group_deaths": "<a:skull:1348799160979030096> Mortes (Quarteto)",
      "bed_wars_group_kills": "<a:abates:1348799859603406979> Abates (Quarteto)",
      "bed_wars_group_final_kills": "<a:abates:1348799859603406979> Abates Finais (Quarteto)",
      "bed_wars_group_winstreak": "<a:streak:1348793266358714521> WinStreak (Quarteto)",
      "bed_wars_experience": "<a:xp:1348792513300795504> XP em BedWars"
    }
  };

  return (
    <S.ProfilePageContainer >
      <S.LeftColumn>
        <S.BasicInfo style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
          <S.ProfileSidebar style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }} $rank={playerRank}>
            <S.SidebarHeader >
              <S.PlayerNameSidebar style={{ color: getRankColor(playerRank) }}>{playerData?.name}</S.PlayerNameSidebar>
            </S.SidebarHeader>
            <S.ProfileImageMC src={`https://mc-heads.net/avatar/${playerData?.uuid}/720/`} alt="Avatar do Jogador" />
            {playerData?.banned && (
              <S.BannedText color="red">BANIDO</S.BannedText>
            )}
            <S.GeneralInfoContainer >
              {playerData?.playerRanks && playerData.playerRanks.length > 0 && (
                <S.InfoCard className="rank-info" style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
                  <S.InfoTitle >Rank:</S.InfoTitle>
                  <S.InfoValue>
                    <S.RankBadge $backgroundColor={getRankColor(playerRank)}>{playerRank}</S.RankBadge> 
                  </S.InfoValue>
                </S.InfoCard>
              )}
              {playerData?.clan && (
                <S.InfoCard className="clan-info" style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
                  <S.InfoTitle>Clan:</S.InfoTitle>
                  <S.InfoValue>{playerData.clan === null ? 'Sem clan' : playerData.clan}</S.InfoValue>
                </S.InfoCard>
              )}
              {playerData?.premium !== undefined && (
                <S.InfoCard className="account-info" style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
                  <S.InfoTitle>Conta:</S.InfoTitle>
                  <S.InfoValue>{playerData.premium ? 'Original' : 'Pirata'}</S.InfoValue>
                </S.InfoCard>
              )}
            </S.GeneralInfoContainer>
            <S.SidebarInfo style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
              <p>Última Atividade: {playerData?.lastLogin ? formatDateTime(playerData.lastLogin) : 'Indisponível'}</p>
              <p>Membro desde: {playerData?.firstLogin ? formatDateTime(playerData.firstLogin) : 'Indisponível'}</p>
            </S.SidebarInfo>
          </S.ProfileSidebar>
        </S.BasicInfo>
        <S.GeneralInfoSection>
        </S.GeneralInfoSection>
      </S.LeftColumn>
      <S.RightColumn style={{ boxShadow: `0 0 5px ${getRankColor(playerRank)}` }}>
        <S.CategoryButtonContainer>
          {Object.keys(categorizedGameModes).map((category) => (
            <S.CategoryButton
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </S.CategoryButton>
          ))}
        </S.CategoryButtonContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : playerData ? (
          <S.MinigamesGrid>
            {categorizedGameModes[activeCategory]?.map((modeKey) => {
              const modeInfo = gameModesConfigWithImages[modeKey];
              const modeStatsConfig = gameModesConfig[modeKey]?.stats || {};

              if (modeKey.startsWith("bedwars_")) {
                const bwMode = modeKey.split("_")[1];
                const bwStatsConfig = BEDWARS_STATS[bwMode];
                const bwTitle = `🛏️ BedWars (${bwMode.charAt(0).toUpperCase() + bwMode.slice(1)})`; 

                return bwStatsConfig && (
                  <S.MinigameStats key={modeKey} $backgroundImage={gameModesConfigWithImages["bedwars"]?.backgroundImage}>
                    <S.MinigameTitle><h4>{bwTitle}</h4></S.MinigameTitle>
                    <S.StatsWrapper>
                      {Object.entries(bwStatsConfig).map(([statKey, statName]) => {
                        const foundStat = playerData?.accountStats?.find(stat => stat.statsMap.name === statKey);
                        const statValue = foundStat ? foundStat.value : 0;
                        return (
                          <S.StatItem key={statKey}>
                            <S.StatName dangerouslySetInnerHTML={{ __html: statName }} /> 
                            <S.StatValue>{statValue}</S.StatValue>
                          </S.StatItem>
                        );
                      })}
                    </S.StatsWrapper>
                  </S.MinigameStats>
                );
              } else if (modeInfo) {
                return (
                  <S.MinigameStats key={modeKey} $backgroundImage={modeInfo.backgroundImage}>
                    <S.MinigameTitle><h4>{modeInfo.title}</h4></S.MinigameTitle>
                    <S.StatsWrapper>
                      {Object.entries(modeStatsConfig).map(([statKey, statName]) => {
                        const foundStat = playerData?.accountStats?.find(stat => stat.statsMap.name === statKey);
                        const statValue = foundStat ? foundStat.value : 0;
                        let rankInfo = null;
                        if (modeKey === 'hg' && statKey === 'hg_exp') {
                          const hgExpStat = playerData?.accountStats?.find(s => s.statsMap.name === 'hg_exp');
                          const hgExp = hgExpStat ? hgExpStat.value : 0;
                          rankInfo = getHGPlayerRank(hgExp);
                        } else if (modeKey === 'league' && statKey === 'league_exp') {
                          rankInfo = getLeaguePlayerRank(foundStat?.value || 0, playerData.leaguePosition);
                        }
                        return (
                          <S.StatItem key={statKey}>
                            <S.StatName>{statName}:</S.StatName>
                            <S.StatValue>{statValue}</S.StatValue>
                            {rankInfo && (
                              <S.RankInfo>
                                <S.RankSymbol color={rankInfo.color}>{rankInfo.symbol}</S.RankSymbol>
                                <S.RankName color={rankInfo.color}>{rankInfo.name}</S.RankName>
                              </S.RankInfo>
                            )}
                          </S.StatItem>
                        );
                      })}
                    </S.StatsWrapper>
                  </S.MinigameStats>
                );
              }
              return null;
            })}
          </S.MinigamesGrid>
        ) : (
          <p>Jogador não encontrado.</p>
        )}
      </S.RightColumn>
    </S.ProfilePageContainer>
  );
};

const gameModesConfig = {
  "arena": {
    "title": "🏟 Arena",
    "stats": {
      "pvp_arena_kills": "Abates na Arena",
      "pvp_arena_deaths": "Mortes na Arena",
      "pvp_arena_streak": "KillStreak na Arena",
      "pvp_arena_best_streak": "Melhor KillStreak na Arena",
      "pvp_coins": "Coins no KitPvp",
      "pvp_exp": "XP no KitPvp",
    },
  },
  "fps": {
    "title": "🔫 FPS",
    "stats": {
      "pvp_fps_kills": "Abates em FPS",
      "pvp_fps_deaths": "Mortes em FPS",
      "pvp_fps_streak": "KillStreak em FPS",
      "pvp_fps_best_streak": "Melhor KillStreak em FPS",
      "pvp_coins": "Coins em KitPvp",
      "pvp_exp": "XP em KitPvp",
    },
  },
  "league": {
    "title": "🔥 FlameLeague",
    "stats": {
      "league_wins": "Vitórias em League",
      "league_kills": "Abates em League",
      "league_deaths": "Mortes em League",
      "league_coins": "Coins em League",
      "league_exp": "XP em League",
    },
  },
  "competitive": {
    "title": "🕹 CxC",
    "stats": {
      "competitive_wins": "Vitórias em Cxc",
      "competitive_defeats": "Derrotas em Cxc",
      "competitive_kills": "Abates em Cxc",
      "competitive_deaths": "Mortes em Cxc",
      "competitive_exp": "XP em CxC",
    },
  },
  "hg": {
    "title": "🏹 Hardcore Games",
    "stats": {
      "hg_wins": "Vitórias em HG",
      "hg_kills": "Abates em HG",
      "hg_deaths": "Mortes em HG",
      "hg_coins": "Coins em HG",
      "hg_exp": "XP em HG",
    },
  },
  "bedwars": {
    "title": "🛏 BedWars",
    "stats": {
      "bed_wars_total_games_played": "Partidas (Total)",
      "bed_wars_total_wins": "Vitórias em BedWars",
      "bed_wars_total_final_kills": "Abates Finais em BedWars",
      "bed_wars_total_deaths": "Mortes em BedWars",
      "bed_wars_experience": "XP em BedWars",
    },
  },
  "gladiator": {
    "title": "⛓️ Gladiator",
    "stats": {
      "duels_gladiator_wins": "Vitórias em Gladiator",
      "duels_gladiator_kills": "Abates em Gladiator",
      "duels_gladiator_defeats": "Mortes em Gladiator",
      "duels_gladiator_streak": "KillStreak em Gladiator",
      "duels_gladiator_best_streak": "Melhor KillStreak em Gladiator",
    },
  },
  "simulator": {
    "title": "⛰ Simulator",
    "stats": {
      "duels_simulator_wins": "Vitórias em Simulator",
      "duels_simulator_kills": "Abates em Simulator",
      "duels_simulator_defeats": "Mortes em Simulator",
      "duels_simulator_streak": "KillStreak em Simulator",
      "duels_simulator_best_streak": "Melhor KillStreak em Simulator",
    },
  },
  "sopa": {
    "title": "🥣 Sopa",
    "stats": {
      "duels_soup_wins": "Vitórias em Sopa",
      "duels_soup_kills": "Abates em Sopa",
      "duels_soup_defeats": "Mortes em Sopa",
      "duels_soup_streak": "KillStreak em Sopa",
      "duels_soup_best_streak": "Melhor KillStreak em Sopa",
    },
  },
  "bridge_solo": {
    "title": "🌉 The Bridge (Solo)",
    "stats": {
      "duels_bridge_wins_solo": "Vitórias em The Bridge (Solo)",
      "duels_bridge_defeats_solo": "Derrotas emThe Bridge (Solo)",
      "duels_bridge_kills_solo": "Abates em The Bridge (Solo)",
      "duels_bridge_deaths_solo": "Mortes em The Bridge (Solo)",
      "duels_bridge_streak_solo": "KillStreak em The Bridge (Solo)",
      "duels_bridge_best_streak_solo": "Melhor KillStreak em The Bridge (Solo)",
      "duels_bridge_points_solo": "Pontos em The Bridge (Solo)",
    },
  },
  "bridge_duo": {
    "title": "🌉 The Bridge (Dupla)",
    "stats": {
      "duels_bridge_wins_duo": "Vitórias em The Bridge (Dupla)",
      "duels_bridge_defeats_duo": "Derrotas emThe Bridge (Dupla)",
      "duels_bridge_kills_duo": "Abates em The Bridge (Dupla)",
      "duels_bridge_deaths_duo": "Mortes em The Bridge (Dupla)",
      "duels_bridge_streak_solo": "KillStreak em The Bridge (Dupla)",
      "duels_bridge_best_streak_duo": "Melhor KillStreak em The Bridge (Dupla)",
      "duels_bridge_points_duo": "Pontos em The Bridge (Dupla)",
    },
  },
};

export default Perfil;