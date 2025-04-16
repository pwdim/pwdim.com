// src/containers/Dashboard/index.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Importe axios ou use fetch para chamadas API
import axios from 'axios'; // Exemplo: npm install axios

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  color: #ccc; /* Cor base, ajuste conforme seu tema */
  background-color: rgba(25, 26, 30, 0.7); /* Exemplo de fundo */
  border-radius: 8px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #0ff; /* Exemplo */
  }

  /* Adicione mais estilos conforme necessário */
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-style: italic;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: #f8d7da;
  background-color: rgba(220, 53, 69, 0.6);
  padding: 10px;
  border-radius: 5px;
`;

const ProfileDataSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 8px 0;
    line-height: 1.5;
  }
  strong {
    color: #0ff; /* Exemplo */
    margin-right: 8px;
  }
`;

function DashboardPage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('authToken');

      if (!token) {
        setError('Usuário não autenticado.');
        setLoading(false);
        // O ProtectedRoute já deve ter redirecionado, mas é bom ter defesa extra
        return;
      }

      try {
        // Use a URL correta do seu backend
        const response = await axios.get('/api/profile/me', { // Ajuste a URL da API
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfileData(response.data); // Assumindo que a API retorna os dados do perfil
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
        setError('Falha ao carregar dados do perfil. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // Roda apenas uma vez ao montar o componente

  return (
    <DashboardContainer>
      <h1>Meu Painel</h1>

      {loading && <LoadingMessage>Carregando seus dados...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {profileData && !loading && (
        <div>
          {/* Seção para mostrar dados atuais (será substituída/complementada pelo form) */}
          <ProfileDataSection>
            <h2>Dados Atuais</h2>
            <p><strong>Nome de Exibição:</strong> {profileData.displayName || 'Não definido'}</p>
            <p><strong>Bio:</strong> {profileData.bio || 'Não definida'}</p>
            {/* Adicione outros campos aqui conforme seu schema */}
            {/* Ex: <p><strong>Twitter:</strong> {profileData.socialLinks?.twitter || '-'}</p> */}
          </ProfileDataSection>

          {/* Área para o Formulário de Edição (A ser implementado) */}
          <div>
            <h2>Editar Perfil</h2>
            <p>(Formulário de edição virá aqui...)</p>
            {/*
              <form onSubmit={handleProfileUpdate}>
                <label>Nome de Exibição:</label>
                <input type="text" value={...} onChange={...} />
                <label>Bio:</label>
                <textarea value={...} onChange={...} />
                <button type="submit">Salvar Alterações</button>
              </form>
            */}
          </div>
        </div>
      )}
    </DashboardContainer>
  );
}

export default DashboardPage;