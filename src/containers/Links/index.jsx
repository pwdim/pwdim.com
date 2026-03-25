import React, { useState } from 'react';
import * as S from '../Links/styles';
import SmokeBackground from '/src/components/SmokeBackground';
import { FaGithub, FaDiscord, FaEnvelope, FaCode } from 'react-icons/fa';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import { Container } from '../../styles/globalStyles';

const TechIcons = [
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MariaDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
  { name: 'Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Debian', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg' },
  { name: 'Cloud', url: 'https://img.icons8.com/fluency/96/cloud.png' },
  { name: 'Grafana', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'Postman', url: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Jira', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'IntelliJ', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  { name: 'Spigot', url: 'https://avatars.githubusercontent.com/u/4350249?s=200&v=4' },
  { name: 'Bukkit', url: 'https://media.forgecdn.net/avatars/thumbnails/65/443/48/48/636162895990633284.png' },
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
        <S.LeftColumn>
          <S.ContentCard>
            <DiscordProfileDisplay userId={YOUR_DISCORD_ID} />

            <S.SocialRow>
              <S.Glass href="https://github.com/pwdim" target="_blank" rel="noopener noreferrer"><FaGithub /></S.Glass>
              <S.Glass href="https://dc.pwdim.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></S.Glass>
              <S.Glass href="#copy" onClick={handleEmailClick}><FaEnvelope /></S.Glass>
            </S.SocialRow>
          </S.ContentCard>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ContentCard>
            <S.TechHeader>
              <FaCode /> <h3>Contato</h3>
            </S.TechHeader>
            <S.TechGrid>
              <p>
                Interessado em impulsionar novos projetos? Estou disponível para parcerias e oportunidades de mercado.
                Sinta-se à vontade para enviar uma mensagem: <br />
                <strong>contact@pwdim.com</strong>
              </p>
              <p>
                Conecte-se comigo diretamente pelo meu Discord, onde sou mais ativo: <br />
                <strong>@pwdium</strong>.
              </p>
              <p>
                Acompanhe a atualização dos meus projetos, incluindo esse site, através do GitHub: <br></br>
                <strong>github.com/pwdim</strong>
              </p>
            </S.TechGrid>
          </S.ContentCard>
        </S.RightColumn>
      </S.MainGrid>
    </Container>
  );
};

export default LinksPage;