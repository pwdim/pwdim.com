import styled from 'styled-components';

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 20px; /* Mudado de top para bottom */
  left: 20px;
  background-color: rgba(30, 31, 34, 0.85);
  color: #e8eaed;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 300px;

  body.light-mode & {
    background-color: rgba(248, 249, 250, 0.9);
    color: #202124;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

export const PlayerAlbumArt = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  flex-shrink: 0;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

export const PlayerInfoControls = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const SongDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;

  > div {
    overflow: hidden;
    padding-right: 5px;
  }
`;

export const SongTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  body.light-mode & {
    color: #111;
  }
`;

export const ArtistName = styled.div`
  font-size: 0.8rem;
  color: #b0b3b8;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

   body.light-mode & {
    color: #5f6368;
  }
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  color: #b0b3b8;
  padding: 0 0 0 5px;
  cursor: pointer;
  font-size: 1rem;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    color: #ffffff;
     body.light-mode & { color: #111; }
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  body.light-mode & {
    color: #5f6368;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-bottom: 8px;
  cursor: pointer;
  overflow: hidden;

  body.light-mode & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-radius: 2px;
  transition: width 0.1s linear;

  body.light-mode & {
    background-color: #5f6368;
  }
`;

export const ControlsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  color: #b0b3b8;
  font-size: 1rem;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover:not(:disabled) {
    color: #ffffff;
    body.light-mode & { color: #111; }
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  body.light-mode & {
    color: #5f6368;
  }

  &:nth-child(3) {
    font-size: 1.4rem;
    color: #ffffff;
    body.light-mode & { color: #111; }
    &:hover:not(:disabled) {
      transform: scale(1.1);
    }
  }
`;