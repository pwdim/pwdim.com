import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden; 
  z-index: 1;
`;

export const CopyMessageTop = styled.p`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(50, 200, 50, 0.8);
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  body.light-mode & {
    background-color: rgba(50, 180, 50, 0.9);
    color: #000;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  
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
`;

export const StyledGlassContainer = styled(GlassContainer)``;


export const Glass = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  border: none;
  cursor: pointer;
  
  /* AJUSTE DE TAMANHO: Deixando o botão maior */
  width: 150px; 
  height: 65px;
  padding: 0;
  min-width: 150px; 
  
  border-radius: 9999px; 
  
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  z-index: 1;

  background: ${({ theme }) => theme.mode === 'dark' ? '#1c1c1c' : '#ffffff'};
  color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1c1c1c'};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    
    background: conic-gradient(
      #ff0080, #ff8c00, #40e0d0, #004d40, 
      #ff0080, #ff8c00, #40e0d0, #004d40
    );
    
    top: -50%;
    left: -50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: ${borderAnimation} 6s linear infinite;
    
    border-radius: 9999px; 
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    
    border-radius: 9999px;
    
    z-index: 1;
    
    background: ${({ theme }) => theme.mode === 'dark' ? '#1c1c1c' : '#ffffff'};
    transition: background 0.3s ease;
  }

  & svg {
    vertical-align: middle;
    /* MUDANÇA: Remove margin-right para centralizar o ícone */
    margin-right: 0;
    /* Aumenta o tamanho do ícone para preencher mais o botão */
    font-size: 2em; 
    z-index: 2;
    fill: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1c1c1c'};
    transition: fill 0.3s ease;
  }

  &[data-text]::after {
    content: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    background: ${({ theme }) => theme.mode === 'dark' ? '#1a1a1a' : '#f0f0f0'}; 
  }

  @media (max-width: 768px) {
    /* Ajuste responsivo */
    width: 120px;
    height: 55px;
    min-width: 120px;
    padding: 0;
    margin: 0;
    transform: none;
    
    & svg {
      font-size: 1.8em;
    }

    &:hover {
      transform: none;
    }
  }
`;