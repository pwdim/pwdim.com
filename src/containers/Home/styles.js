import styled from 'styled-components';

const getStatusColor = (status) => {
  switch (status) {
    case 'online': return '#43b581';
    case 'idle': return '#faa61a';
    case 'dnd': return '#f04747';
    default: return '#747f8d';
  }
};

export const HomePageContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza MainContent verticalmente */
  padding: 40px 20px;
  text-align: center;
  background-color: #101114;
  background-image: url('/src/assets/background/image_bbdd42.jpg'); /* VERIFIQUE CAMINHO */
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  body.light-mode & {
    background-color: #eef2f5;
    background-image: none;
  }
`;

export const MainContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza itens filhos horizontalmente */
  color: #e8eaed;

  body.light-mode & {
    color: #202124;
  }
`;

export const ProfileSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
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
  box-shadow: 0 0 12px 0px ${props => props.$statusColor || 'rgba(0, 0, 0, 0.3)'};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  body.light-mode & {
     border-color: ${props => props.$statusColor || 'rgba(0, 0, 0, 0.1)'};
     box-shadow: 0 0 10px 0px ${props => props.$statusColor || 'rgba(0, 0, 0, 0.1)'};
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
   bottom: -1px;
   right: -1px;
   width: 22px;
   height: 22px;
   border-radius: 50%;
   border: 4px solid rgba(16, 17, 20, 0.8);
   background-color: ${props => getStatusColor(props.$status)};
   z-index: 3;
   box-sizing: border-box;
   box-shadow: 0 0 8px 1px ${props => getStatusColor(props.$status)};

   body.light-mode & {
      border: 4px solid rgba(255, 255, 255, 0.8);
   }
 `;

export const UsernameDisplay = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);

  body.light-mode & {
    color: #111;
    text-shadow: none;
  }
`;

export const FullUsername = styled.span`
  font-size: 0.9rem;
  color: #b0b3b8;
  line-height: 1.2;
  margin-bottom: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);


  body.light-mode & {
     color: #5f6368;
     text-shadow: none;
  }
`;

export const StatusSection = styled.div`
   margin-bottom: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
 export const StatusEmoji = styled.span`
     margin-right: 6px;
     font-size: 1rem;
 `;
 export const StatusText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #adb5bd;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 1.4;

    body.light-mode & {
       color: #6c757d;
       text-shadow: none;
    }
 `;

export const ActivitySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    width: 100%;
    max-width: 350px;
`;

export const ActivityItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 8px 12px;
    background-color: rgba(16, 17, 20, 0.6);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
    box-sizing: border-box;

    body.light-mode & {
      background-color: rgba(255, 255, 255, 0.7);
      border-color: rgba(0, 0, 0, 0.08);
    }
`;

export const ActivityIcon = styled.div`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #b9bbbe;

    body.light-mode & {
       color: #4f5660;
    }
`;

export const ActivityText = styled.div`
    font-size: 0.875rem;
    line-height: 1.3;
    overflow: hidden;
    text-align: left;
    flex-grow: 1;
    color: #dcddde;

    div {
        font-size: 0.8rem;
        color: #b9bbbe;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        body.light-mode & { color: #4f5660; }
    }
    strong {
         color: #ffffff;
         font-weight: 500;
         display: block;
         white-space: nowrap;
         text-overflow: ellipsis;
         overflow: hidden;
         body.light-mode & { color: #060607; }
    }

    body.light-mode & {
       color: #2e3338;
    }
`;

 export const SpotifySection = styled(ActivityItem)`
 `;

export const AlbumArt = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 3px;
    flex-shrink: 0;
    margin-right: 5px;
`;

export const SongInfo = styled(ActivityText)`
    strong {
        font-size: 0.9rem;
        margin-bottom: 1px;
    }
    span {
        display: block;
        font-size: 0.8rem;
        color: #b9bbbe;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
         body.light-mode & { color: #4f5660; }
    }
     div { display: none; }
`;

 export const LinksSection = styled.div`
   display: flex;
   flex-direction: row; /* Muda para linha */
   justify-content: center; /* Centraliza os ícones na linha */
   gap: 20px; /* Espaço entre os ícones */
   width: 100%;
   max-width: 500px;
   margin-top: 35px; /* Ajuste a margem conforme necessário */
 `;

 /* Removido linkButtonStyles pois será diferente */

 export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px; /* Tamanho do botão circular */
    height: 48px;
    background-color: rgba(30, 31, 34, 0.7); /* Fundo similar ao UIVerse */
    color: #b0b3b8; /* Cor do ícone padrão */
    text-decoration: none;
    border-radius: 50%; /* Círculo */
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    &:hover {
      background-color: rgba(45, 46, 49, 0.9);
      color: #ffffff; /* Ícone branco no hover */
      transform: scale(1.1); /* Efeito de zoom */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: scale(1);
    }

    body.light-mode & {
      background-color: rgba(255, 255, 255, 0.8);
      color: #5f6368;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

      &:hover {
        background-color: rgba(248, 249, 250, 1);
        color: #202124;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
    }
 `;

 export const IconWrapper = styled.span`
    margin: 0; /* Remove margem extra */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6em; /* Tamanho do ícone dentro do círculo */
    /* A cor é herdada do LinkButton */
    transition: color 0.2s ease;
 `;

 /* export const LinkText = styled.span` ... Removido */

 export const ErrorMessage = styled.p`
   margin-top: 10px;
   color: #f8d7da;
   background-color: rgba(220, 53, 69, 0.6);
   padding: 8px 12px;
   border-radius: 5px;
   font-size: 0.9rem;
   font-weight: 500;
   text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);

   body.light-mode & {
       color: #721c24;
       background-color: rgba(248, 215, 218, 0.8);
       text-shadow: none;
   }
 `;

 export const MusicControlButton = styled.button`
    position: fixed;
    bottom: 20px; /* Movido para baixo conforme última instrução */
    left: 20px;
    background-color: rgba(30, 31, 34, 0.7);
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition: all 0.2s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: rgba(45, 46, 49, 0.8);
      color: #ffffff;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }

    svg {
      font-size: 1.2rem;
      display: block;
    }

    body.light-mode & {
       background-color: rgba(255, 255, 255, 0.75);
       color: rgba(0, 0, 0, 0.7);
       border: 1px solid rgba(0, 0, 0, 0.1);
       box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
       &:hover {
         background-color: rgba(248, 249, 250, 0.9);
         color: #000000;
       }
       &:active {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      }
    }
 `;

 export const NowPlayingDisplay = styled.div`
    position: fixed;
    bottom: 20px; /* Mantido no canto inferior esquerdo */
    left: 20px;  /* Sobrescreve a posição do MusicControlButton se ambos estiverem ativos */
    /* Ajuste a posição de um deles se precisar de ambos visíveis */
    background-color: rgba(40, 40, 40, 0.85);
    color: #ffffff;
    padding: 10px 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    font-size: 0.85rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    body.light-mode & {
        background-color: rgba(240, 240, 240, 0.9);
        color: #111111;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.05);
    }
`;

export const NowPlayingAlbumArt = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    flex-shrink: 0;
    object-fit: cover;
`;

export const SongInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.3;
    overflow: hidden;
`;

export const SongTitle = styled.span`
    font-weight: 500;
    color: #ffffff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    max-width: 180px;
    font-size: 0.9em;

    body.light-mode & {
       color: #111111;
    }
`;

export const ArtistName = styled.span`
    font-size: 0.8em;
    color: #b3b3b3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    max-width: 180px;

    body.light-mode & {
       color: #555555;
    }
`;