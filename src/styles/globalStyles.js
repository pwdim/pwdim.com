import styled, { createGlobalStyle, keyframes } from 'styled-components';

const _rgbToHex_ = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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

const specialClanStyles = {
  'cheatban': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'bondedosbetas': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'archer': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'mushmc': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'flame': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'studio': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'tropadom': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
  'atequealogi': { color: '#ffbf00', fontWeight: 'bold', opacity: 0.9 },
};

const getClanStyles = (clanName) => {
  if (!clanName) return {};
  const lowerCaseClan = clanName.toLowerCase();
  return specialClanStyles[lowerCaseClan] || {};
};


export const GlobalStyle = createGlobalStyle`

  :root {
    --dark-bg-color: linear-gradient(45deg, #121314, #181a1b, #121314);
    --dark-text-color: #fff;
    --dark-link-color: #0ff;
    --dark-button-bg: #0ff;
    --dark-button-text: #000;
    --dark-nav-bg: #101114;
    --dark-nav-text: #a0a0a0;
    --dark-nav-hover: #0ff;
    --dark-dropdown-bg: #333;
    --dark-dropdown-text: #a0a0a0;
    --dark-dropdown-hover: rgba(0, 255, 255, 0.2);
    --dark-section-bg: #1c1d21;
    --dark-project-bg: #25262a;
    --dark-clan-color: #aaa;

    --light-bg-color: linear-gradient(45deg,rgb(248, 235, 247),rgb(255, 239, 249),rgb(255, 255, 255));
    --light-text-color:rgb(80, 80, 80);
    --light-link-color: #FF1493;
    --light-button-bg: rgb(139, 0, 139);
    --light-button-text: #fff;
    --light-nav-bg: #f8f0f8;
    --light-nav-text: #504050;
    --light-nav-hover: #C71585;
    --light-dropdown-bg: #f8f0f8;
    --light-dropdown-text: #504050;
    --light-dropdown-hover: rgba(255, 20, 147, 0.2);
    --light-section-bg:rgb(241, 211, 229);
    --light-project-bg:rgb(255, 248, 252);
    --light-clan-color: #8B008B;

   
  }

  body {
    color: var(--dark-text-color);
    margin: 0;
    padding: 0;
    font-family: 'Belanosima', sans-serif;
    overflow-x: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
    background: var(--dark-bg-color); 
    font-size: 16px;

    &.is-homepage {
      background: none; 
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  body.light-mode {
    color: var(--light-text-color);
    background: var(--light-bg-color); 

    &.is-homepage {
       background: none; 

    }
  }

  .mobile-table-scroll {
     @media (max-width: 768px) {
        overflow-x: auto;
        display: block;
        width: 100%;
        -webkit-overflow-scrolling: touch;
     }
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
  background-color: var(--dark-project-bg);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  body.light-mode & {
    background-color: var(--light-project-bg);
    box-shadow: 0 0 10px rgba(255, 20, 147, 0.1);
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 20px auto;
    padding: 15px;
    border-radius: 5px;
  }
`;

export const PContainer = styled.div`
  background-color: var(--dark-bg-color);
  width: 100vw;
  min-height: 100vh;

  body.light-mode & {
    background-color: var(--light-bg-color);
  }
`;

export const Title = styled.h1`
  color: var(--dark-link-color);
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;

  body.light-mode & {
    color: var(--light-link-color);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const Section = styled.section`
  margin-bottom: 30px;
  @media (max-width: 768px) {
      margin-bottom: 20px;
  }
