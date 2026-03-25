import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import MusicPlayerUI from '../../components/MusicPlayerUI';
import { FaEnvelope, FaInfoCircle, FaGithub, FaDiscord, FaCode } from 'react-icons/fa';
import backgroundMusic from '/music/ofeliasdream.mp3';
import ThemeToggle from '../../components/ThemeToggle';

const TechIcons = [
  { name: 'Java', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'JS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'MongoDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  { name: 'MariaDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg' },
    { name: 'Debian', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-original.svg' },
  { name: 'InteliJ', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg' },
];

const HomePage = () => {
  const DISCORD_ID = '386563422055170048';
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error(err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <S.HomePageContainer>
      <S.BackgroundVideo id="video-light-mode" autoPlay loop muted playsInline>
        <source src="/videos/totoro.mp4" type="video/mp4" />
      </S.BackgroundVideo>

      <audio ref={audioRef} src={backgroundMusic} loop />

      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10 }}>
        <ThemeToggle />
      </div>

      <S.MainContent>
        <S.ContentCard>
          <S.ContentCard>
                      <DiscordProfileDisplay userId={DISCORD_ID} />
          <S.AboutSection>
            <h3>Sobre mim</h3>
            <p>
              Me chamo Pedro (Pwdim), tenho 20 anos e sou estudante de ADS.
              Atualmente focado em me aprofundar no ecossistema <strong>Java</strong> e arquiteturas de BackEnd.
            </p>
          </S.AboutSection>

          <div>
            <S.LinksSection>
            <S.LinkButton href="https://git.pwdim.com" target="_blank"><FaGithub /></S.LinkButton>
            <S.LinkButton href="https://dc.pwdim.com/" target="_blank"><FaDiscord /></S.LinkButton>
            <S.LinkButton href="mailto:contact@pwdim.com"><FaEnvelope /></S.LinkButton>
            <S.LinkButton href="/about"><FaInfoCircle /></S.LinkButton>
          </S.LinksSection>
          </div>
          </S.ContentCard>
        </S.ContentCard>


        <S.ContentCard>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <S.ContentCard>
            <S.TechHeader>
              <FaCode />
              <h3>Tecnologias</h3>
            </S.TechHeader>

            <S.TechGrid>
              {TechIcons.map((tech) => (
                <S.TechItem key={tech.name}>
                  <S.TechIconCircle>
                    <img src={tech.url} alt={tech.name} />
                  </S.TechIconCircle>
                  <S.TechName>
                    <p>{tech.name}</p>
                  </S.TechName>
                </S.TechItem>
              ))}
            </S.TechGrid>
          </S.ContentCard>

          <S.ContentCard style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://github-readme-stats-eta-sage-69.vercel.app/api/top-langs?username=pwdim&show_icons=true&locale=pt-br&layout=compact&theme=dracula&hide_border=true&title_color=ff79c6&text_color=bd93f9"
              alt="Stats"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </S.ContentCard>
        </div>
        </S.ContentCard>
      </S.MainContent>

      <MusicPlayerUI
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        songTitle="Ofelia's dream"
        artistName="Benjamin Tissot"
        albumArtUrl="https://cdn2.bensound.com/image/cover/ofeliasdream.webp"
      />
    </S.HomePageContainer>
  );
};

export default HomePage;