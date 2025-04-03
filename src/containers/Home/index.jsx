import React, { useState } from 'react';
import * as S from '../../styles/globalStyles';
import SmokeBackground from '/src/components/SmokeBackground';
import { FaGithub } from 'react-icons/fa'; 
import { FaDiscord } from 'react-icons/fa';   
import { MdEmail } from 'react-icons/md';  


const HomePage = () => {
    const linksData = [
        { name: 'Github', url: 'https://github.com/pwdim', icon: FaGithub },
        { name: 'Discord', url: 'https://dc.pwdim.com', icon: FaDiscord },
        { name: 'Email', url: '#copy-email', icon: MdEmail },
        
    ];

  const [copyMessage, setCopyMessage] = useState('');
  const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    const email = 'contato@pwdim.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopyMessage('Email copiado para a área de transferência!');
        setIsCopyMessageVisible(true);
        setTimeout(() => {
          setIsCopyMessageVisible(false);
          setCopyMessage('');
        }, 10000); 
      })
      .catch(err => {
        console.error('Falha ao copiar o email: ', err);
        setCopyMessage('Não foi possível copiar o email.');
        setIsCopyMessageVisible(true);
        setTimeout(() => {
          setIsCopyMessageVisible(false);
          setCopyMessage('');
        }, 10000);
      });
  };

  return (
    <S.Container>
      
      <SmokeBackground />
      {isCopyMessageVisible && <S.CopyMessageTop>{copyMessage}</S.CopyMessageTop>}
      <S.ProfileImage src='https://imgur.com/NcZvDQ1.png' />
      <S.Username>@pwdim</S.Username>
      <S.LinksWrapper>
        {linksData.map((link, index) => (
          <S.GlassContainer key={index}>
            <S.Glass
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-text={link.name}
              style={{ '--r': (index - Math.floor(linksData.length / 2)) * 15 + 'deg' }}
              onClick={link.name === 'Email' ? handleEmailClick : undefined}
            >
              <link.icon /> 
            </S.Glass>
          </S.GlassContainer>
        ))}
      </S.LinksWrapper>
    </S.Container>
  );
};

export default HomePage;