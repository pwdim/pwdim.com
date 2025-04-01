import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vw; /* Garante que ocupa a altura total da tela */
  padding: 20px;
  background-color: #181a1b; /* Cor de fundo escura */
  color: #fff;
  position: relative;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;

  form {
    display: flex;
  }

  input[type="text"] {
    padding: 8px;
    border: 1px solid #333;
    border-radius: 4px 0 0 4px;
    background-color: #25262a;
    color: #fff;
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 0 4px 4px 0;
    background-color: #00FFFF;
    color: #121314;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 255, 255, 0.8);
    }
  }
`;

export const ProfileLayout = styled.div`
  display: flex;
  gap: 20px;
  width: 95%; /* Aumentei um pouco a largura para preencher mais */
  max-width: 1400px; /* Aumentei a largura máxima */
  align-items: flex-start;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  margin-top: 20px; /* Adiciona margem superior para separar da barra de pesquisa */
`;

export const ProfileSidebar = styled.div`
  width: 300px; /* Aumentei a largura da barra lateral */
  background-color: #25262a;
  border-radius: 15px; /* Borda mais arredondada para o efeito de cilindro */
  padding: 25px; /* Aumentei o padding interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #333, #25262a); /* Exemplo de fundo cilindrico */
  border: 2px solid transparent; /* Borda inicial transparente */
  /* Estilos de borda dinâmicos baseados no rank */
  ${props => props.rank === 'Administrador' && `border-color: #aa0000;`}
  ${props => props.rank === 'Moderador Primário' && `border-color: #922191;`}
  ${props => props.rank === 'Moderador Secúndario' && `border-color: #922191;`}
  ${props => props.rank === 'Trial Moderador' && `border-color: #922191;`}
  ${props => props.rank === 'Builder' && `border-color: #00aa00;`}
  ${props => props.rank === 'Studio' && `border-color: #aa00aa;`}
  ${props => props.rank === 'Creator+' && `border-color: #049c9c;`}
  ${props => props.rank === 'Creator' && `border-color: #55ffff;`}
  ${props => props.rank === 'Beta' && `border-color: #0404c0;`}
  ${props => props.rank === 'Legend' && `border-color: #aa00aa;`}
  ${props => props.rank === 'Flame' && `border-color: #ffaa00;`}
  ${props => props.rank === 'Spark' && `border-color: #ffff55;`}
  ${props => props.rank === 'Membro' && `border-color: #fff;`}
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px; /* Aumentei a margem inferior */
`;

export const ProfileImageMC = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 140px; /* Aumentei a largura da imagem */
  height: 140px; /* Aumentei a altura da imagem */
  margin-bottom: 15px; /* Aumentei a margem inferior */
  object-fit: cover;
`;

export const PlayerNameSidebar = styled.h2`
  color: #00FFFF;
  font-size: 1.8rem; /* Aumentei o tamanho da fonte do nome */
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const SidebarInfo = styled.div`
  width: 100%;
  margin-bottom: 25px; /* Aumentei a margem inferior */
  color: #ddd;
  font-size: 1rem; /* Aumentei o tamanho da fonte das informações */

  p {
    margin-bottom: 8px; /* Aumentei a margem inferior dos parágrafos */
  }
`;

export const SidebarStats = styled.div`
  width: 100%;

  h3 {
    color: #00FFFF;
    margin-top: 0;
    margin-bottom: 15px; /* Aumentei a margem inferior do título */
    font-size: 1.3rem; /* Aumentei o tamanho da fonte do título */
    text-align: center;
  }

  p {
    color: #ddd;
    margin-bottom: 8px; /* Aumentei a margem inferior dos parágrafos */
    font-size: 1rem; /* Aumentei o tamanho da fonte dos parágrafos */
  }
`;

export const PlayerStatsContainer = styled.div`
  padding: 25px; /* Aumentei o padding interno */
  width: calc(70% - 20px); /* Ajustei a largura para ocupar mais espaço */
  max-width: 1100px; /* Aumentei a largura máxima */
  background-color: #25262a;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  margin-bottom: 20px;
  margin-left: 0; /* Garante que comece na borda esquerda do container pai */
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const PlayerName = styled.h2`
  color: #00FFFF;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const GeneralStatus = styled.div`
  background-color: #444; /* Cor um pouco mais escura */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;

  h3 {
    color: #00FFFF;
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
  }

  p {
    color: #ddd;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
`;

export const GameModeStatsContainer = styled.div`
  /* Estilos removidos */
`;

export const MinigameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const MinigameButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem; /* Aumentei o tamanho da fonte dos botões */

  &:hover {
    background-color: #555;
  }
`;

export const StatsCard = styled.div`
  --white: hsl(0, 0%, 100%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 0%, 83%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(189, 92%, 58%);

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem; /* Aumentei o padding interno do card de stats */
  background-color: hsla(240, 15%, 9%, 1);
  background-image: radial-gradient(
      at 88% 40%,
      hsla(240, 15%, 9%, 1) 0px,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);
  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  margin-bottom: 20px;
`;

export const CardBorder = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );
  border-radius: 1rem;

  &::before {
    content: "";
    pointer-events: none;
    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: left;
    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(189, 100%, 50%) 40%,
      hsl(189, 100%, 50%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CardTitleContainer = styled.div`
  /* Estilos para card_title__container */
`;

export const CardTitle = styled.span`
  font-size: 1.4rem; /* Aumentei o tamanho da fonte do título do card */
  color: var(--white);
  display: block;
  text-align: center;
  margin-bottom: 0.7rem;
`;

export const CardParagraph = styled.p`
  margin-top: 0.25rem;
  width: 65%;
  font-size: 0.5rem;
  color: var(--paragraph);
`;

export const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);
  border: none;
  margin-bottom: 1.2rem; /* Aumentei a margem inferior da linha */
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px; /* Aumentei a margem superior da lista */

  li {
    color: var(--white);
    margin-bottom: 0.8rem; /* Aumentei a margem inferior dos itens da lista */
    font-size: 1.1rem; /* Aumentei o tamanho da fonte dos itens da lista */
    display: flex;
    justify-content: space-between;
  }
`;

export const StatValue = styled.span`
  color: var(--primary);
  font-weight: bold;
  margin-left: 10px; /* Aumentei a margem esquerda do valor do stat */
`;

export const RankInfo = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 15px; /* Aumentei a margem esquerda da informação do rank */
`;

export const RankSymbol = styled.span`
  font-size: 1.2em; /* Aumentei o tamanho do símbolo do rank */
  margin-right: 8px; /* Aumentei a margem direita do símbolo do rank */
  color: ${props => props.color};
`;

export const RankName = styled.span`
  font-weight: bold;
  font-size: 1.1rem; /* Aumentei o tamanho da fonte do nome do rank */
  color: ${props => props.color};
`;