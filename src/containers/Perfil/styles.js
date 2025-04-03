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

    
    --light-bg-color: #B0C4DE; 
    --light-text-color: #000; 
    --light-link-color: rgb(0, 162, 255); 
    --light-button-bg: rgb(0, 26, 54); 
    --light-button-text: #fff; 
    --light-nav-bg: #e9ecef; 
    --light-nav-text: #495057; 
    --light-nav-hover: rgb(0, 26, 54); 
    --light-dropdown-bg: #e9ecef; 
    --light-dropdown-text: #495057; 
    --light-dropdown-hover: rgba(0, 86, 179, 0.2); 
    --light-section-bg: #fff; 
    --light-project-bg: #f0f0f0; 

    
    background: var(--dark-bg-color);
  }

  body {
    color: var(--dark-text-color);
    margin: 0;
    padding: 0;
    font-family: 'Belanosima', sans-serif; 
    overflow-x: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
    background: var(--dark-bg-color); 
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
  width: 95%; 
  max-width: 1400px; 
  align-items: flex-start;
  justify-content: flex-start; 
  margin-top: 20px; 
`;

export const ProfileSidebar = styled.div`
  width: 300px; 
  border-radius: 15px; 
  padding: 25px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent; 
  
  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px; 
`;

export const ProfileImageMC = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 140px; 
  height: 140px; 
  margin-bottom: 15px; 
  object-fit: cover;
`;

export const PlayerNameSidebar = styled.h2`
  color: var(--dark-link-color);
  font-size: 1.8rem; 
  margin: 0;
  margin-bottom: 10px;
  text-align: center;

  body.light-mode & {
    color: var(--light-link-color);
  }
`;

export const SidebarInfo = styled.div`
  width: 100%;
  margin-bottom: 25px; 
  color: #ddd;
  font-size: 1rem; 

  p {
    margin-bottom: 8px; 
  }
`;

export const SidebarStats = styled.div`
  width: 100%;

  h3 {
    color: var(--dark-link-color);
    margin-top: 0;
    margin-bottom: 15px; 
    font-size: 1.3rem; 
    text-align: center;

    body.light-mode & {
      color: var(--dark-link-color);
    }
  }

  p {
    color: #ddd;
    margin-bottom: 8px; 
    font-size: 1rem; 
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
  padding: 25px; 
  width: calc(70% - 20px); 
  max-width: 1100px; 
  background: linear-gradient(to right,
    ${props => lightenDarkenColor(props.rankColor, -30)}, 
    ${props => props.rankColor} 
  );
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  margin-bottom: 20px;
  margin-left: 20px; 
  border-radius: 8px; 

  body.light-mode & {
    
    background: linear-gradient(to right,
      ${props => lightenDarkenColor(props.rankColor, 30)}, 
      ${props => lightenDarkenColor(props.rankColor, 0)} 
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
  background-color: #444; 
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
  font-size: 1rem; 

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
  padding: 1.5rem; 
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
  
`;

export const CardTitle = styled.span`
  font-size: 1.4rem; 
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
  margin-bottom: 1.2rem; 
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px; 

  li {
    color: var(--white);
    margin-bottom: 0.8rem; 
    font-size: 1.1rem; 
    display: flex;
    justify-content: space-between;
  }
`;

export const StatValue = styled.span`
  color: var(--primary);
  font-weight: bold;
  margin-left: 10px; 
`;

export const RankInfo = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 15px; 
`;

export const RankSymbol = styled.span`
  font-size: 1.2em; 
  margin-right: 8px; 
  color: ${props => props.color};
`;

export const RankName = styled.span`
  font-weight: bold;
  font-size: 1.1rem; 
  color: ${props => props.color};
`;


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
  flex-wrap: wrap; 
  margin-top: 20px;
`;
export const GlassContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px; 

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
  text-decoration: none; 
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
  color: var(--dark-text-color); 

  body.light-mode & {
    color: var(--light-text-color); 
  }
`;

export const GeneralInfoContainer = styled.div`
  width: 300px; 
  margin-top: 20px; 
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export default GlobalStyle;