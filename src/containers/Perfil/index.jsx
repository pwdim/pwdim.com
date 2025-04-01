// src/containers/Perfil/index.jsx
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../components/nav'; // Importe a NavigationBar

const Perfil = () => {
  const { nickname: initialNickname } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleStats, setVisibleStats] = useState({});
  const [expandedStats, setExpandedStats] = useState({});
  const currentDate = new Date();
  const playerRank = playerData?.playerRanks?.[0]?.rankName || 'Membro';

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
    setExpandedStats({});

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

      const leaderboardResponse = await fetch("https://api.flamemc.com.br/leaderboards?statId=25&size=200");
      if (leaderboardResponse.ok) {
        const leaderboardData = await leaderboardResponse.json();
        const playerOnLeaderboard = leaderboardData.find(player => player.name.toLowerCase() === nick.toLowerCase());
        setPlayerData(prevData => ({ ...prevData, leaguePosition: playerOnLeaderboard ? playerOnLeaderboard.position : null }));
      } else {
        console.error("Erro ao buscar a leaderboard de FlameLeague");
        setPlayerData(prevData => ({ ...prevData, leaguePosition: null }));
      }

    } catch (err) {
      console.error('Erro ao buscar jogador:', err);
      setError('Falha ao conectar com a API.');
    } finally {
      setLoading(false);
    }
  };

  const formatRank = (rank) => {
    if (!rank) return 'Membro';
    switch (rank) {
      case 'CEO':
      case 'HEAD_ADMIN':
      case 'ADMIN':
        return 'Administrador';
      case 'MOD+':
        return 'Moderador Primário';
      case 'MOD':
        return 'Moderador Secúndario';
      case 'TRIAL':
        return 'Trial Moderador';
      case 'BUILDER':
      case 'STUDIO':
        return 'Studio';
      case 'CREATOR+':
        return 'Creator+';
      case 'CREATOR':
        return 'Creator';
      case 'BETA':
        return 'Beta';
      case 'LEGEND':
        return 'Legend';
      case 'FLAME':
        return 'Flame';
      case 'SPARK':
        return 'Spark';
      default:
        return rank;
    }
  };

  const toggleStatsVisibility = (modeKey) => {
    setVisibleStats((prevState) => ({
      ...prevState,
      [modeKey]: !prevState[modeKey],
    }));
  };

  const toggleExpand = (modeKey) => {
    setExpandedStats((prevState) => ({
      ...prevState,
      [modeKey]: !prevState[modeKey],
    }));
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

  return (
    <S.Container>
      <S.ProfileLayout>
        <S.ProfileSidebar rank={playerRank}>
          <S.SidebarHeader>
            <S.ProfileImageMC src={`https://mc-heads.net/avatar/${playerData?.uuid}/720/`} alt="Avatar do Jogador" />
            <S.PlayerNameSidebar>{playerData?.name}</S.PlayerNameSidebar>
          </S.SidebarHeader>
          <S.SidebarInfo>
            <p>Última Atividade: {playerData?.lastLogin ? formatDateTime(playerData.lastLogin) : 'Indisponível'}</p>
            <p>Membro desde: {playerData?.firstLogin ? formatDateTime(playerData.firstLogin) : 'Indisponível'}</p>
          </S.SidebarInfo>
          <S.SidebarStats>
            <h3>Informações Gerais</h3>
            {playerData?.playerRanks && playerData.playerRanks.length > 0 && (
              <p>Rank: {formatRank(getPlayerRankName())}</p>
            )}
            {playerData?.clan && <p>Clan: {playerData.clan === null ? 'Sem clan' : playerData.clan}</p>}
            {playerData?.premium !== undefined && <p>Conta: {playerData.premium ? 'Original' : 'Pirata'}</p>}
          </S.SidebarStats>
        </S.ProfileSidebar>

        <S.PlayerStatsContainer>
          <S.StatsCard>
            <S.CardBorder />
            <S.CardTitleContainer>
              <S.CardTitle>Stats do Jogador</S.CardTitle>
            </S.CardTitleContainer>
            <S.Line />
            <S.MinigameList>
              {Object.entries(gameModesConfig).map(([modeKey, modeInfo]) => (
                playerData?.accountStats?.some(stat => Object.keys(modeInfo.stats).includes(stat.statsMap.name)) ? (
                  <S.MinigameButton key={modeKey} onClick={() => toggleExpand(modeKey)}>
                    {modeInfo.title}
                  </S.MinigameButton>
                ) : null
              ))}
            </S.MinigameList>
            {Object.entries(gameModesConfig).map(([modeKey, modeInfo]) => (
              expandedStats[modeKey] ? (
                <S.StatsCard key={`${modeKey}-stats`}>
                  <h4>{modeInfo.title}</h4>
                  <S.StatsList>
                    {Object.entries(modeInfo.stats).map(([statKey, statName]) => {
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
                        <li key={statKey}>
                          {statName}: <S.StatValue>{statValue}</S.StatValue>
                          {rankInfo && (
                            <S.RankInfo>
                              <S.RankSymbol color={rankInfo.color}>{rankInfo.symbol}</S.RankSymbol>
                              <S.RankName color={rankInfo.color}>{rankInfo.name}</S.RankName>
                            </S.RankInfo>
                          )}
                        </li>
                      );
                    })}
                    {modeKey === 'league' && playerData.leaguePosition !== null && (
                      <li key="league_position">Colocação: <S.StatValue>{playerData.leaguePosition}</S.StatValue></li>
                    )}
                  </S.StatsList>
                </S.StatsCard>
              ) : null
            ))}
          </S.StatsCard>
        </S.PlayerStatsContainer>
      </S.ProfileLayout>
    </S.Container>
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
      "competitive_defeats": "Derrotas em CxC",
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
  "bridge": {
    "title": "🌉 The Bridge",
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
};

export default Perfil;