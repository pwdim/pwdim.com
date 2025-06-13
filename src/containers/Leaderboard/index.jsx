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
    const { name = 'Erro', expValue, uuid, playerRanks, banned, clan,
            killsValue, deathsValue, winsValue, bestStreakValue } = player || {};

    const rankTag = playerRanks?.[0]?.rank || 'Membro';
    const isBanned = banned || false;
    const rankColor = getRankColorHex(rankTag);
    const avatarSrc = uuid ? `https://mc-heads.net/avatar/${uuid}/32` : "https://mc-heads.net/avatar/1/32";

    const killsVal = killsValue;
    const deathsVal = deathsValue;
    const winsVal = winsValue;
    const bestStreakVal = bestStreakValue;

    return (
        <tr>
            <td>#{currentRank}</td>
            <td>
                <S.TableAvatar src={avatarSrc} alt="" />
                <TableNickname to={`/perfil/${name}`} $isBanned={isBanned} $rankColor={rankColor}>
                    {name}
                </TableNickname>
                {clan && (
                    <S.ClanText $clanName={clan}>
                        [{clan}]
                    </S.ClanText>
                )}
                {isBanned && <S.BanIndicator>(BANIDO)</S.BanIndicator>}
            </td>
            <td>{typeof expValue === 'number' ? expValue.toLocaleString('pt-BR') : '-'}</td>
            <td>{typeof killsVal === 'number' ? killsVal.toLocaleString('pt-BR') : '-'}</td>
            <td>{typeof deathsVal === 'number' ? deathsVal.toLocaleString('pt-BR') : '-'}</td>
            {winsVal !== undefined && winsVal !== null && <td>{typeof winsVal === 'number' ? winsVal.toLocaleString('pt-BR') : '-'}</td>}
            {bestStreakVal !== undefined && bestStreakVal !== null && <td>{typeof bestStreakVal === 'number' ? bestStreakVal.toLocaleString('pt-BR') : '-'}</td>}
        </tr>
    );
};

const gameModeConfig = {
    'sw': {
        name: 'SkyWars',
        stats: {
            total: { exp: 72, kills: 64, deaths: 65, wins: 63, bestStreak: null },
            weekly: { exp: 72, kills: 64, deaths: 65, wins: 63, bestStreak: null },
            monthly: { exp: 72, kills: 64, deaths: 65, wins: 63, bestStreak: null }
        },
        displayStats: ['exp', 'kills', 'deaths', 'wins']
    },
    'fl': {
        name: 'Flame League',
        stats: {
            total: { exp: 25, kills: 28, deaths: 29, wins: 27, bestStreak: null },
            weekly: { exp: 25, kills: 28, deaths: 29, wins: 27, bestStreak: null },
            monthly: { exp: 25, kills: 28, deaths: 29, wins: 27, bestStreak: null }
        },
        displayStats: ['exp', 'kills', 'deaths', 'wins']
    },
    'cxc': {
        name: 'Clan x Clan',
        stats: {
            total: { exp: 30, kills: 33, deaths: 34, wins: 32, bestStreak: null },
            weekly: { exp: 30, kills: 33, deaths: 34, wins: 32, bestStreak: null },
            monthly: { exp: 30, kills: 33, deaths: 34, wins: 32, bestStreak: null }
        },
        displayStats: ['exp', 'kills', 'deaths', 'wins']
    },
    'hg': {
        name: 'Hunger Games',
        stats: {
            total: { exp: 19, kills: 22, deaths: 23, wins: 21, bestStreak: null },
            weekly: { exp: 19, kills: 22, deaths: 23, wins: 21, bestStreak: null },
            monthly: { exp: 19, kills: 22, deaths: 23, wins: 21, bestStreak: null }
        },
        displayStats: ['exp', 'kills', 'deaths', 'wins']
    },
    'arena': {
        name: 'Arena',
        stats: {

            total: { exp: 3, kills: 1, deaths: 2, wins: null, bestStreak: 6 },
            weekly: { exp: 3, kills: 1, deaths: 2, wins: null, bestStreak: 6 },
            monthly: { exp: 3, kills: 1, deaths: 2, wins: null, bestStreak: 6 }
        },
        displayStats: ['exp', 'kills', 'deaths', 'bestStreak']
    },
    'fps': {
        name: 'FPS',
        stats: {
            total: { exp: 3, kills: 7, deaths: 8, wins: null, bestStreak: 10 },
            weekly: { exp: 3, kills: 7, deaths: 8, wins: null, bestStreak: 10 },
            monthly: { exp: 3, kills: 7, deaths: 8, wins: null, bestStreak: 10 }
        },
        displayStats: ['exp', 'kills', 'deaths', 'bestStreak']
    },
};

