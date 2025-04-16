import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importa useParams
import styled from 'styled-components';
import axios from 'axios'; // Ou use fetch

// --- Estilos Básicos (Ajuste conforme necessário) ---
const ProfileContainer = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  color: #eee; // Cor base escura
  background-color: rgba(25, 26, 30, 0.8); // Fundo semi-transparente escuro
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-align: center; // Centraliza conteúdo do perfil

  body.light-mode & {
      color: #333; // Cor base clara
      background-color: rgba(255, 255, 255, 0.7); // Fundo semi-transparente claro
      border-color: rgba(0, 0, 0, 0.1);
  }
`;

const LoadingMessage = styled.p`
  font-style: italic;
  color: #aaa;
  body.light-mode & { color: #777; }
`;

const ErrorMessage = styled.p`
  color: #f8d7da;
  background-color: rgba(220, 53, 69, 0.6);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(220, 53, 69, 0.8);
  text-align: center;

  body.light-mode & {
      color: #721c24;
      background-color: rgba(248, 215, 218, 0.8);
      border-color: #f5c6cb;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  background-color: #333; // Cor de fundo caso a imagem falhe

  body.light-mode & {
      border-color: rgba(0, 0, 0, 0.1);
      background-color: #eee;
  }
`;

const DisplayName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #0ff; // Exemplo dark
  margin: 0;

  body.light-mode & {
      color: #C71585; // Exemplo light
  }
`;

const UsernameText = styled.p`
    color: #aaa;
    font-size: 1rem;
    margin-top: 5px;
    body.light-mode & { color: #777; }
`;


const BioSection = styled.p`
  line-height: 1.6;
  margin-top: 20px;
  margin-bottom: 30px;
  white-space: pre-wrap; // Preserva quebras de linha da bio
  color: #ddd;
  body.light-mode & { color: #444; }
`;

const SocialLinksSection = styled.div`
  margin-top: 20px;
  a {
    color: #0ff; // Exemplo dark
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.5rem; // Tamanho dos ícones sociais (se usar)
    &:hover {
        opacity: 0.8;
    }
    body.light-mode & { color: #C71585; } // Exemplo light
  }
  // Adicione estilos para ícones se for usar (ex: react-icons)
`;
// --- Fim dos Estilos ---

function UserProfilePage() {
  const { username } = useParams(); // Pega o :username da URL
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!username) return; // Não faz nada se não houver username

      setLoading(true);
      setError(null);
      setProfileData(null); // Limpa dados antigos

      try {
        // Chame a API pública do seu backend
        // Ajuste a URL base se necessário (ex: http://localhost:3001)
        const response = await axios.get(`/api/profile/${username}`);
        if (response.data) {
          setProfileData(response.data);
        } else {
          setError('Perfil não encontrado.');
        }
      } catch (err) {
        console.error("Erro ao buscar perfil público:", err);
        if (err.response && err.response.status === 404) {
            setError('Perfil não encontrado.');
        } else {
            setError('Falha ao carregar dados do perfil.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]); // Re-executa se o username na URL mudar

  // Renderização Condicional
  let content;
  if (loading) {
    content = <LoadingMessage>Carregando perfil...</LoadingMessage>;
  } else if (error) {
    content = <ErrorMessage>{error}</ErrorMessage>;
  } else if (profileData) {
    // Constrói o link do avatar Discord se disponível
    const avatarUrl = profileData.discordAvatar
      ? profileData.discordAvatar // Assume que o backend já retorna a URL completa
      : '/images/default-avatar.png'; // Use um avatar padrão local

    content = (
      <>
        <ProfileHeader>
          <ProfileAvatar src={avatarUrl} alt={`${profileData.displayName || username}'s avatar`} />
          <DisplayName>{profileData.displayName || username}</DisplayName>
          <UsernameText>@{username}</UsernameText>
           {/* Você pode adicionar outras informações aqui, como status discord se o backend fornecer */}
        </ProfileHeader>

        {profileData.bio && <BioSection>{profileData.bio}</BioSection>}

        {/* Exemplo básico de links sociais - Adapte conforme seu schema */}
        {(profileData.socialLinks?.github || profileData.socialLinks?.twitter) && (
            <SocialLinksSection>
              <p>Links:</p>
              {profileData.socialLinks.github && (
                <a href={`https://github.com/${profileData.socialLinks.github}`} target="_blank" rel="noopener noreferrer" title="GitHub">
                  {/* Substitua por um ícone se preferir */}
                  GitHub
                </a>
              )}
              {profileData.socialLinks.twitter && (
                <a href={`https://twitter.com/${profileData.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" title="Twitter">
                  {/* Substitua por um ícone se preferir */}
                  Twitter
                </a>
              )}
              {/* Adicione outros links sociais aqui */}
            </SocialLinksSection>
        )}
      </>
    );
  } else {
      content = <ErrorMessage>Perfil não encontrado.</ErrorMessage>; // Caso final
  }

  return (
    <ProfileContainer>
      {content}
    </ProfileContainer>
  );
}

export default UserProfilePage;