import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); 
  padding: 20px;
`;

export const LoginBox = styled.div`
  display: grid;
  background-color: rgba(40, 42, 48, 0.7);
  padding: 40px 50px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  body.light-mode & {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const LoginTitle = styled.h1`
  color: #eee;
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 500;

  body.light-mode & {
    color: #333;
  }
`;

export const DiscordLoginButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 5px;
  background-color: #5865F2;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    margin-right: 10px;
    font-size: 1.3em;
  }

  &:hover {
    background-color: #4752C4;
  }
`;

export const GoogleLoginButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 5px;
  background-color: #4285F4;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    margin-right: 10px;
    font-size: 1.2em;
  }

  &:hover {
    background-color: #357ae8;
  }
`;