`;


export const SectionTitle = styled.h2`
  color: var(--dark-nav-text);
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  font-size: 1.5rem;

  body.light-mode & {
    color: var(--light-nav-text);
    border-bottom: 1px solid #ddd;
  }

   @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
    padding-bottom: 8px;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 10;

  form {
    display: flex;
  }

  input[type="text"] {
    padding: 8px;
    border: 1px solid #333;
    border-radius: 4px 0 0 4px;
    background-color: #25262a;
    color: #fff;
    max-width: 150px;

    body.light-mode & {
        background-color: #fff;
        color: var(--light-text-color);
        border-color: #ccc;
    }
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
        background-color: var(--light-nav-hover);
      }
    }
  }

  @media (max-width: 768px) {
     position: relative;
     top: auto;
     right: auto;
     width: 90%;
     margin: 15px auto;
     justify-content: center;

     input[type="text"] {
        max-width: none;
        flex-grow: 1;
     }
  }

   @media (max-width: 480px) {
      width: 95%;
      margin: 10px auto;

       input[type="text"], button {
          font-size: 0.9rem;
          padding: 6px 10px;
       }
   }
`;

export const ProfileSidebar = styled.div`
  display: flex;
  width: 256px;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  background-color: var(--dark-project-bg);
  flex-shrink: 0;

  body.light-mode & {
      background-color: var(--light-project-bg);
      box-shadow: 0 2px 4px rgba(255, 20, 147, 0.1);
  }

   @media (max-width: 992px) {
      width: 220px;
      padding: 20px;
   }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 20px auto;
    padding: 15px;
    border-radius: 15px;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  background-color: rgb(54, 54, 54);
  border-radius: 30px;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 25px;
  padding: 15px;
  width: calc(100% - 30px);

  body.light-mode & {
      background-color: rgba(255, 248, 252, 0.8);
  }

  @media (max-width: 768px) {
      border-radius: 15px;
      margin-bottom: 15px;
      padding: 10px;
      width: calc(100% - 20px);
  }
`;


export const ProfileImageMC = styled.img`
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  object-fit: cover;

  @media (max-width: 768px) {
     width: 100px;
     height: 100px;
     margin-bottom: 10px;
     border-radius: 15px;
  }
`;

export const PlayerNameSidebar = styled.h2`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;
  color: var(--dark-text-color);

  body.light-mode & {
    color: var(--light-text-color);
  }

  @media (max-width: 768px) {
     font-size: 1.1rem;
     margin-bottom: 8px;
  }
`;

export const SidebarInfo = styled.div`
    width: 100%;
    margin-bottom: 25px;
    color: #ddd;
    font-size: 1rem;
    background-color:rgb(54, 54, 54);
    border-radius: 15px;
    padding: 10px;
    border: 2px solid ${props => props.$borderColor || 'transparent'};

    body.light-mode & {
        background-color: rgba(255, 248, 252, 0.8);
        color: var(--light-text-color);
         p {
            color: var(--light-text-color);
         }
    }

    p {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #ddd;
    }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
    border-radius: 10px;
    margin-bottom: 15px;
     p { font-size: 0.9rem; margin-bottom: 6px; }
  }
`;

export const SidebarStats = styled.div`
  border-radius: 30px;
  width: 100%;

  h3 {
    color: var(--dark-link-color);
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.3rem;
    text-align: center;

    body.light-mode & {
      color: var(--light-link-color);
    }
  }

  p {
    color: #ddd;
    margin-bottom: 8px;
    font-size: 1rem;
    body.light-mode & {
        color: var(--light-text-color);
    }
  }

  @media (max-width: 768px) {
    h3 { font-size: 1.1rem; margin-bottom: 10px;}
    p { font-size: 0.9rem; }
  }
`;

export const PlayerStatsContainer = styled.div`
  background: linear-gradient(to right,
    ${props => lightenDarkenColor(props.rankColor || '#888888', -30)},
    ${props => props.rankColor || '#888888'}
  );
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  padding: 15px;
  border-radius: 10px;

  body.light-mode & {
    background: linear-gradient(to right,
      ${props => lightenDarkenColor(props.rankColor || '#FFC0CB', 30)},
      ${props => lightenDarkenColor(props.rankColor || '#FFC0CB', 0)}
    );
    box-shadow: 0 0 5px rgba(255, 20, 147, 0.3);
  }

  @media (max-width: 768px) {
      padding: 10px;
      border-radius: 8px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  text-align: center;

  @media (min-width: 769px) {
      flex-direction: row;
      text-align: left;
  }
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

   @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 8px;
   }
