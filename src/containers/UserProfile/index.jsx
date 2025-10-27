// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import * as S from './styles';
// import DiscordProfileDisplay from '../../components/DiscordProfileDisplay/index.jsx';

// const defaultLinkIcon = '/images/default-link-icon.png';
// const defaultAvatar = '/images/default-avatar.png';

// function UserProfilePage() {
//   const { username } = useParams();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';

//   const resolveBackendUrl = useCallback((relativePath) => {
//     if (!relativePath) return null;
//     if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
//       return relativePath;
//     }
//     if (relativePath.startsWith('/uploads/')) {
//         return `${apiBaseUrl}${relativePath}`;
//     }
//     return relativePath;
//   }, [apiBaseUrl]);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       if (!username) return;
//       setLoading(true); setError(null); setProfileData(null);
//       const apiUsername = username.startsWith('@') ? username.substring(1) : username;
//       try {
//         const apiUrl = `${apiBaseUrl}/api/profile/${apiUsername}`;
//         console.log("UserProfilePage - Buscando perfil em:", apiUrl);
//         const response = await axios.get(apiUrl);
//         console.log('UserProfilePage - Dados Recebidos Pela API:', response.data);
//         if (response.data) {
//           setProfileData(response.data);
//         } else {
//           setError('Perfil não encontrado.');
//         }
//       } catch (err) {
//         console.error("UserProfilePage - Erro ao buscar perfil público:", err);
//         setError(err.response?.status === 404 ? 'Perfil não encontrado.' : 'Falha ao carregar dados do perfil.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserProfile();
//   }, [username, apiBaseUrl]);

//   const renderBackground = () => {
//     const rawBackgroundUrl = profileData?.backgroundUrl;
//     if (!rawBackgroundUrl) return null;
//     const resolvedBackgroundUrl = resolveBackendUrl(rawBackgroundUrl);
//     if (!resolvedBackgroundUrl) return null;
//     if (profileData.backgroundType === 'video') {
//       return (
//         <S.PageBackground>
//           <video src={resolvedBackgroundUrl} autoPlay loop muted playsInline key={resolvedBackgroundUrl} />
//         </S.PageBackground>
//       );
//     } else if (profileData.backgroundType === 'image') {
//       return (
//         <S.PageBackground>
//            <img src={resolvedBackgroundUrl} alt="Background" key={resolvedBackgroundUrl} />
//         </S.PageBackground>
//       );
//     }
//     return null;
//   };

//   let pageContent;
//   if (loading) {
//     pageContent = <S.ProfileContainer $applyBlur={true}><S.LoadingMessage>Carregando perfil...</S.LoadingMessage></S.ProfileContainer>;
//   } else if (error) {
//     pageContent = <S.ProfileContainer $applyBlur={true}><S.ErrorMessage>{error}</S.ErrorMessage></S.ProfileContainer>;
//   } else if (profileData) {
//     const isSyncedMode = profileData.profileMode === 'SYNC_DISCORD';
//     const hasCustomPageBackground = !!profileData.backgroundUrl;
//     const applyCardBlur = !isSyncedMode && !hasCustomPageBackground;

//     const resolvedAvatarUrl = resolveBackendUrl(profileData.user?.avatarUrl) || defaultAvatar;
//     const userDisplayName = profileData.displayName || profileData.user?.username || username;

//     pageContent = (
//       <S.ProfileContainer $applyBlur={applyCardBlur}>
//         {isSyncedMode && profileData.user?.discordId ? (
//             <DiscordProfileDisplay userId={profileData.user.discordId} />
//         ) : (
//             <S.ProfileHeader>
//               <S.ProfileAvatar src={resolvedAvatarUrl} alt={`${userDisplayName}'s avatar`} onError={(e) => e.target.src = defaultAvatar}/>
//               <S.DisplayName>{userDisplayName}</S.DisplayName>
//               <S.UsernameText>{username}</S.UsernameText>
//             </S.ProfileHeader>
//         )}
//         {profileData.bio && <S.BioSection>{profileData.bio}</S.BioSection>}
//         {profileData.customLinks && profileData.customLinks.length > 0 && (
//             <S.LinksSection>
//                  {profileData.customLinks.map((link, index) => {
//                     const resolvedIconUrl = resolveBackendUrl(link.icon) || defaultLinkIcon;
//                     return (
//                         <S.CustomLinkButton
//                             key={link.id || `link-${index}`}
//                             href={link.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             title={link.name}
//                         >
//                             <S.CustomLinkIcon src={resolvedIconUrl} alt="" onError={(e) => e.target.src = defaultLinkIcon}/>
//                         </S.CustomLinkButton>
//                     );
//                  })}
//             </S.LinksSection>
//         )}
//       </S.ProfileContainer>
//     );
//   } else {
//       pageContent = <S.ProfileContainer $applyBlur={true}><S.ErrorMessage>Perfil não encontrado.</S.ErrorMessage></S.ProfileContainer>;
//   }

//   return (
//     <S.UserProfilePageWrapper>
//       {renderBackground()}
//       {pageContent}
//     </S.UserProfilePageWrapper>
//   );
// }

// export default UserProfilePage;