import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserProfilePageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

export const PageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e8eaed;
  background-color: ${props => props.$applyBlur ? 'rgba(50, 51, 56, 0.7)' : 'transparent'};
  backdrop-filter: ${props => props.$applyBlur ? 'blur(8px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$applyBlur ? 'blur(8px)' : 'none'};
  border-radius: 15px;
  padding: 35px 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  body.light-mode & {
      color: #202124;
      background-color: ${props => props.$applyBlur ? 'rgba(235, 236, 240, 0.75)' : 'transparent'};
      backdrop-filter: ${props => props.$applyBlur ? 'blur(8px)' : 'none'};
      -webkit-backdrop-filter: ${props => props.$applyBlur ? 'blur(8px)' : 'none'};
      border-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LoadingMessage = styled.p`
  font-style: italic;
  color: #aaa;
  body.light-mode & { color: #777; }
`;

export const ErrorMessage = styled.p`
  color: #f8d7da;
  background-color: rgba(220, 53, 69, 0.6);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(220, 53, 69, 0.8);
  text-align: center;
  margin: 20px;

  body.light-mode & {
      color: #721c24;
      background-color: rgba(248, 215, 218, 0.8);
      border-color: #f5c6cb;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  background-color: #333;

  body.light-mode & {
     border-color: rgba(0, 0, 0, 0.1);
     box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);
     background-color: #eee;
  }
`;

export const DisplayName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  margin-bottom: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  body.light-mode & {
    color: #111;
    text-shadow: none;
  }
`;

export const UsernameText = styled.p`
    font-size: 1rem;
    color: #b0b3b8;
    line-height: 1.2;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    body.light-mode & {
        color: #5f6368;
        text-shadow: none;
     }
`;

export const BioSection = styled.p`
  line-height: 1.6;
  margin-top: 25px;
  margin-bottom: 30px;
  white-space: pre-wrap;
  color: #ddd;
  max-width: 90%;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);


  body.light-mode & {
    color: #444;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
   }
`;

export const LinksSection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   gap: 20px;
   margin-top: 30px;
   padding-top: 20px;
   border-top: 1px solid rgba(255, 255, 255, 0.1);

   body.light-mode & {
     border-top-color: rgba(0, 0, 0, 0.1);
   }
`;

export const CustomLinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgba(30, 31, 34, 0.4);
    color: #b0b3b8;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;

    &:hover {
      background-color: rgba(45, 46, 49, 0.6);
      color: #ffffff;
      transform: scale(1.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: scale(1);
    }

    body.light-mode & {
      background-color: rgba(255, 255, 255, 0.5);
      color: #5f6368;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

      &:hover {
        background-color: rgba(248, 249, 250, 0.7);
        color: #202124;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
    }
 `;

 export const CustomLinkIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
 `;