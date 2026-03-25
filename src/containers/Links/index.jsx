import React, { useState } from 'react';
import * as S from '../Links/styles';
import SmokeBackground from '/src/components/SmokeBackground';
import { FaGithub, FaDiscord, FaEnvelope, FaCode } from 'react-icons/fa';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import { Container } from '../../styles/globalStyles';

// Componente para renderizar os ícones de tecnologia (baseado no seu ReadMe)
const TechIcons = [
  { name: 'Java', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'JS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'MongoDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  { name: 'Linux', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
];

const LinksPage = () => {
  const YOUR_DISCORD_ID = '386563422055170048';
  const [copyMessage, setCopyMessage] = useState('');
  const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@pwdim.com').then(() => {
      setCopyMessage('Email copiado!');
      setIsCopyMessageVisible(true);
      setTimeout(() => setIsCopyMessageVisible(false), 3000);
    });
  };

  return (
    <Container>
      <SmokeBackground />
      {isCopyMessageVisible && <S.CopyMessageTop>{copyMessage}</S.CopyMessageTop>}

      <S.MainGrid>
        {/* LADO ESQUERDO: PERFIL E SOBRE */}
        <S.LeftColumn>
          <S.ContentCard>
            <DiscordProfileDisplay userId={YOUR_DISCORD_ID} />
            <S.AboutSection>
              <h3>Sobre mim</h3>
              <p>
                Me chamo Pedro (Pwdim), tenho 20 anos e sou estudante de ADS. 
                Atualmente focado em me aprofundar no ecossistema <strong>Java</strong> e arquiteturas de BackEnd.
              </p>
            </S.AboutSection>
            
            <S.SocialRow>
              <S.Glass href="https://github.com/pwdim" target="_blank" rel="noopener noreferrer"><FaGithub /></S.Glass>
              <S.Glass href="https://dc.pwdim.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></S.Glass>
              <S.Glass href="#copy" onClick={handleEmailClick}><FaEnvelope /></S.Glass>
            </S.SocialRow>
          </S.ContentCard>
        </S.LeftColumn>

        {/* LADO DIREITO: TECNOLOGIAS */}
        <S.RightColumn>
          <S.ContentCard>
            <S.TechHeader>
              <FaCode /> <h3>Tecnologias</h3>
            </S.TechHeader>
            <S.TechGrid>
              {TechIcons.map((tech) => (
                <S.TechItem key={tech.name} title={tech.name}>
                  <img src={tech.url} alt={tech.name} />
                  <span>{tech.name}</span>
                </S.TechItem>
              ))}
            </S.TechGrid>
          </S.ContentCard>
          
          <S.StatsCard>
             <img src="https://github-readme-stats-eta-sage-69.vercel.app/api/top-langs?username=pwdim&show_icons=true&locale=pt-br&layout=compact&theme=dracula&hide_border=true&title_color=ff79c6&text_color=bd93f9" alt="Stats" />
          </S.StatsCard>
        </S.RightColumn>
      </S.MainGrid>
    </Container>
  );
};

export default LinksPage;