import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
0%{transform:rotate(0)}
100%{transform:rotate(360deg)}
`;

const fadeIn = keyframes`
from{opacity:0;transform:translateY(30px)}
to{opacity:1;transform:translateY(0)}
`;

const fadeUp = keyframes`
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
0%,100%{transform:translateY(0)}
50%{transform:translateY(-8px)}
`;

const pulse = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.04); }
100% { transform: scale(1); }
`;

const rotateBorder = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const glow = keyframes`
0% { box-shadow: 0 0 0 rgba(96,223,255,0); }
50% { box-shadow: 0 0 25px rgba(96,223,255,.18), 0 0 50px rgba(96,223,255,.12); }
100% { box-shadow: 0 0 0 rgba(96,223,255,0); }
`;

const getStatusColor = status => {
  switch(status){
    case 'online': return '#43b581';
    case 'idle': return '#faa61a';
    case 'dnd': return '#f04747';
    default: return '#747f8d';
  }
};

export const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(76px, 8vh, 110px) clamp(12px, 3vw, 32px) 120px;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -3;
  transition: 0.5s;

  &#background-light-mode { display: none; }

  body.light-mode & {
    &#background-dark-mode { display: none; }
    &#background-light-mode { display: block; }
  }
`;

export const ThemeContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;

  @media (max-width: 600px) {
    top: 12px;
    right: 12px;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: minmax(290px, 360px) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 25px);
  width: min(100%, 1300px);
  align-items: start;
  z-index: 2;
  animation: ${fadeUp} 0.7s ease;
  min-width: 0;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(280px, 330px) minmax(0, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 22px);
  min-width: 0;
`;

export const ContentCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: clamp(18px, 2.2vw, 25px);
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: 0.45s;

  background: ${({ theme }) => theme.title === 'dark' 
    ? 'rgba(20, 24, 35, 0.45)' 
    : 'rgba(255, 255, 255, 0.45)'};

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid ${({ theme }) => theme.title === 'dark' 
    ? 'rgba(255, 255, 255, 0.08)' 
    : 'rgba(0, 0, 0, 0.08)'};

  box-shadow: ${({ theme }) => theme.title === 'dark' 
    ? '0 25px 70px rgba(0, 0, 0, 0.45)' 
    : '0 25px 60px rgba(0, 0, 0, 0.08)'};

  animation: ${fadeUp} 0.8s ease;

  &:hover {
    transform: translateY(-5px);
    animation: ${glow} 2s infinite;
  }
`;

export const GlassCard = styled(ContentCard)``;

export const CardBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const FloatingGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(96,223,255,.22), transparent 70%);
  filter: blur(30px);
  pointer-events: none;
  animation: ${pulse} 6s ease-in-out infinite;
  top: -60px;
  right: -60px;
  z-index: 0;
`;

export const BottomGlow = styled(FloatingGlow)`
  top: auto;
  right: auto;
  left: -60px;
  bottom: -60px;
  background: radial-gradient(circle, rgba(141,15,255,.18), transparent 70%);
  animation-delay: 2s;
`;

export const HeroTitle = styled.h1`
  margin: 10px 0 2px;
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#1d1d1d'};
`;

export const HeroSubtitle = styled.h2`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.6)' : '#666'};
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.8)' : '#444'};

  svg {
    font-size: 1rem;
    color: #60dfff;
  }
`;

export const AboutSection = styled.div`
  margin-top: auto;
  
  h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#171717'};
  }

  p {
    margin: 0 0 6px;
    line-height: 1.5;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.82)' : '#424242'};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Glass = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: 0.45s;
  transform-style: preserve-3d;
  background: ${({ theme }) => theme.title === 'dark' ? '#181c27' : '#fff'};
  border: 1px solid ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'};
  box-shadow: ${({ theme }) => theme.title === 'dark' ? '0 8px 20px rgba(0,0,0,.45)' : '0 8px 20px rgba(0,0,0,.12)'};

  &::before {
    content: "";
    position: absolute;
    width: 220%;
    height: 220%;
    background: conic-gradient(from 0deg, #60dfff, #3b82f6, #8d0fff, #60dfff);
    animation: ${rotateBorder} 4s linear infinite;
    opacity: 0;
    transition: 0.4s;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: ${({ theme }) => theme.title === 'dark' ? '#181c27' : '#fff'};
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
    font-size: 20px;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#222'};
    transition: 0.35s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.08) rotate(8deg);
    box-shadow: 0 15px 30px rgba(96,223,255,.35);
  }

  &:hover::before { opacity: 1; }
  &:hover svg {
    color: #60dfff;
    transform: scale(1.15);
  }
`;