`;

export const GeneralStatus = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;

  body.light-mode & {
      background-color: var(--light-project-bg);
      box-shadow: 0 2px 4px rgba(255, 20, 147, 0.1);
  }

  h3 {
    color: var(--dark-link-color);
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.2rem;

    body.light-mode & {
      color: var(--light-link-color);
    }
  }

  p {
    color: #ddd;
    margin-bottom: 10px;
    font-size: 0.9rem;
    body.light-mode & {
        color: var(--light-text-color);
    }
  }

  @media (max-width: 768px) {
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 15px;

      h3 { font-size: 1.1rem; margin-bottom: 10px; }
      p { font-size: 0.85rem; margin-bottom: 8px;}
  }
`;

export const GameModeStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
  justify-content: center;

  @media (max-width: 768px) {
      gap: 6px;
      margin-bottom: 10px;
  }
`;

export const MinigameButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.95rem;

  body.light-mode & {
      background-color: var(--light-nav-bg);
      color: var(--light-nav-text);
      border: 1px solid var(--light-nav-text);
  }

  &:hover {
    background-color: #555;
    body.light-mode & {
      background-color: var(--light-dropdown-hover);
      color: var(--light-link-color);
      border-color: var(--light-link-color);
    }
  }

   @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: 6px 10px;
      border-radius: 15px;
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
  background-color: ${props => props.rankColor || '#333'};
  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  margin-bottom: 20px;

  body.light-mode & {
    --paragraph: hsl(0, 0%, 40%);
    --line: hsl(0, 0%, 85%);
    background-color: ${props => lightenDarkenColor(props.rankColor || '#FFC0CB', 20)};
    box-shadow: 0px -16px 24px 0px rgba(0, 0, 0, 0.1) inset;
  }

  @media (max-width: 768px) {
      padding: 1rem;
      gap: 0.8rem;
      border-radius: 0.75rem;
      margin-bottom: 15px;
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
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center;
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

    body.light-mode & {
        background-image: linear-gradient(
          0deg,
          hsla(328, 100%, 90%, 0) 0%,
          hsl(328, 100%, 54%) 40%,
          hsl(328, 100%, 54%) 60%,
          hsla(328, 100%, 90%, 0) 100%
       );
    }
  }


  @keyframes rotate {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

   @media (max-width: 768px) {
      &::before {
          height: 8rem;
          animation-duration: 12s;
      }
      border-radius: 0.75rem;
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

  body.light-mode & {
      color: var(--light-text-color);
  }

  @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
  }
`;
export const CardParagraph = styled.p`
  margin-top: 0.25rem;
  width: 100%;
  font-size: 0.8rem;
  color: var(--paragraph);
  text-align: center;

   @media (max-width: 768px) {
       font-size: 0.75rem;
   }
`;

export const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);
  border: none;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
      margin-bottom: 1rem;
  }
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
    align-items: center;
    body.light-mode & {
        color: var(--light-text-color);
    }
  }

  @media (max-width: 768px) {
      margin-top: 10px;
      li {
          font-size: 1rem;
          margin-bottom: 0.6rem;
      }
  }
`;

export const StatValue = styled.span`
  color: ${props => props.rankColor || '#ffffff'};
  font-weight: bold;
  margin-left: 10px;
  text-align: right;

  body.light-mode & {
      color: ${props => props.rankColor || '#C71585'};
  }

   @media (max-width: 768px) {
       font-size: 0.95rem;
   }
`;

export const RankInfo = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 15px;

  @media (max-width: 768px) {
      margin-left: 10px;
  }
`;

