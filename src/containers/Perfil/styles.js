// src/styles/globalStyles.js
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Cores do Tema Escuro (padrão) */
    --dark-bg-color: linear-gradient(45deg, #121314, #181a1b, #121314);
    --dark-text-color: #fff;
    --dark-link-color: #0ff;
    --dark-button-bg: #0ff;
    --dark-button-text: #000;
    --dark-nav-bg: #333;
    --dark-nav-text: #a0a0a0;
    --dark-nav-hover: #0ff;
    --dark-dropdown-bg: #333;
    --dark-dropdown-text: #a0a0a0;
    --dark-dropdown-hover: rgba(0, 255, 255, 0.2);
    --dark-section-bg: #1c1d21;
    --dark-project-bg: #25262a;

    /* Cores do Tema Claro */
    --light-bg-color: #B0C4DE; /* Azul claro acinzentado */
    --light-text-color: #000; /* Cinza escuro */
    --light-link-color: rgb(0, 162, 255); /* Azul claro */
    --light-button-bg: rgb(0, 26, 54); /* Azul escuro */
    --light-button-text: #fff; /* Branco */
    --light-nav-bg: #e9ecef; /* Cinza bem claro */
    --light-nav-text: #495057; /* Cinza médio */
    --light-nav-hover: rgb(0, 26, 54); /* Azul escuro */
    --light-dropdown-bg: #e9ecef; /* Cinza bem claro */
    --light-dropdown-text: #495057; /* Cinza médio */
    --light-dropdown-hover: rgba(0, 86, 179, 0.2); /* Azul escuro com transparência */
    --light-section-bg: #fff; /* Branco */
    --light-project-bg: #f0f0f0; /* Cinza claro */

    /* Cor de fundo padrão (escuro) */
    background: var(--dark-bg-color);
  }

  body {
    color: var(--dark-text-color);
    margin: 0;
    padding: 0;
    font-family: 'Belanosima', sans-serif; /* Aplica a fonte */
    overflow-x: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
    background: var(--dark-bg-color); /* Define o background no body também */
  }

  body.light-mode {
    color: var(--light-text-color);
    background: var(--light-bg-color);
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
  background-color: var(--dark-project-bg);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
`;

export const Title = styled.h1`
  color: var(--dark-link-color);
  text-align: center;
  margin-bottom: 30px;

  body.light-mode & {
    color: var(--light-link-color);
  }
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  color: var(--dark-nav-text);
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;

  body.light-mode & {
    color: var(--light-nav-text);
    border-bottom: 1px solid #ccc;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
`;

// Estilos do Perfil
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
    background-color: var(--dark-button-bg);
    color: var(--dark-button-text);
    cursor: pointer;
    transition: background-color 0.3s ease;

    body.light-mode & {
      background-color: var(--light-button-bg);
      color: var(--light-button-text);
    }

    &:hover {
      background-color: rgba(0, 255, 255, 0.8);
      body.light-mode & {
        background-color: rgba(0, 26, 54, 0.8);
      }
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
  border-radius: 15px; /* Borda mais arredondada para o efeito de cilindro */
  padding: 25px; /* Aumentei o padding interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent; /* Borda inicial transparente */
  /* Estilos de borda e background dinâmicos baseados no rank */
  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
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
  color: var(--dark-link-color);
  font-size: 1.8rem; /* Aumentei o tamanho da fonte do nome */
  margin: 0;
  margin-bottom: 10px;
  text-align: center;

  body.light-mode & {
    color: var(--light-link-color);
  }
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
    color: var(--dark-link-color);
    margin-top: 0;
    margin-bottom: 15px; /* Aumentei a margem inferior do título */
    font-size: 1.3rem; /* Aumentei o tamanho da fonte do título */
    text-align: center;

    body.light-mode & {
      color: var(--dark-link-color);
    }
  }

  p {
    color: #ddd;
    margin-bottom: 8px; /* Aumentei a margem inferior dos parágrafos */
    font-size: 1rem; /* Aumentei o tamanho da fonte dos parágrafos */
  }
`;

function lightenDarkenColor(color, amount) {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}

export const PlayerStatsContainer = styled.div`
  padding: 25px; /* Aumentei o padding interno */
  width: calc(70% - 20px); /* Ajustei a largura para ocupar mais espaço */
  max-width: 1100px; /* Aumentei a largura máxima */
  background: linear-gradient(to right,
    ${props => lightenDarkenColor(props.rankColor, -30)}, /* Cor mais escura */
    ${props => props.rankColor} /* Cor original */
  );
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  margin-bottom: 20px;
  margin-left: 20px; /* Adicionei uma margem esquerda para separar */
  border-radius: 8px; /* Adicionei um border-radius para combinar com outros elementos */

  body.light-mode & {
    /* Se precisar de um gradiente diferente para o tema claro, adicione aqui */
    background: linear-gradient(to right,
      ${props => lightenDarkenColor(props.rankColor, 30)}, /* Cor mais clara */
      ${props => lightenDarkenColor(props.rankColor, 0)} /* Cor original */
    );
    box-shadow: 0 0 5px rgba(0, 26, 54, 0.3);
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const PlayerName = styled.h2`
  color: var(--dark-link-color);
  font-size: 2rem;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;

  body.light-mode & {
    color: var(--light-link-color);
  }
`;

export const GeneralStatus = styled.div`
  background-color: #444; /* Cor um pouco mais escura */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;

  h3 {
    color: var(--dark-link-color);
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;

    body.light-mode & {
      color: var(--light-link-color);
    }
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
    body.light-mode & {
      background-color: #777;
    }
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
  background-color: var(--dark-project-bg);
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

  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0px -16px 24px 0px rgba(0, 0, 0, 0.1) inset;
  }
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

// Estilos da Home (LinksPage)
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;
export const NavLink = styled.button`
  background: none;
  border: none;
  color: var(--dark-link-color);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  body.light-mode & {
    color: var(--light-link-color);
  }

  &:hover {
    background-color: rgba(0, 255, 255, 0.1);
    body.light-mode & {
      background-color: rgba(0, 26, 54, 0.1);
    }
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
export const ProfileImage = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  margin-bottom: 30px;
  object-fit: cover;
  border: 3px solid var(--dark-link-color);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);

  body.light-mode & {
    border-color: var(--light-link-color);
    box-shadow: 0 0 15px rgba(0, 26, 54, 0.5);
  }
`;
export const Username = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 40px;
  color: var(--dark-link-color);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
  animation: none;

  body.light-mode & {
    color: var(--light-link-color);
    text-shadow: 0 0 10px rgba(0, 26, 54, 0.7);
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que os "vidros" quebrem para a próxima linha em telas menores */
  margin-top: 20px;
`;
export const GlassContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px; /* Adiciona um pouco de margem entre os containers */

  &:hover > a {
    transform: rotate(0deg);
    margin: 0 10px;
  }
`;
export const Glass = styled.a`
  position: relative;
  width: 180px;
  height: 200px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 -45px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
  text-decoration: none; /* Remove o sublinhado padrão de links */
  color: var(--dark-link-color);

  body.light-mode & {
    color: var(--light-link-color);
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-link-color);
    font-weight: bold;
    border-radius: 0 0 10px 10px;

    body.light-mode & {
      color: var(--light-link-color);
    }
  }

  svg {
    font-size: 2.5em;
    fill: var(--dark-link-color);

    body.light-mode & {
      fill: var(--light-link-color);
    }
  }
`;
export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 0.9rem;
  color: #777;
`;
export const CopyMessageTop = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 255, 255, 0.8);
  color: #121314;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  opacity: 0.9;
  z-index: 10;

  body.light-mode & {
    background-color: rgba(0, 26, 54, 0.8);
    color: #fff;
  }
`;
export const SearchContainerHome = styled.div`
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
    background-color: var(--dark-button-bg);
    color: var(--dark-button-text);
    cursor: pointer;
    transition: background-color 0.3s ease;

    body.light-mode & {
      background-color: var(--light-button-bg);
      color: var(--light-button-text);
    }

    &:hover {
      background-color: rgba(0, 255, 255, 0.8);
      body.light-mode & {
        background-color: rgba(0, 26, 54, 0.8);
      }
    }
  }
`;

export const RankBadge = styled.span`
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  padding: 2px 5px;
  font-weight: bold;
  font-size: 0.9em;
  color: var(--dark-text-color); /* Cor padrão para o tema escuro */

  body.light-mode & {
    color: var(--light-text-color); /* Cor para o tema claro */
  }
`;

export const GeneralInfoContainer = styled.div`
  width: 300px; /* Mesma largura da sidebar para alinhar */
  margin-top: 20px; /* Espaço entre a sidebar e as informações gerais */
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhar conteúdo à esquerda dentro */
  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export default GlobalStyle;