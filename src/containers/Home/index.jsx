// src/containers/Home/index.jsx
import React from 'react';
import * as S from './styles';
import SmokeBackground from '/src/components/SmokeBackground';
// Remova esta linha: import NavigationBar from '../../components/nav';

const HomePage = () => {
  const linksData = [
    { name: 'Github', url: 'https://github.com/pwdim' },
    { name: 'Website', url: 'https://www.pwdim.com' },
    { name: 'Email', url: '#copy-email' },
    { name: 'Twitter', url: 'https://twitter.com/pwdim' },
    // Adicione mais links conforme necessário
  ];

  const handleEmailClick = (event) => {
    event.preventDefault();
    const email = 'contato@pwdim.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        alert(`Email copiado para a área de transferência: ${email}`);
      })
      .catch(err => {
        console.error('Falha ao copiar o email: ', err);
        alert('Não foi possível copiar o email.');
      });
  };

  return (
    
    
    <S.Container>
      {/* Remova esta linha: <NavigationBar /> */}
      <SmokeBackground />
      <S.ProfileImage src='src/assets/logos/logobackground.png'/>
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
              {/* ... seu conteúdo do link aqui */}
            </S.Glass>
          </S.GlassContainer>
        ))}
      </S.LinksWrapper>
      <S.Footer>
        Feito com ✨ por Você
      </S.Footer>
    </S.Container>
  );
};

export default HomePage;