export const RankSymbol = styled.span`
  font-size: 1.2em;
  margin-right: 8px;
  color: ${props => props.color || '#ffffff'};

  @media (max-width: 768px) {
      font-size: 1.1em;
      margin-right: 6px;
  }
`;

export const RankName = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${props => props.color || '#ffffff'};

  @media (max-width: 768px) {
      font-size: 1rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
     gap: 10px;
     margin-bottom: 20px;
     flex-direction: row;
  }
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
      background-color: rgba(255, 20, 147, 0.1);
    }
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    background-color: rgba(0, 255, 255, 0.05);
     body.light-mode & {
      background-color: rgba(255, 20, 147, 0.05);
    }
  }

  @media (max-width: 768px) {
      font-size: 1rem;
      padding: 8px 15px;
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
    box-shadow: 0 0 15px rgba(255, 20, 147, 0.5);
  }

  @media (max-width: 768px) {
     width: 150px;
     height: 150px;
     margin-bottom: 20px;
  }

   @media (max-width: 480px) {
     width: 120px;
     height: 120px;
   }
`;

export const Username = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 40px;
  color: var(--dark-link-color);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
  animation: none;
  text-align: center;

  body.light-mode & {
    color: var(--light-link-color);
    text-shadow: 0 0 10px rgba(255, 20, 147, 0.7);
  }

  @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 25px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 15px;
  }
`;

export const GlassContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

   @media (max-width: 768px) {
      &:hover > a {
          transform: none;
          margin: 0;
      }
   }
