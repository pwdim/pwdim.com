import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;


const getStatusColor = (status) => {
  switch (status) {
    case 'online': return '#43b581';
    case 'idle': return '#faa61a';
    case 'dnd': return '#f04747';
    default: return '#747f8d';
  }
};


export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;


export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 1;

  &#background-light-mode {
    display: none;
  }

  body.light-mode & {
    &#background-dark-mode {
      display: none;
    }
    &#background-light-mode {
      display: block;
    }
  }
`;

export const BackgroundVideo = styled.video`

position: fixed;

top: 0;

left: 0;

width: 100%;

height: 100%;

object-fit: cover;

z-index: -1;

opacity: 1;

&#video-light-mode {

display: none;

}

body.light-mode & {

&#video-dark-mode {

display: none;

}

&#video-light-mode {

display: block;

}

}

`;


export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
  z-index: 2;
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;


export const ContentCard = styled.div`
  background: ${({ theme }) => theme.title === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 35px;
  height: 90%;
  transition: transform 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  body.light-mode & {
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
`;


export const LeftColumn = styled.div`

display: flex;

flex-direction: column;

gap: 20px;

animation: ${fadeIn} 1s ease-out forwards;

`;


export const RightColumn = styled.div`

display: flex;

flex-direction: column;

gap: 20px;

animation: ${fadeIn} 1.2s ease-out forwards;

`;


export const ProfileSection = styled.div`

margin-bottom: 20px;

display: flex;

flex-direction: column;

align-items: center;

width: 100%;

`;


export const AvatarContainer = styled.div`

position: relative;

width: 120px;

height: 120px;

margin-bottom: 20px;

`;


export const ProfileImage = styled.img`

display: block;

width: 100%;

height: 100%;

border-radius: 50%;

position: relative;

z-index: 1;

border: 3px solid ${props => props.$statusColor || 'rgba(255, 255, 255, 0.1)'};

box-shadow: 0 0 20px 0px ${props => props.$statusColor || 'rgba(0, 0, 0, 0.3)'};

transition: all 0.3s ease;


body.light-mode & {

border-color: ${props => props.$statusColor || 'rgba(0, 0, 0, 0.1)'};

box-shadow: 0 0 15px 0px ${props => props.$statusColor || 'rgba(0, 0, 0, 0.1)'};

}

`;


export const AvatarDecoration = styled.img`

position: absolute;

top: 50%;

left: 50%;

transform: translate(-50%, -50%);

width: 144%;

height: auto;

max-height: 144%;

pointer-events: none;

z-index: 2;

`;


export const StatusIndicator = styled.span`

position: absolute;

bottom: 4px;

right: 4px;

width: 24px;

height: 24px;

border-radius: 50%;

border: 4px solid rgba(25, 26, 30, 0.9);

background-color: ${props => getStatusColor(props.$status)};

z-index: 3;

box-sizing: border-box;

box-shadow: 0 0 10px 1px ${props => getStatusColor(props.$status)};


body.light-mode & {

border: 4px solid rgba(255, 255, 255, 0.9);

}

`;


export const UsernameDisplay = styled.h1`

font-size: 2.2rem;

font-weight: 800;

color: #ffffff;

margin-bottom: 5px;

letter-spacing: -0.5px;

text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);


body.light-mode & {

color: #1a1a1b;

text-shadow: none;

}

`;


export const FullUsername = styled.span`

font-size: 0.95rem;

color: rgba(255, 255, 255, 0.6);

line-height: 1.2;

margin-bottom: 15px;

font-weight: 500;


body.light-mode & {

color: #5c6370;

}

`;


export const StatusSection = styled.div`

margin-bottom: 20px;

display: flex;

align-items: center;

justify-content: center;

background: rgba(0, 0, 0, 0.2);

padding: 6px 16px;

border-radius: 20px;

backdrop-filter: blur(5px);


body.light-mode & {

background: rgba(0, 0, 0, 0.05);

}

`;


export const StatusEmoji = styled.span`

margin-right: 8px;

font-size: 1.1rem;

`;


export const StatusText = styled.p`

font-size: 0.95rem;

font-weight: 500;

color: #dcddde;

margin: 0;

line-height: 1.4;


body.light-mode & {

color: #4f5660;

}

`;


export const AboutSection = styled.div`
  margin-top: 25px;
  text-align: left;
  color: ${({ theme }) => theme.title === 'dark' ? '#ccc' : '#fff'};

  h3 {
    margin-bottom: 12px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title === 'dark' ? '#000' : '#fff'};
  }

  p {
    line-height: 1.7;
    font-size: 1rem;

    strong {
      color: ${({ theme }) => theme.title === 'dark' ? '#8ab4f8' : '#1a73e8'};
    }
  }
`;


export const ActivitySection = styled.div`

display: flex;

flex-direction: column;

