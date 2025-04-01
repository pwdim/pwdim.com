// src/containers/Home/styles.js
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(45deg, #121314, #181a1b, #121314);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  position: relative;
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;
export const NavLink = styled.button`
  background: none;
  border: none;
  color: #00FFFF;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 255, 0.1);
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

`;
export const ProfileImage = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  margin-bottom: 30px;
  object-fit: cover;
  border: 3px solid #00FFFF;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
`;
export const Username = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 40px;
  color: #00FFFF;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
  animation: none;
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que os "vidros" quebrem para a próxima linha em telas menores */
  margin-top: 20px;
`;
export const GlassContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px; /* Adiciona um pouco de margem entre os containers */

  &:hover > a {
    transform: rotate(0deg);
    margin: 0 10px;
  }
`;
export const Glass = styled.a`
  position: relative;
  width: 180px;
  height: 200px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 -45px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
  text-decoration: none; /* Remove o sublinhado padrão de links */

  &::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00FFFF; /* Texto ciano neon */
    font-weight: bold;
    border-radius: 0 0 10px 10px;
  }

  svg {
    font-size: 2.5em;
    fill: #00FFFF; /* Ícones ciano neon */
  }
`;
export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 0.9rem;
  color: #777;
`;
export const CopyMessageTop = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 255, 255, 0.8);
  color: #121314;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  opacity: 0.9;
  z-index: 10;
`;
export const SearchContainerHome = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;

  form {
    display: flex;
  }

  input[type="text"] {
    padding: 8px;
    border: 1px solid #333;
    border-radius: 4px 0 0 4px;
    background-color: #25262a;
    color: #fff;
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 0 4px 4px 0;
    background-color: #00FFFF;
    color: #121314;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 255, 255, 0.8);
    }
  }
`;