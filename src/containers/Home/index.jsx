import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import MusicPlayerUI from '../../components/MusicPlayerUI';
import { FaTrophy, FaInfoCircle, FaGithub, FaDiscord } from 'react-icons/fa';
import backgroundMusic from '/music/ofeliasdream.mp3';
import { NavbarContainer } from '../../components/nav/styles';
import ThemeToggle from '../../components/ThemeToggle';

const videoSourceDark = '/videos/storm.mp4';
const videoSourceLight = '/videos/totoro.mp4';
export const Namemc = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#575858ff" d="M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z"></path>
</svg>
    )

const HomePage = () => {
  const DISCORD_ID = '386563422055170048';
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [discordData, setDiscordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setDiscordData(null);
    fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Network response was not ok')))
      .then(data => {
        if (data.success) {
          setDiscordData(data.data);
        } else {
          throw new Error('Lanyard API returned success: false');
        }
      })
      .catch(err => {
        console.error("Erro Lanyard:", err);
        setError(err.message || 'Falha ao buscar dados');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [DISCORD_ID]);

  const profileData = {
    links: [
      // { name: 'Leaderboards', url: '/leaderboard/hg', icon: FaTrophy, isInternal: true },
      { name: 'Sobre', url: '/about', icon: FaInfoCircle, isInternal: true },
      { name: 'GitHub', url: 'https://git.pwdim.com', icon: FaGithub, isInternal: false },
      { name: 'Discord', url: 'https://dc.pwdim.com/', icon: FaDiscord, isInternal: false },
      { name: 'NameMC', url: 'https://pt.namemc.com/search?q=fc883f59-f929-40b6-832c-95d1ee20e138', icon: Namemc, isInternal: false }, 
      { name: 'Laby.net', url: 'https://laby.net/@pwdim', icon: 'https://www.labymod.net/page/tpl/assets/images/white_wolf.png', isInternal: false }, 
    ]
  };

  const renderLinkButton = (link) => {
    let iconContent = null;


    if (typeof link.icon === 'string') {
      iconContent = <S.IconImage src={link.icon} alt={`${link.name} icon`} />;
    } else if (link.icon) {
      const IconComponent = link.icon;
      iconContent = <IconComponent />;
    }

    const content = (
      <>
        {iconContent && <S.IconWrapper>{iconContent}</S.IconWrapper>}
      </>
    );

    if (link.isInternal) {
      return <S.LinkButton key={link.name} href={link.url} title={link.name}>{content}</S.LinkButton>;
    } else {
      return (
        <S.LinkButton key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
          {content}
        </S.LinkButton>
      );
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const shouldPlay = !isPlaying;
    if (shouldPlay) {
      audio.play().then(() => { setIsPlaying(true); }).catch(playError => { console.error("Audio Play Error:", playError); setIsPlaying(false); });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) { audioRef.current.volume = 0.3; }
  }, []);

  const currentTrack = {
    title: "Ofelia's dream",
    artist: "Benjamin Tissot",
    albumArt: "https://cdn.bensound.com/image/cover/ofeliasdream.webp"
  };

  return (
    <S.HomePageContainer>
      

      <S.BackgroundVideo
        id="video-dark-mode"
        autoPlay loop muted playsInline
        key={videoSourceDark}
      >
      
        <source src={videoSourceDark} type="video/mp4" />
        <source src="/videos/storm.webm" type="video/webm" />
      </S.BackgroundVideo>

      
      <S.BackgroundVideo
        id="video-light-mode"
        autoPlay loop muted playsInline
        key={videoSourceLight}
      >
        <source src={videoSourceLight} type="video/mp4" />
        <source src="/videos/totoro2.webm" type="video/webm" />

      </S.BackgroundVideo>


      <audio ref={audioRef} src={backgroundMusic} loop />

      <MusicPlayerUI
        style={{ position: 'relative', zIndex: 2 }}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        songTitle={currentTrack.title}
        artistName={currentTrack.artist}
        albumArtUrl={currentTrack.albumArt}
      />


      <S.MainContent>
        

        <S.ProfileSection>
          {loading && <p>Carregando...</p>}
          {error && <S.ErrorMessage>Erro: {error}</S.ErrorMessage>}
          {!loading && !error && discordData && (
            <DiscordProfileDisplay userId={DISCORD_ID} />
          )}
          {!loading && !error && !discordData && !loading && (
            <p>pwdim</p>
          )}

          <ThemeToggle />
        </S.ProfileSection>

        <S.LinksSection>
          {profileData.links.map(renderLinkButton)}
        </S.LinksSection>

      </S.MainContent>
    </S.HomePageContainer>
  );
};

export default HomePage;