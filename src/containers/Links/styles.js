import styled from 'styled-components';

export const HomePageContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  text-align: center;

  body.light-mode & {
    /* Sem background-color aqui também */
  }
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1; /* Agora é o elemento mais ao fundo */
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
  /* Removido filter: brightness */
`;

/* export const VideoOverlay = styled.div`...` Removido */

export const MainContent = styled.div`
  position: relative;
  z-index: 1; /* Acima do vídeo */
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-text-color, #e8eaed);

  body.light-mode & {
    /* Cor do texto precisa contrastar com o vídeo no modo claro */
    color: var(--light-text-color, #202124);
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UsernameDisplay = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  /* Sombra mais forte para garantir legibilidade sobre o vídeo */
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85);
  margin: 0;

  body.light-mode & {
    /* Cor clara pode precisar de sombra clara ou escura dependendo do vídeo */
    color: var(--light-heading-color, #ffffff); /* Manter branco pode ser melhor */
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7); /* Sombra escura ajuda */
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 10px;
  color: #f8d7da; /* Vermelho claro */
  background-color: rgba(220, 53, 69, 0.6); /* Fundo vermelho semi-transparente */
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);

  body.light-mode & {
    color: #721c24; /* Texto escuro */
    background-color: rgba(248, 215, 218, 0.8); /* Fundo claro */
    text-shadow: none;
  }
`;