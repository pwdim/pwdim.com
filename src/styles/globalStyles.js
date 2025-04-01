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
    --light-bg-color: #f8f8f8;
    --light-text-color: #333;
    --light-link-color: #007bff;
    --light-button-bg: #007bff;
    --light-button-text: #fff;
    --light-nav-bg: #e9ecef;
    --light-nav-text: #495057;
    --light-nav-hover: #007bff;
    --light-dropdown-bg: #e9ecef;
    --light-dropdown-text: #495057;
    --light-dropdown-hover: rgba(0, 123, 255, 0.2);
    --light-section-bg: #fff;
    --light-project-bg: #f0f0f0;

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

// Você pode adicionar mais estilos globais aqui se precisar
export default GlobalStyle;