export const TechHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  svg {
    font-size: 24px;
    color: #60dfff;
  }

  h2, h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#202124'};
  }
  
  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.6)' : '#666'};
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 15px;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: 0.35s;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: drop-shadow(0 5px 10px rgba(0,0,0,.2));
    transition: 0.35s;
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#333'};
    opacity: 0.8;
    transition: 0.35s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.08);
  }

  &:hover img {
    transform: rotate(-8deg) scale(1.15);
    filter: drop-shadow(0 10px 20px rgba(96,223,255,.35));
  }

  &:hover span {
    opacity: 1;
    color: #60dfff;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 15px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#171717'};
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
    border-radius: 14px;
    transition: 0.4s;
  }
  
  img:hover {
    transform: scale(1.03);
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`;

export const LinksSection = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  transition: .45s;
  background: ${({ theme }) => theme.title === 'dark' ? '#181b24' : '#fff'};
  box-shadow: 0 10px 25px rgba(0,0,0,.15);

  &::before {
    content: '';
    position: absolute;
    width: 220%;
    height: 220%;
    top: -60%;
    left: -60%;
    background: conic-gradient(#60dfff, #8d0fff, #60dfff);
    animation: ${borderAnimation} 4s linear infinite;
    opacity: 0;
    transition: .4s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: ${({ theme }) => theme.title === 'dark' ? '#181b24' : '#fff'};
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
    font-size: 1.45rem;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#222'};
    transition: .35s;
  }

  &:hover {
    transform: translateY(-6px) scale(1.08);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    color: #60dfff;
  }
`;

export const TechIconCircle = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.45)'};
  border: 1px solid ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.05)'};
  backdrop-filter: blur(18px);
  transition: .35s;
`;

export const TechName = styled.span`
  font-size: .9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.9)' : '#2b2b2b'};
  p { margin: 0; }
`;

export const StatsCard = styled(ContentCard)`
  padding: 25px;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 18px;
    transition: .35s;
  }

  img:hover {
    transform: scale(1.02);
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 22px;
  animation: ${float} 5s ease-in-out infinite;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ $statusColor }) => $statusColor};
  box-shadow: 0 0 30px ${({ $statusColor }) => $statusColor};
  transition: .35s;
`;

export const AvatarDecoration = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  transform: translate(-50%, -50%);
  width: 135%;
  pointer-events: none;
`;

export const StatusIndicator = styled.span`
  position: absolute;
  left: 80px;
  top: 80px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${p => getStatusColor(p.$status)};
  border: 4px solid ${({ theme }) => theme.title === 'dark' ? '#171a22' : '#fff'};
  box-shadow: 0 0 15px ${p => getStatusColor(p.$status)};
`;
export const UsernameDisplay = styled.h1`
  width: 100%;
  margin: 50px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: clamp(1.45rem, 3vw, 2.25rem);
  font-weight: 800;

  color: ${({ theme }) =>
    theme.title === 'dark' ? '#fff' : '#1d1d1d'};
`;

export const FullUsername = styled.span`
  margin-top: 5px;
  font-size: .95rem;
  color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.55)' : '#666'};
`;

export const StatusSection = styled.div`
  margin-top: 18px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 8px 18px;

  border-radius: 999px;

  background: ${({ theme }) =>
    theme.title === 'dark'
      ? 'rgba(255,255,255,.05)'
      : 'rgba(255,255,255,.55)'};

  backdrop-filter: blur(12px);
`;

export const StatusEmoji = styled.span`
  font-size: 1rem;
`;

export const StatusText = styled.p`
  margin: 0;
  font-size: .92rem;
  font-weight: 500;
  color: ${({ theme }) => theme.title === 'dark' ? '#ddd' : '#444'};
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#222'};
`;

export const IconImage = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: ${({ theme }) => theme.title === 'dark' ? 'brightness(0) invert(1)' : 'none'};
`;
export const ActivitySection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;

  margin-top: 28px;

  min-width: 0;
`;

export const ActivityItem = styled.div`
  width: 100%;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 12px;

  border-radius: 22px;

  background: ${({ theme }) =>
    theme.title === 'dark'
      ? 'rgba(255,255,255,.03)'
      : 'rgba(255,255,255,.42)'};

  border: 1px solid
    ${({ theme }) =>
      theme.title === 'dark'
        ? 'rgba(255,255,255,.08)'
        : 'rgba(0,0,0,.05)'};

  backdrop-filter: blur(18px);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(96,223,255,.35);

    box-shadow:
      0 10px 30px rgba(96,223,255,.12);
  }
`;

export const ActivityIcon = styled.div`
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 1.65rem;

  color: ${({ theme }) =>
    theme.title === 'dark'
      ? '#fff'
      : '#222'};

  border-radius: 16px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;
  }
`;

