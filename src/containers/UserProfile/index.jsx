// src/containers/UserProfile/index.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// --- Estilos (mantidos como antes) ---
const ProfileContainer = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  color: #eee;
  background-color: rgba(25, 26, 30, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-align: center;

  body.light-mode & {
      color: #333;
      background-color: rgba(255, 255, 255, 0.7);
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
  background-color: #333;

  body.light-mode & {
      border-color: rgba(0, 0, 0, 0.1);
      background-color: #eee;
  }
`;

const DisplayName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #0ff;
  margin: 0;

  body.light-mode & {
      color: #C71585;
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
  white-space: pre-wrap;
  color: #ddd;
  body.light-mode & { color: #444; }
`;

const SocialLinksSection = styled.div`
  margin-top: 20px;
  a {
    color: #0ff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
        opacity: 0.8;
    }
    body.light-mode & { color: #C71585; }
  }
`;
// --- Fim dos Estilos ---


function UserProfilePage() {
  const { username } = useParams(); // username aqui será "@pwdim"
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);
      setProfileData(null);

      // Remove o @ inicial ANTES de chamar a API (se sua API espera só o nome)
      // Se sua API espera receber o "@nome", remova esta linha:
      const apiUsername = username.startsWith('@') ? username.substring(1) : username;

      try {
        // Chame a API com o nome de usuário sem o @ inicial (ou com @ se for o esperado pela API)
        const response = await axios.get(`/api/profile/${apiUsername}`);
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
  }, [username]);

  let content;
  if (loading) {
    content = <LoadingMessage>Carregando perfil...</LoadingMessage>;
  } else if (error) {
    content = <ErrorMessage>{error}</ErrorMessage>;
  } else if (profileData) {
    const avatarUrl = profileData.discordAvatar
      ? profileData.discordAvatar
      : '/images/default-avatar.png';

    content = (
      <>
        <ProfileHeader>
          <ProfileAvatar src={avatarUrl} alt={`${profileData.displayName || username}'s avatar`} />
          <DisplayName>{profileData.displayName || username}</DisplayName>
          {/* Exibe o username COMO VEIO DA URL (já inclui o @) */}
          <UsernameText>{username}</UsernameText>
        </ProfileHeader>

        {profileData.bio && <BioSection>{profileData.bio}</BioSection>}

        {(profileData.socialLinks?.github || profileData.socialLinks?.twitter) && (
            <SocialLinksSection>
              <p>Links:</p>
              {profileData.socialLinks.github && (
                <a href={`https://github.com/${profileData.socialLinks.github}`} target="_blank" rel="noopener noreferrer" title="GitHub">
                  GitHub
                </a>
              )}
              {profileData.socialLinks.twitter && (
                <a href={`https://twitter.com/${profileData.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" title="Twitter">
                  Twitter
                </a>
              )}

            </SocialLinksSection>
        )}
      </>
    );
  } else {
      content = <ErrorMessage>Perfil não encontrado.</ErrorMessage>;
  }

  return (
    <ProfileContainer>
      {content}
    </ProfileContainer>
  );
}

export default UserProfilePage;