const LeaderboardPage = () => {
    const { modo: currentModeParam, tipo: currentTypeParam } = useParams();

    const activeMode = useMemo(() => currentModeParam || 'hg', [currentModeParam]);
    const activeType = useMemo(() => currentTypeParam || 'total', [currentTypeParam]);
    const [sortCriteria, setSortCriteria] = useState('kills'); // Default para 'exp'

    const [leaderboardData, setLeaderboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {
        stats: { [activeType]: currentStatIds } = {},
        name: modeName,
        displayStats
    } = useMemo(() => gameModeConfig[activeMode] || {}, [activeMode, activeType]);

    const leaderboardApiUrl = useMemo(() => {
        // Se currentStatIds ou o statId para o sortCriteria não estão definidos, a URL é inválida.
        if (!currentStatIds || currentStatIds[sortCriteria] === undefined) return null;

        const statIdToFetch = currentStatIds[sortCriteria];
        let baseUrl = `https://api.flamemc.com.br/leaderboards`;

        // Adiciona o tipo de período (weekly/monthly) à URL
        if (activeType === 'weekly') {
            baseUrl += `/weekly`;
        } else if (activeType === 'monthly') {
            baseUrl += `/monthly`;
        }
        // Sempre adiciona o statId solicitado
        return `${baseUrl}?statId=${statIdToFetch}`;
    }, [activeType, sortCriteria, currentStatIds]); // currentStatIds deve ser uma dependência

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setLoading(true);
            setError(null);
            setLeaderboardData(null);

            if (!leaderboardApiUrl) {
                setError("Configuração de leaderboard inválida (URL não gerada). Por favor, verifique.");
                setLoading(false);
                return;
            }

            console.log(`Fetching leaderboard from: ${leaderboardApiUrl}`);
            try {
                const leaderboardResponse = await fetch(leaderboardApiUrl);
                if (!leaderboardResponse.ok) {
                    throw new Error(`Falha ao buscar lista (${leaderboardResponse.status})`);
                }
                const data = await leaderboardResponse.json();

                if (!data || data.length === 0) {
                    setLeaderboardData([]);
                    setLoading(false);
                    return;
                }

                // Função auxiliar para encontrar um stat específico no array de stats
                const findStatValue = (statsArray, statId) => {
                    // Retorna null se statsArray não for um array ou for nulo/indefinido
                    if (!Array.isArray(statsArray) || statId === null || statId === undefined) return null;
                    const stat = statsArray.find(s => s.statsMap?.id === statId);
                    // Retorna o valor se encontrado, caso contrário, null
                    return (stat?.value !== null && stat?.value !== undefined) ? stat.value : null;
                };

                const processedData = data.map(playerEntry => {
                    // Seleciona o array de stats relevante (accountStats, accountStatsWeekly, accountStatsMonthly)
                    // GARANTINDO QUE SEJA UM ARRAY, mesmo que a propriedade não exista
                    const relevantStatsArray =
                        activeType === 'weekly' ? (playerEntry.accountStatsWeekly || []) :
                        activeType === 'monthly' ? (playerEntry.accountStatsMonthly || []) :
                        (playerEntry.accountStats || []); // Para 'total' ou outros casos

                    // Objeto para armazenar todos os valores dos stats
                    const playerStats = {
                        expValue: null,
                        killsValue: null,
                        deathsValue: null,
                        winsValue: null,
                        bestStreakValue: null,
                    };

                    // PARA CADA STAT QUE DEVE SER EXIBIDO, VAMOS PROCURAR SEU VALOR.
                    // Não há mais a premissa de que playerEntry.value é *sempre* o sortCriteria.
                    // A premissa AGORA é que todos os stats virão do array relevante.
                    // O sortCriteria APENAS determina QUAL STAT_ID foi usado na URL.

                    // EXP
                    if (displayStats.includes('exp') && currentStatIds?.exp !== undefined) {
                         playerStats.expValue = findStatValue(relevantStatsArray, currentStatIds.exp);
                    }
                    // Kills (Abates)
                    if (displayStats.includes('kills') && currentStatIds?.kills !== undefined) {
                        playerStats.killsValue = findStatValue(relevantStatsArray, currentStatIds.kills);
                    }
                    // Deaths (Mortes)
                    if (displayStats.includes('deaths') && currentStatIds?.deaths !== undefined) {
                        playerStats.deathsValue = findStatValue(relevantStatsArray, currentStatIds.deaths);
                    }
                    // Wins (Vitórias)
                    if (displayStats.includes('wins') && currentStatIds?.wins !== undefined) {
                        playerStats.winsValue = findStatValue(relevantStatsArray, currentStatIds.wins);
                    }
                    // Best Streak (Melhor Sequência)
                    if (displayStats.includes('bestStreak') && currentStatIds?.bestStreak !== undefined) {
                        playerStats.bestStreakValue = findStatValue(relevantStatsArray, currentStatIds.bestStreak);
                    }

                    return {
                        position: playerEntry.position,
                        name: playerEntry.name,
                        uuid: playerEntry.uuid,
                        playerRanks: playerEntry.playerRanks,
                        banned: playerEntry.banned,
                        clan: playerEntry.clan,
                        ...playerStats // Espalha os valores dos stats aqui
                    };
                });

                // Agora, precisamos ordenar os dados APÓS processá-los,
                // usando o valor que realmente corresponde ao sortCriteria.
                const sortedProcessedData = [...processedData];
                sortedProcessedData.sort((a, b) => {
                    // Trata banidos para ficarem no final
                    if (a.banned && !b.banned) return 1;
                    if (!a.banned && b.banned) return -1;
                    if (a.banned && b.banned) return 0; // Se ambos banidos, mantém a ordem original

                    // Lógica de ordenação para os não-banidos
                    let valA, valB;
                    switch (sortCriteria) {
                        case 'exp': valA = a.expValue; valB = b.expValue; break;
                        case 'kills': valA = a.killsValue; valB = b.killsValue; break;
                        case 'deaths': valA = a.deathsValue; valB = b.deathsValue; break;
                        case 'wins': valA = a.winsValue; valB = b.winsValue; break;
                        case 'bestStreak': valA = a.bestStreakValue; valB = b.bestStreakValue; break;
                        default: return 0; // Nenhuma ordenação se o critério não for reconhecido
                    }

                    // Trata valores nulos ou indefinidos para ordenação
                    if (valA === null || valA === undefined) valA = -Infinity;
                    if (valB === null || valB === undefined) valB = -Infinity;

                    return valB - valA; // Ordenação decrescente (do maior para o menor)
                });


                setLeaderboardData(sortedProcessedData); // Define os dados JÁ ordenados

            } catch (fetchError) {
                console.error("Fetch Leaderboard Error:", fetchError);
                setError(fetchError.message || "Erro ao buscar dados.");
                setLeaderboardData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, [activeMode, activeType, leaderboardApiUrl, currentStatIds, sortCriteria, displayStats]); // Adicionado displayStats aqui

    const displaySortedData = useMemo(() => {
        // Agora, leaderboardData JÁ VEM ORDENADO pelo useEffect.
        // Apenas filter para garantir que não haja lixo, se necessário, mas a ordenação já foi feita.
        return leaderboardData || [];
    }, [leaderboardData]);

    const tableHeaders = useMemo(() => {
        const headers = [
            { key: 'rank', label: '#', style: S.thRankStyle },
            { key: 'player', label: 'Jogador', style: S.thPlayerStyle },
        ];

        if (displayStats) {
            displayStats.forEach(statKey => {
                let label = '';
                switch (statKey) {
                    case 'exp': label = 'EXP'; break;
                    case 'kills': label = 'Abates'; break;
                    case 'deaths': label = 'Mortes'; break;
                    case 'wins': label = 'Vitórias'; break;
                    case 'bestStreak': label = 'Melhor Sequência'; break;
                    default: label = statKey;
                }
                headers.push({ key: statKey, label: label, style: S.thStatStyle });
            });
        }
        return headers;
    }, [displayStats]);

    const availableTypes = [
        { key: 'total', name: 'Total' },
        { key: 'monthly', 'name': 'Mensal' },
        { key: 'weekly', name: 'Semanal' },
    ];

    return (
        <S.LeaderboardPageContainer>
            <S.ModeSidebar>
                <h3>Modos de Jogo</h3>
                <S.ModeList>
                    {Object.keys(gameModeConfig).map(modeKey => (
                        <S.ModeListItem key={modeKey}>
                            <ModeLink
                                to={`/leaderboard/${modeKey}/${activeType}`}
                                $isActive={activeMode === modeKey}
                            >
                                {gameModeConfig[modeKey].name}
                            </ModeLink>
                        </S.ModeListItem>
                    ))}
                </S.ModeList>
            </S.ModeSidebar>

            <S.LeaderboardDisplayContainer>
                <h2>Leaderboard de {modeName} ({availableTypes.find(type => type.key === activeType)?.name}) - Top 100</h2>

                <S.SortButtonContainer>
                    {displayStats && displayStats.map(statKey => {
                        let label = '';
                        switch (statKey) {
                            case 'exp': label = 'XP'; break;
                            case 'kills': label = 'Abates'; break;
                            case 'deaths': label = 'Mortes'; break;
                            case 'wins': label = 'Vitórias'; break;
                            case 'bestStreak': label = 'Melhor Sequência'; break;
                            default: label = statKey;
                        }
                        return (
                            <S.SortButton
                                key={statKey}
                                onClick={() => setSortCriteria(statKey)}
                                $isActive={sortCriteria === statKey}
                            >
                                {label}
                            </S.SortButton>
                        );
                    })}
                </S.SortButtonContainer>

                <S.SortButtonContainer>
                    {availableTypes.map(type => (
                        <S.SortButton
                            key={type.key}
                            onClick={() => window.location.href = `/leaderboard/${activeMode}/${type.key}`}
                            $isActive={activeType === type.key}
                        >
                            {type.name}
                        </S.SortButton>
                    ))}
                </S.SortButtonContainer>

                {loading && <p style={{ textAlign: 'center', color: '#ccc' }}>Carregando...</p>}
                {error && <p style={{ textAlign: 'center', color: 'red' }}>Erro: {error}</p>}
                {!loading && !error && (!leaderboardData || leaderboardData.length === 0) && <p style={{ textAlign: 'center', color: '#aaa' }}>Nenhum jogador encontrado.</p>}

                {!loading && !error && leaderboardData && leaderboardData.length > 0 && (
                    <S.LeaderboardTable>
                        <thead>
                            <tr>
                                {tableHeaders.map(header => (
                                    <th key={header.key} style={header.style || S.thStyle}>{header.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {displaySortedData.map((player, index) => (
                                <PlayerTableRow
                                    key={`${activeMode}-${activeType}-${player.name}-${index}`}
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