export const ActivityText = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  min-width: 0;

  overflow: hidden;

  strong {
    font-size: 1rem;
    font-weight: 700;

    color: ${({ theme }) =>
      theme.title === 'dark'
        ? '#fff'
        : '#222'};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    margin-top: 3px;

    font-size: .82rem;

    color: ${({ theme }) =>
      theme.title === 'dark'
        ? 'rgba(255,255,255,.55)'
        : '#777'};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-top: 6px;

    font-size: .9rem;

    color: ${({ theme }) =>
      theme.title === 'dark'
        ? 'rgba(255,255,255,.75)'
        : '#555'};

    overflow-wrap: anywhere;
  }

  @media (max-width: 420px) {
    strong,
    div {
      white-space: normal;

      overflow: visible;

      text-overflow: clip;

      overflow-wrap: anywhere;
    }
  }
`;

export const SpotifySection = styled(ActivityItem)`
  margin-top: 2px;

  border-left: 4px solid #1db954;
`;

export const AlbumArt = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(0,0,0,.25);
`;

export const SongInfo = styled(ActivityText)`
  strong { color: #1db954; }
  span { color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.75)' : '#555'}; }
`;

export const MusicPlayerWrapper = styled.div`
  padding: 22px;
  border-radius: 24px;
  background: ${({ theme }) => theme.title === 'dark' ? 'rgba(20,24,34,.45)' : 'rgba(255,255,255,.4)'};
  backdrop-filter: blur(22px);
  border: 1px solid ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.6)'};
`;

export const MusicControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ErrorMessage = styled.p`
  padding: 14px 18px;
  margin-top: 18px;
  border-radius: 14px;
  background: rgba(255,0,0,.12);
  border: 1px solid rgba(255,0,0,.15);
  color: #ff6d6d;
  font-weight: 600;
`;

export const NowPlayingDisplay = styled.div`
  position: fixed;
  left: clamp(12px, 2vw, 30px);
  bottom: max(12px, env(safe-area-inset-bottom));
  width: min(420px, calc(100vw - 24px));
  box-sizing: border-box;
  max-width: calc(100vw - 24px);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 20px;
  z-index: 1000;
  background: ${({ theme }) => theme.title === 'dark' ? 'rgba(20,24,34,.55)' : 'rgba(255,255,255,.45)'};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.6)'};
  box-shadow: 0 20px 45px rgba(0,0,0,.18);
  animation: ${fadeIn} .5s ease;
`;

export const NowPlayingAlbumArt = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(0,0,0,.2);
`;

export const SongInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

export const SongTitle = styled.span`
  font-size: .95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#202020'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`;

export const ArtistName = styled.span`
  margin-top: 2px;
  font-size: .82rem;
  color: ${({ theme }) => theme.title === 'dark' ? 'rgba(255,255,255,.6)' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`;

export const CopyMessageTop = styled.p`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  padding: 14px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #60dfff, #8d0fff);
  color: #fff;
  font-weight: 700;
  z-index: 99999;
  box-shadow: 0 15px 40px rgba(96,223,255,.35);
  animation: ${fadeIn} .35s ease;
`;

// --- NOVOS ESTILOS PARA O GRID DE PROJETOS ---

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(12px, 1.5vw, 20px);
  width: 100%;
  min-width: 0;

  @media (min-width: 701px) and (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioCard = styled.div`
  position: relative;
  min-width: 0;
  height: 240px; /* Ajustado para caber melhor na RightColumn */
  border-radius: 28px;
  overflow: hidden;
  text-decoration: none;
  transform-style: preserve-3d;
  transition: all 0.45s ease;
  cursor: pointer;

  background:
    radial-gradient(circle at top right, rgba(96, 223, 255, 0.35), transparent 55%),
    radial-gradient(circle at bottom left, rgba(141, 15, 255, 0.30), transparent 60%),
    linear-gradient(135deg, #111214, #1d2330);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  &:hover {
    transform: perspective(1000px) rotateX(8deg) rotateY(-8deg) translateY(-10px);
    box-shadow: 0 30px 70px rgba(96, 223, 255, 0.25), 0 0 35px rgba(96, 223, 255, 0.15);
  }
`;

export const CardImage = styled.img`
  min-width: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  transition: transform 0.45s ease;

  ${PortfolioCard}:hover & {
    transform: scale(1.08);
  }
`;

export const GlassEffect = styled.div`
  position: absolute;
  inset: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const CardContent = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 60px;
  z-index: 2;
  color: #fff;

  .icon {
    font-size: 1.5rem;
    color: #60dfff;
    margin-bottom: 8px;
  }

  h2 {
    margin: 0 0 5px;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #d5d5d5;
    line-height: 1.4;
    font-size: 0.85rem;
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #60dfff;
  font-weight: 700;
  font-size: 0.9rem;

  svg {
    transition: transform 0.3s ease;
  }

  ${PortfolioCard}:hover & svg {
    transform: translateX(8px);
  }
`;

export const ResponsiveText = styled.span`
  min-width: 0;
  overflow-wrap: anywhere;
`;