`;

export const Glass = styled.a`
  position: relative;
  width: 150px;
  height: 160px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 -30px;
  backdrop-filter: blur(8px);
  transform: rotate(calc(var(--r) * 1deg));
  text-decoration: none;
  color: var(--dark-link-color);

  body.light-mode & {
    color: var(--light-link-color);
    background: linear-gradient(rgba(0, 0, 0, 0.05), transparent);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-link-color);
    font-weight: bold;
    border-radius: 0 0 10px 10px;
    font-size: 0.9rem;

    body.light-mode & {
      color: var(--light-link-color);
      background: rgba(0, 0, 0, 0.03);
    }
  }

  svg {
    font-size: 2em;
    fill: var(--dark-link-color);

    body.light-mode & {
      fill: var(--light-link-color);
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 130px;
    margin: 0 -20px;
    transform: none;
    backdrop-filter: blur(5px);

     &::before {
       height: 30px;
       font-size: 0.8rem;
     }
      svg { font-size: 1.8em; }
  }

   @media (max-width: 480px) {
       width: 100px;
       height: 110px;
       margin: 0 5px;
   }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 0.9rem;
  color: #777;
  text-align: center;
  padding: 10px 20px;

  body.light-mode & {
      color: var(--light-nav-text);
  }

  @media (max-width: 768px) {
      margin-top: 30px;
      font-size: 0.8rem;
  }
`;

export const CopyMessageTop = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 255, 255, 0.8);
  color: #121314;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  opacity: 0.9;
  z-index: 1000;

  body.light-mode & {
    background-color: rgba(255, 20, 147, 0.8);
    color: #fff;
  }

  @media (max-width: 768px) {
      padding: 8px 15px;
      font-size: 0.9rem;
      width: 80%;
      text-align: center;
  }
`;

export const SearchContainerHome = styled(SearchContainer)`
`;


export const RankBadge = styled.span`
  background-color: ${props => props.$backgroundColor || '#555'};
  border-radius: 10px;
  padding: 2px 5px;
  font-weight: bold;
  font-size: 0.9em;
  color: var(--dark-text-color);
  display: inline-block;

  body.light-mode & {
    color: var(--light-button-text);
    background-color: ${props => props.$backgroundColor || '#C71585'};
  }

   @media (max-width: 768px) {
      font-size: 0.8em;
      padding: 2px 4px;
      border-radius: 8px;
   }
`;

export const GeneralInfoContainer = styled.div`
  width: 100%;
  margin-top: 0;
  margin-left: 0;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--dark-project-bg);
  border: 2px solid ${props => props.$borderColor || 'transparent'};

  body.light-mode & {
      background-color: var(--light-project-bg);
      box-shadow: 0 2px 4px rgba(255, 20, 147, 0.1);
  }

  @media (max-width: 768px) {
      padding: 15px;
      border-radius: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  background-color: var(--dark-section-bg);
  border-radius: 30px;
  margin-left: 1vw;
  margin-top: 2%;
  width: 512px;
  height: 768px;
  flex-direction: column;

  body.light-mode & {
      background-color: var(--light-section-bg);
  }

  @media (max-width: 1200px) {
      width: 400px;
      height: auto;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 15px auto;
    height: auto;
    border-radius: 15px;
  }
`;

export const RightContainer = styled.div`
  background-color: var(--dark-project-bg);
  width: 100%;
  margin-right: 8%;
  margin-left: 8%;
  padding: 20px;
  flex-grow: 1;

  body.light-mode & {
      background-color: var(--light-project-bg);
  }

  @media (max-width: 768px) {
     width: 95%;
     margin: 15px auto;
     padding: 15px;
  }
`;

export const MinigamesContainer = styled.div`
    width: 100%;
`;


export const MinigameStats = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-image: ${props => props.$backgroundImage};
  background-size: cover;
  background-position: center;
  background-color: var(--dark-project-bg);
  border-radius: 10px;
  border: 1px solid #121314;
  overflow: hidden;

  body.light-mode & {
      background-color: var(--light-project-bg);
      border-color: #eee;
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.1rem;
    color: var(--dark-link-color);
    padding: 0 10px;

    body.light-mode & {
        color: var(--light-link-color);
    }
  }
  .stats-wrapper {
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: stretch;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0 0 10px 10px;

    body.light-mode & {
        background-color: rgba(255, 255, 255, 0.6);
    }
  }
  .stat-item {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    width: 100%;
    color: white;

    body.light-mode & {
        color: var(--light-text-color);
        border-bottom-color: rgba(0, 0, 0, 0.1);
    }
  }
  .stat-item:last-child {
    border-bottom: none;
  }
  .stat-name {
    font-weight: normal;
    margin-left: 0px;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .stat-value {
    margin-left: 5px;
    font-weight: bold;
    text-align: right;
  }

   @media (max-width: 768px) {
       h4 { font-size: 1rem; }
       .stats-wrapper { padding: 10px; }
       .stat-item { font-size: 0.85rem; padding: 5px 0;}
   }
`;


export const ProfilePageContainer = styled(PContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;

  @media (max-width: 992px) {
      padding: 15px;
      gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 20px;
  }
`;

export const RightColumn = styled.div`
  background-color: var(--dark-project-bg);
  width: 100%;
  padding: 15px;
  border-radius: 25px;
  flex-grow: 1;
  margin: auto 1vw;
  margin-right: 10vw;
  margin-left: 10vw;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  body.light-mode & {
      background-color: var(--light-project-bg);
      border-radius: 20px;
      box-shadow: 0px 0px 5px rgb(146, 33, 145);
  }

  @media (max-width: 992px) {
       padding: 12px;
       border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    order: 2;
    box-sizing: border-box;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 30px;
  margin-top: 2%;
  padding: 20px;
  width: 300px;
  flex-shrink: 0;

  @media (max-width: 992px) {
      width: 250px;
      padding: 15px;
      margin-top: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 0;
    order: 1;
    border-radius: 0;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border: 2px solid ${props => props.$borderColor || 'transparent'};
  border-radius: 30px;
  flex-direction: column;
  align-items: center;

  body.light-mode & {
      border-color: ${props => props.$borderColor || 'rgba(255, 20, 147, 0.2)'};
  }

  @media (max-width: 768px) {
     border-radius: 15px;
  }
`;

export const GeneralInfoSection = styled.div`
    width: 100%;
`;

export const InfoCard = styled.div`
  background-color: var(--dark-project-bg);
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${props => props.$borderColor || 'transparent'};

  body.light-mode & {
      background-color: var(--light-project-bg);
       border-color: ${props => props.$borderColor || 'rgba(255, 20, 147, 0.2)'};
  }


  @media (max-width: 768px) {
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.span`
  font-weight: bold;
  color: #eee;
  margin-right: 10px;
  font-size: 0.9rem;

  body.light-mode & {
      color: var(--light-text-color);
      opacity: 0.8;
  }

  @media (max-width: 768px) {
      font-size: 0.85rem;
  }
`;

export const InfoValue = styled.span`
  color: #ddd;
  text-align: right;
  font-size: 0.9rem;

  body.light-mode & {
      color: var(--light-text-color);
  }

  @media (max-width: 768px) {
      font-size: 0.85rem;
  }
`;

export const MinigamesGrid = styled.div`
  display: grid;
  gap: 12px;
  padding: 5px 0 0 0;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

   @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 10px;
      padding: 5px 0 0 0;
      max-width: 100%;
   }

   @media (max-width: 480px) {
       grid-template-columns: 1fr;
       gap: 15px;
       max-width: 95%;
   }
`;

export const MinigameTitle = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: var(--dark-nav-bg);
  color: white;
  font-weight: bold;
  font-size: 1rem;

  body.light-mode & {
      background-color: var(--light-nav-bg);
      color: var(--light-nav-text);
  }

  @media (max-width: 768px) {
      padding: 8px;
      font-size: 0.9rem;
      border-radius: 8px 8px 0 0;
  }
`;

export const StatsWrapper = styled.div`
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  body.light-mode & {
      background-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
      padding: 10px;
      gap: 6px;
      border-radius: 0 0 8px 8px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: #eee;
  font-size: 0.95rem;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  body.light-mode & {
      color: var(--light-text-color);
      border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
      font-size: 0.9rem;
      padding-bottom: 4px;
  }
`;

export const StatName = styled.span`
  font-weight: normal;
  margin-right: 10px;
`;


export const CategoryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: fit-content;
  margin: 0 auto 20px auto;
  padding: 0 10px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 15px;
  }