align-items: center;

gap: 12px;

margin-bottom: 20px;

width: 100%;

box-sizing: border-box;

`;


export const ActivityItem = styled.div`

display: flex;

align-items: center;

justify-content: flex-start;

gap: 15px;

padding: 12px 18px;

background-color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};

border-radius: 18px;

border: 1px solid rgba(255, 255, 255, 0.05);

width: 100%;

box-sizing: border-box;

transition: transform 0.2s ease;


&:hover {

transform: scale(1.01);

background-color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)'};

}


body.light-mode & {

border-color: rgba(0, 0, 0, 0.05);

}

`;


export const ActivityIcon = styled.div`

width: 64px;

height: 64px;

flex-shrink: 0;

display: flex;

align-items: center;

justify-content: center;

position: relative;


img {

width: 100%;

height: 100%;

display: block;

border-radius: 12px;

object-fit: cover;

}

`;


export const ActivityText = styled.div`

font-size: 0.9rem;

line-height: 1.4;

overflow: hidden;

text-align: left;

flex-grow: 1;

color: #dcddde;


div {

font-size: 0.8rem;

color: rgba(255, 255, 255, 0.5);

white-space: nowrap;

text-overflow: ellipsis;

overflow: hidden;


body.light-mode & { color: #5c6370; }

}


strong {

color: #ffffff;

font-weight: 600;

display: block;

white-space: nowrap;

text-overflow: ellipsis;

overflow: hidden;


body.light-mode & { color: #1a1a1b; }

}


body.light-mode & {

color: #2e3338;

}

`;


export const SpotifySection = styled(ActivityItem)`

border-left: 4px solid #1db954;

`;


export const AlbumArt = styled.img`

width: 48px;

height: 48px;

border-radius: 8px;

flex-shrink: 0;

object-fit: cover;

box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

`;


export const SongInfo = styled(ActivityText)`

strong {

font-size: 0.95rem;

margin-bottom: 2px;

color: #1db954;


body.light-mode & { color: #169c46; }

}

span {

display: block;

font-size: 0.85rem;

color: rgba(255, 255, 255, 0.7);

white-space: nowrap;

text-overflow: ellipsis;

overflow: hidden;


body.light-mode & { color: #4f5660; }

}

div { display: none; }

`;


export const SocialRow = styled.div`

display: flex;

gap: 15px;

margin-top: 30px;

justify-content: flex-start;

flex-wrap: wrap;

`;


export const Glass = styled.a`

position: relative;

display: flex;

align-items: center;

justify-content: center;

overflow: hidden;

text-decoration: none;

cursor: pointer;

width: 65px;

height: 65px;

border-radius: 50%;

transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

z-index: 1;


background: ${({ theme }) => theme.title === 'dark' ? '#1c1c1c' : '#ffffff'};

box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);


&::before {

content: '';

position: absolute;

width: 200%;

height: 200%;

background: conic-gradient(

#ff0080, #ff8c00, #40e0d0, #004d40, #ff0080

);

top: -50%;

left: -50%;

z-index: -1;

opacity: 0;

transition: opacity 0.4s ease;

animation: ${borderAnimation} 4s linear infinite;

}


&::after {

content: '';

position: absolute;

inset: 3px;

border-radius: 50%;

z-index: 1;

background: ${({ theme }) => theme.title === 'dark' ? '#1c1c1c' : '#ffffff'};

transition: background 0.3s ease;

}


& svg {

font-size: 1.8rem;

z-index: 2;

fill: ${({ theme }) => theme.title === 'dark' ? '#ffffff' : '#1c1c1c'};

transition: all 0.3s ease;

}


&:hover {

transform: scale(1.1) rotate(5deg);

&::before { opacity: 1; }

& svg { fill: #ff79c6; }

}

`;


export const TechHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  /* Cor do ícone FaCode e do container */
  color: ${({ theme }) => (theme.title === 'dark' ? '#8ab4f8' : '#1a73e8')};

  h3 {
    margin: 0; 
    font-size: 1.5rem;
    /* Dark: Branco | Light: Preto/Cinza Escuro */
    color: ${({ theme }) => (theme.title === 'dark' ? '#ffffff' : '#fff')};
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 25px;
  margin-top: 25px;
  width: 100%;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    width: 48px;
    height: 48px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  }

  &:hover {
    transform: scale(1.15) translateY(-5px);
  }
`;

export const TechName = styled.span`
  font-weight: 600;
  opacity: 0.9;

  p {
    margin: 0;
    font-size: 0.9rem;
    /* Dark: Branco | Light: Cinza Escuro */
    color: ${({ theme }) => (theme.title === 'dark' ? '#ffffff' : '#ffffff')};
  }
`;

export const TechIconCircle = styled.div`
  width: 60px;
  height: 60px;
  /* Fundo levemente visível em ambos os temas */
  background: ${({ theme }) => (theme.title === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => (theme.title === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
`;

export const StatsCard = styled(ContentCard)`

padding: 20px;

display: flex;

justify-content: center;

align-items: center;

margin-top: 20px;

img {

max-width: 100%;

height: auto;

border-radius: 12px;

}

`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 80%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;


export const LinkButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;

  background: ${({ theme }) => theme.title === 'dark' ? '#1c1c1c' : '#1c1c1c'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(#ff0080, #ff8c00, #40e0d0, #004d40, #ff0080);
    top: -50%;
    left: -50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: ${borderAnimation} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2px; /* Reduzi um pouco para o brilho ficar mais fino */
    border-radius: 50%;
    z-index: 1;
    background: ${({ theme }) => theme.title === 'dark' ? '#1c1c1c' : '#1c1c1c'};
  }

  & svg {
    font-size: 1.5rem;
    z-index: 2;
    fill: ${({ theme }) => theme.title === 'dark' ? '#ffffff' : '#fff'};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    &::before { opacity: 1; }
    & svg { fill: #60dfff; }
  }

  body.light-mode & {
      background: #ffffff;
    &::after { background: #ffffff; }
    & svg { fill: #1c1c1c; }
      &:hover {
       transform: scale(1.1) rotate(5deg);
       &::before { opacity: 1; }
       & svg { fill: #60dfff; }
  }
  }
`;


export const IconWrapper = styled.span`

display: flex;

align-items: center;

justify-content: center;

font-size: 1.8rem;

body.light-mode & {

color: #2e3338;

}

`;


export const IconImage = styled.img`

width: 28px;

height: 28px;

display: block;

object-fit: contain;

filter: ${({ theme }) => theme.title === 'dark' ? 'brightness(0) invert(1)' : 'none'};

`;


export const MusicPlayerWrapper = styled.div`

position: relative;

z-index: 2;

padding: 20px;

margin-top: 20px;

background-color: ${({ theme }) => theme.title === 'dark' ? 'rgba(30, 31, 34, 0.6)' : 'rgba(255, 255, 255, 0.7)'};

backdrop-filter: blur(20px);

border-radius: 20px;

border: 1px solid rgba(255, 255, 255, 0.1);

`;


export const ErrorMessage = styled.p`

margin-top: 15px;

color: #ff8383;

background-color: rgba(220, 53, 69, 0.15);

padding: 12px 20px;

border-radius: 12px;

font-size: 0.9rem;

font-weight: 600;

border: 1px solid rgba(220, 53, 69, 0.2);

display: flex;

align-items: center;

gap: 8px;

`;


export const MusicControlButton = styled.button`

cursor: pointer;

border: none;

background: none;

transition: transform 0.2s ease;

display: flex;

align-items: center;

justify-content: center;


&:hover {

transform: scale(1.1);

}

`;


export const NowPlayingDisplay = styled.div`

position: fixed;

bottom: 30px;

left: 30px;

background-color: ${({ theme }) => theme.title === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)'};

color: ${({ theme }) => theme.title === 'dark' ? '#ffffff' : '#1a1a1b'};

padding: 12px 16px;

border-radius: 14px;

display: flex;

align-items: center;

gap: 14px;

z-index: 1000;

box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

font-size: 0.9rem;

backdrop-filter: blur(12px);

-webkit-backdrop-filter: blur(12px);

border: 1px solid rgba(255, 255, 255, 0.1);

animation: ${fadeIn} 0.5s ease-out;


body.light-mode & {

box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

border: 1px solid rgba(0, 0, 0, 0.05);

}

`;


export const NowPlayingAlbumArt = styled.img`

width: 44px;

height: 44px;

border-radius: 8px;

flex-shrink: 0;

object-fit: cover;

box-shadow: 0 2px 8px rgba(0,0,0,0.2);

`;


export const SongInfoWrapper = styled.div`

display: flex;

flex-direction: column;

align-items: flex-start;

line-height: 1.4;

overflow: hidden;

`;


export const SongTitle = styled.span`

font-weight: 700;

color: inherit;

white-space: nowrap;

text-overflow: ellipsis;

overflow: hidden;

width: 100%;

max-width: 200px;

font-size: 0.95rem;

`;


export const ArtistName = styled.span`

font-size: 0.8rem;

color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'};

white-space: nowrap;

text-overflow: ellipsis;

overflow: hidden;

width: 100%;

max-width: 200px;

`;


export const CopyMessageTop = styled.p`

position: fixed;

top: 25px;

left: 50%;

transform: translateX(-50%);

background-color: #4BB543;

color: #fff;

padding: 12px 24px;

border-radius: 12px;

box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

font-weight: 600;

z-index: 9999;

animation: ${fadeIn} 0.3s ease-out;

`; 