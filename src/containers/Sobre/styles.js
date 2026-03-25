import styled, { keyframes } from 'styled-components';

// --- Animações Originais ---
const borderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Containers de Layout ---
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  position: relative;
  overflow-x: hidden; 
  z-index: 1;
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
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeIn} 1s ease-out forwards;
`;

// --- Cards e Seções ---
export const ContentCard = styled.div`
  background: ${({ theme }) => theme.title === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 35px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #60dfff;

  svg {
    font-size: 1.5rem;
  }
`;

export const BioText = styled.div`
  margin-top: 15px;
  color: ${({ theme }) => theme.title === 'dark' ? '#ccc' : '#444'};
  line-height: 1.7;
  font-size: 1rem;

  code {
    background: rgba(0,0,0,0.3);
    padding: 4px 8px;
    border-radius: 6px;
    color: #8ab4f8;
    font-family: 'Fira Code', monospace;
  }
  
  strong {
    color: #8ab4f8;
  }
`;

// --- Grid de Tecnologias ---
export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 25px;
  margin-top: 10px;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.15) translateY(-5px);
  }
`;

export const TechIconCircle = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }
`;

export const TechName = styled.div`
  span {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.7;
    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#333'};
  }
`;

// --- Links e Botões (O seu "Glass" renomeado para LinkButton) ---
export const LinksSection = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
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

  background: #1c1c1c;
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
    inset: 2px;
    border-radius: 50%;
    z-index: 1;
    background: #1c1c1c;
  }

  & svg {
    font-size: 1.5rem;
    z-index: 2;
    fill: #ffffff;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    &::before { opacity: 1; }
    & svg { fill: #60dfff; }
  }
`;