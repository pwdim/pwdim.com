import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import MusicPlayerUI from '../../components/MusicPlayerUI';
import ThemeToggle from '../../components/ThemeToggle';
import backgroundMusic from '/music/ofeliasdream.mp3';

// Ícones e Imagens
import {
  FaEnvelope, FaInfoCircle, FaGithub, FaDiscord, FaCode,
  FaLaptopCode, FaJava, FaServer, FaArrowRight, FaGlobe, FaRobot
} from 'react-icons/fa';

import pluginsImg from '../../assets/portfolio/plugins.png';
import websitesImg from '../../assets/portfolio/websites.png';
import botsImg from '../../assets/portfolio/bots.png';

const TechIcons = [
  { name: 'Java', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'JavaScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'MongoDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  { name: 'MariaDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg' },
  { name: 'Debian', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-original.svg' },
  { name: 'IntelliJ', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg' },
];

const portfolioItems = [
  { title: 'Plugins', desc: 'Plugins para Minecraft desenvolvidos em Java.', image: pluginsImg, icon: <FaCode />, link: '/portfolio/plugins' },
  { title: 'Websites', desc: 'Sites modernos utilizando React e outras tecnologias.', image: websitesImg, icon: <FaGlobe />, link: '/portfolio/websites' },
  { title: 'Bots', desc: 'Bots para Discord e automações.', image: botsImg, icon: <FaRobot />, link: '/portfolio/bots' },
];

const HomePage = () => {
  const DISCORD_ID = '386563422055170048';
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(console.error);
    setIsPlaying(!isPlaying);
  };

  return (
    <S.HomePageContainer>
      <S.Background id="background-dark-mode" style={{ backgroundImage: "url('/images/dark_background.jpeg')" }} />
      <S.Background id="background-light-mode" style={{ backgroundImage: "url('/images/light_background.png')" }} />

      <audio ref={audioRef} src={backgroundMusic} loop />

      <S.ThemeContainer>
        <ThemeToggle />
      </S.ThemeContainer>

      <S.MainContent>
        <S.LeftColumn>
          <S.GlassCard>
            <S.FloatingGlow />
            <S.BottomGlow />
            <S.CardBody>
              <DiscordProfileDisplay userId={DISCORD_ID} />
              <S.HeroTitle>FullStack Developer</S.HeroTitle>
              <S.HeroSubtitle>Java • Python • JavaScript</S.HeroSubtitle>
              <S.InfoGrid>
                <S.InfoItem><FaJava /><span>Java Developer</span></S.InfoItem>
                <S.InfoItem><FaLaptopCode /><span>ADS</span></S.InfoItem>
                <S.InfoItem><FaServer /><span>Linux / Servidores</span></S.InfoItem>
              </S.InfoGrid>
              <S.AboutSection>
                <S.SectionTitle>Sobre mim</S.SectionTitle>
                <p>Me chamo <strong>Pedro</strong>, 20 anos, curso Análise e Desenvolvimento de Sistemas.</p>
                <p>Atuo com Java, Python e JavaScript. Para projetos, entre em contato clicando no botão abaixo.</p>
              </S.AboutSection>
              <S.SocialRow>
                <S.Glass href="https://git.pwdim.com" target="_blank" title="GitHub"><FaGithub /></S.Glass>
                <S.Glass href="https://dc.pwdim.com" target="_blank" title="Discord"><FaDiscord /></S.Glass>
                <S.Glass href="mailto:contact@pwdim.com" title="Email"><FaEnvelope /></S.Glass>
                <S.Glass href="/about" title="Sobre"><FaInfoCircle /></S.Glass>
              </S.SocialRow>
            </S.CardBody>
          </S.GlassCard>
        </S.LeftColumn>

        <S.RightColumn>
          {/* Nova Seção de Cards (Portfolio) */}
          <S.PortfolioGrid>
            {portfolioItems.map((item) => (
              <S.PortfolioCard key={item.title} as={Link} to={item.link}>
                <S.CardImage src={item.image} alt={item.title} />
                <S.GlassEffect />
                <S.CardContent>
                  <div className="icon">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </S.CardContent>
                <S.CardFooter>
                  <span>Ver projetos</span>
                  <FaArrowRight />
                </S.CardFooter>
              </S.PortfolioCard>
            ))}
          </S.PortfolioGrid>

          {/* Seção Linguagens Utilizadas */}
          <S.GlassCard>
            <S.FloatingGlow />
            <S.BottomGlow />
            <S.CardBody>
              <S.TechHeader>
                <FaCode />
                <div>
                  <h2>Tecnologias</h2>
                  <span>Ferramentas de uso diário</span>
                </div>
              </S.TechHeader>
              <S.TechGrid>
                {TechIcons.map((tech) => (
                  <S.TechItem key={tech.name}>
                    <img src={tech.url} alt={tech.name} />
                    <span>{tech.name}</span>
                  </S.TechItem>
                ))}
              </S.TechGrid>
            </S.CardBody>
          </S.GlassCard>
        
        </S.RightColumn>
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