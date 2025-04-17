import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDiscord, FaGoogle } from 'react-icons/fa';
import * as S from './styles'; 

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
  const discordAuthUrl = `${apiBaseUrl}/auth/discord`;
  const googleAuthUrl = `${apiBaseUrl}/auth/google`; 

  return (
    <S.LoginPageContainer>
      <S.LoginBox>
        <S.LoginTitle>Acessar Painel</S.LoginTitle>
        <S.DiscordLoginButton href={discordAuthUrl} style={{ marginBottom: '15px' }}>
          <FaDiscord />
          Entrar com Discord
        </S.DiscordLoginButton>
        
        <S.GoogleLoginButton href={googleAuthUrl}>
          <FaGoogle />
          Entrar com Google
        </S.GoogleLoginButton>
      </S.LoginBox>
    </S.LoginPageContainer>
  );
}

export default LoginPage;