`;

export const CategoryButton = styled.button`
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 17px;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;

    body.light-mode & {
        background-color: var(--light-button-bg);
        color: var(--light-button-text);
        border-color: var(--light-button-bg);
        box-shadow: 0 0 0 0 var(--light-button-bg);

        &:hover {
          transform: translateY(-4px) translateX(-2px);
          box-shadow: 2px 5px 0 0 var(--light-button-bg);
        };
        &:active {
           transform: translateY(2px) translateX(1px);
           box-shadow: 0 0 0 0 var(--light-button-bg);
        };
    }


    &:hover {
      transform: translateY(-4px) translateX(-2px);
      box-shadow: 2px 5px 0 0 black;
    };

    &:active {
      transform: translateY(2px) translateX(1px);
      box-shadow: 0 0 0 0 black;
    };

    @media (max-width: 768px) {
       font-size: 15px;
       padding: 0.8em 1.5em;
    }

    @media (max-width: 480px) {
       font-size: 14px;
       padding: 0.7em 1.2em;
    }
`;

export const AboutText = styled.p`
  color: var(--dark-text-color);
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 20px;
  padding: 0 20px;
  text-align: center;

  body.light-mode & {
    color: var(--light-text-color);
  }

  @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 15px;
      padding: 0 10px;
  }
`;

export const BannedText = styled.div`
 color: #AA0000;
 font-size: 20px;
 box-shadow: 0 0 10px #AA0000;
 border-radius: 30px;
 font-style: italic;
 font-weight: bold;
 padding: 10px 15px;
 text-align: center;
 margin: 15px 0;
 background-color: rgba(170, 0, 0, 0.1);

 @media (max-width: 768px) {
     font-size: 18px;
     padding: 8px 12px;
     border-radius: 20px;
 }
