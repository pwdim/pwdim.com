import React from 'react';
import * as S from './styles';
import {
  FaPlay, FaPause, FaStepBackward, FaStepForward, FaHeart, FaRandom, FaRedo
} from 'react-icons/fa';

const MusicPlayerUI = ({
  isPlaying,
  togglePlayPause,
  songTitle,
  artistName,
  albumArtUrl
}) => {

  return (
    <S.PlayerContainer>
      <S.PlayerAlbumArt src={albumArtUrl} alt="Album Art" />
      <S.PlayerInfoControls>
        <S.SongDetails>
          <div>
            <S.SongTitle>{songTitle}</S.SongTitle>
            <S.ArtistName>{artistName}</S.ArtistName>
          </div>
          <S.LikeButton disabled>
            <FaHeart />
          </S.LikeButton>
        </S.SongDetails>

        <S.ProgressBarContainer>
          <S.ProgressBarFill style={{ width: '0%' }} />
        </S.ProgressBarContainer>

        <S.ControlsRow>
          <S.ControlButton disabled title="Aleatório">
             <FaRandom />
          </S.ControlButton>
          <S.ControlButton disabled title="Anterior">
             <FaStepBackward />
          </S.ControlButton>
          <S.ControlButton onClick={togglePlayPause} title={isPlaying ? "Pausar" : "Tocar"}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </S.ControlButton>
          <S.ControlButton disabled title="Próxima">
            <FaStepForward />
          </S.ControlButton>
          <S.ControlButton disabled title="Repetir">
             <FaRedo />
          </S.ControlButton>
        </S.ControlsRow>
      </S.PlayerInfoControls>
    </S.PlayerContainer>
  );
};

export default MusicPlayerUI;