import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  color: #ccc;
  font-size: 1.2rem;
`;

function LoginCallbackPage() {
  const [message, setMessage] = useState('Processando autenticação...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      setMessage('Autenticação bem-sucedida! Redirecionando...');
      localStorage.setItem('authToken', token);

      const timer = setTimeout(() => {
        navigate('/dashboard');
      }, 1500);

      return () => clearTimeout(timer);

    } else {
      setMessage('Falha na autenticação. Token não encontrado. Redirecionando...');
      const timer = setTimeout(() => {
        navigate('/');
      }, 2500);

       return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <CallbackContainer>
      <p>{message}</p>
    </CallbackContainer>
  );
}

export default LoginCallbackPage;