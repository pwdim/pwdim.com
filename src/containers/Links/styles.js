import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
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

export const MainGrid = styled.div`
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
  }
`;

export const ContentCard = styled.div`
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 35px;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

export const AboutSection = styled.div`
  margin-top: 25px;
  color: ${({ theme }) => theme.mode === 'dark' ? '#ccc' : '#444'};
  
  h3 {
    margin-bottom: 12px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.mode === 'dark' ? '#fff' : '#000'};
  }
  
  p {
    line-height: 1.7;
    font-size: 1rem;
    
    strong {
      color: #8ab4f8;
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 25px;
  margin-top: 25px;
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
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.7;
    color: ${({ theme }) => theme.mode === 'dark' ? '#fff' : '#333'};
  }

  &:hover {
    transform: scale(1.15) translateY(-5px);
    span { opacity: 1; }
  }
`;

export const TechHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ff79c6;

  svg {
    font-size: 1.5rem;
  }
`;

export const StatsCard = styled(ContentCard)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
  }
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

  background: ${({ theme }) => theme.mode === 'dark' ? '#1c1c1c' : '#ffffff'};
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
    background: ${({ theme }) => theme.mode === 'dark' ? '#1c1c1c' : '#ffffff'};
    transition: background 0.3s ease;
  }

  & svg {
    font-size: 1.8rem; 
    z-index: 2;
    fill: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1c1c1c'};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    &::before { opacity: 1; }
    & svg { fill: #ff79c6; }
  }
`;