`

export const LeaderboardPageContainer = styled.div`
  display: flex;
  gap: 25px;
  max-width: 1600px;
  margin: 30px auto;
  padding: 0 20px;
  align-items: flex-start;
  color: var(--dark-text-color);
  body.light-mode & { color: var(--light-text-color); }

  @media (max-width: 992px) {
      gap: 15px;
      padding: 0 15px;
      margin: 20px auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    gap: 20px;
    margin: 15px auto;
    align-items: center;
  }
`;

export const ModeSidebar = styled.div`
  width: 220px;
  flex-shrink: 0;
  background-color: var(--dark-project-bg);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  h3 {
    color: var(--dark-link-color);
    margin-top: 0; margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--dark-nav-bg);
    font-size: 1.1em;
  }

  body.light-mode & {
      background-color: var(--light-project-bg);
      border: 1px solid #eee;
       h3 { color: var(--light-link-color); border-bottom-color: #eee; }
       box-shadow: 0 2px 5px rgba(255, 20, 147, 0.1);
  }

  @media (max-width: 768px) {
     width: 95%;
     padding: 15px;
     margin-bottom: 0;
     border-radius: 5px;
     margin-left: auto;
     margin-right: auto;

     h3 {
         font-size: 1rem;
         margin-bottom: 10px;
         padding-bottom: 8px;
     }
  }
`

export const ModeList = styled.ul`
  list-style: none; padding: 0; margin: 0;
`;

export const ModeListItem = styled.li`
  margin-bottom: 8px;

  @media (max-width: 768px) {
      margin-bottom: 6px;
  }
`;

export const LeaderboardDisplayContainer = styled.div`
  flex-grow: 1; min-width: 0;
  background-color: var(--dark-project-bg);
  padding: 25px; border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  width: 100%;

  h2 {
      text-align: center; color: var(--dark-link-color);
      margin-top: 0; margin-bottom: 25px;
  }

  body.light-mode & {
      background-color: var(--light-project-bg);
      border: 1px solid #eee;
      box-shadow: 0 2px 5px rgba(255, 20, 147, 0.1);
      h2 { color: var(--light-link-color); }
  }

  @media (max-width: 768px) {
      width: 95%;
      padding: 15px;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
      flex-grow: 0;

      h2 {
          font-size: 1.4rem;
          margin-bottom: 15px;
      }
  }
`;

export const LeaderboardTableWrapper = styled.div`
   @media (max-width: 768px) {
        overflow-x: auto;
       -webkit-overflow-scrolling: touch;
        width: 100%;
        display: block;
   }
`;


export const LeaderboardTable = styled.table`
  width: 100%; border-collapse: collapse; margin-top: 20px;
  color: var(--dark-text-color);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  th, td {
    padding: 10px 8px; text-align: left;
    border-bottom: 1px solid #3a3a3a;
    vertical-align: middle;
    white-space: nowrap;
  }

  th {
    color: #b0b0b0; font-size: 0.85em; font-weight: bold;
    text-transform: uppercase; border-bottom-width: 2px;
    border-color: #555;
    position: sticky;
    top: 0;
    background-color: var(--dark-project-bg);
     body.light-mode & {
         background-color: var(--light-project-bg);
         color: var(--light-nav-text);
         border-color: #ddd;
     }
  }

  th:first-child, td:first-child { width: 40px; text-align: center; color: #ccc; padding-left: 5px; padding-right: 5px;}
  th:nth-child(2), td:nth-child(2) { min-width: 150px; }
  th:not(:first-child):not(:nth-child(2)),
  td:not(:first-child):not(:nth-child(2)) { text-align: right; min-width: 70px; padding-right: 10px;}


  tbody tr {
      &:nth-child(even) { background-color: rgba(0,0,0,0.1); }
      &:hover { background-color: rgba(255,255,255,0.04); }

      body.light-mode & {
          color: var(--light-text-color); border-color: #eee;
          &:nth-child(even) { background-color: rgba(0,0,0,0.03); }
          &:hover { background-color: rgba(255, 20, 147, 0.05); }
           td { color: var(--light-text-color); }
           td:first-child { color: var(--light-nav-text); }
      }
  }

  td { font-size: 0.95em; color: #ddd; body.light-mode & { color: var(--light-text-color); } }

  .no-players-cell {
      text-align: center; padding: 20px; color: var(--dark-nav-text);
       body.light-mode & { color: var(--light-nav-text); }
  }

  @media (max-width: 768px) {
     margin-top: 10px;

     th, td {
         padding: 8px 6px;
         font-size: 0.9em;
         white-space: nowrap;
     }

     th {
         font-size: 0.8em;
     }

     th:nth-child(2), td:nth-child(2) { min-width: 120px; }
     th:not(:first-child):not(:nth-child(2)),
     td:not(:first-child):not(:nth-child(2)) { min-width: 60px; padding-right: 8px;}
  }
`;


export const TableAvatar = styled.img`
  width: 32px; height: 32px; border-radius: 4px;
  vertical-align: middle; margin-right: 10px;

  @media (max-width: 768px) {
      width: 28px; height: 28px; margin-right: 8px;
  }
`;

export const ClanText = styled.span`
  color: ${props => getClanStyles(props.$clanName).color || 'var(--dark-clan-color, #aaa)'};
  font-size: 0.9em;
  font-weight: ${props => getClanStyles(props.$clanName).fontWeight || 'bold'};
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  opacity: ${props => getClanStyles(props.$clanName).opacity || 1};

  body.light-mode & {
      color: ${props => getClanStyles(props.$clanName).color || 'var(--light-clan-color, #8B008B)'};
  }

   @media (max-width: 768px) {
       font-size: 0.85em;
   }
`;

export const BanIndicator = styled.span`
    color: #ff4d4d; margin-left: 8px; font-size: 0.85em;
    font-weight: bold; font-style: italic; vertical-align: middle;

     @media (max-width: 768px) {
         font-size: 0.8em;
         margin-left: 6px;
     }
`;

export const SortButtonContainer = styled.div`
  display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;
  padding: 0 10px;

  @media (max-width: 768px) {
     gap: 8px; margin-bottom: 20px;
  }
`;

export const SortButton = styled.button`
  padding: 8px 15px; font-size: 0.9em; font-weight: bold; border-radius: 6px;
  border: 1px solid var(--dark-nav-bg); cursor: pointer;
  background-color: ${props => props.$isActive ? 'var(--dark-link-color)' : 'var(--dark-project-bg)'};
  color: ${props => props.$isActive ? 'var(--dark-button-text)' : 'var(--dark-nav-text)'};
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${props => props.$isActive ? 'var(--dark-link-color)' : 'var(--dark-nav-text)'};
    background-color: ${props => props.$isActive ? 'var(--dark-link-color)' : 'var(--dark-section-bg)'};
    color: ${props => props.$isActive ? 'var(--dark-button-text)' : 'var(--dark-text-color)'};
  }

   body.light-mode & {
       border-color: var(--light-nav-bg);
       background-color: ${props => props.$isActive ? 'var(--light-link-color)' : 'var(--light-project-bg)'};
       color: ${props => props.$isActive ? 'var(--light-button-text)' : 'var(--light-nav-text)'};
       &:hover {
            border-color: ${props => props.$isActive ? 'var(--light-link-color)' : 'var(--light-nav-text)'};
            background-color: ${props => props.$isActive ? 'var(--light-link-color)' : 'var(--light-section-bg)'};
            color: ${props => props.$isActive ? 'var(--light-button-text)' : 'var(--light-text-color)'};
       }
   }

  @media (max-width: 768px) {
     padding: 7px 12px; font-size: 0.85em;
  }
`;


export default GlobalStyle;