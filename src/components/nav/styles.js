import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const NavbarContainer = styled.nav`
  color: #a0a0a0;
  width: 100%;
  background-color: #101114; /* Cor sólida escura */
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 0; /* Padding vertical na barra */

  body.light-mode & {
     background-color: #ffffff; /* Cor sólida clara */
     border-bottom-color: rgba(0, 0, 0, 0.1);
     color: #333; /* Ajuste cor padrão do texto */
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px; /* Padding horizontal dentro do conteúdo centralizado */
  box-sizing: border-box;
  position: relative; /* Necessário para posicionar os links */
  height: 60px; /* Definir altura fixa para ajudar no posicionamento absoluto dos links */

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const LogoLink = styled.div`
  display: inline-block;
  line-height: 0;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  display: block;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const NavLinksContainerDesktop = styled.div`
  display: none; /* Escondido em mobile */

  @media (min-width: 769px) {
    display: block; /* Mudar para block ou flex dependendo do conteúdo interno */
    position: absolute; /* Posicionamento absoluto */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Técnica de centralização */
    width: auto; /* Para não ocupar 100% */
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
`;

export const NavLinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 20px;

  ${NavLinksContainerDesktop} & { /* Estilos para lista dentro do container desktop */
     justify-content: center; /* Centraliza os itens se houver espaço extra */
  }

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 0;
    width: auto;
  }
`;

export const NavItem = styled.li`

  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    width: auto;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
    text-decoration: none;
    display: block;
`;


export const NavLinkStyled = styled.div`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out, background-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  justify-content: center;
  border-radius: 4px;
  white-space: nowrap; /* Evita quebra de linha nos links */

  &:hover {
    color: #0ff;
    background-color: rgba(255, 255, 255, 0.05);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (min-width: 769px) {
    padding: 5px 10px;
    justify-content: flex-start;
  }

   body.light-mode & {
     color: #555; /* Cor padrão texto light */
      &:hover {
        color: #0056b3; /* Cor hover light */
        background-color: rgba(0, 0, 0, 0.05);
      }
   }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 1.8rem;
  cursor: pointer;
  display: block;
  padding: 5px;
  z-index: 101;

  &:hover {
    color: #0ff;
  }

  @media (min-width: 769px) {
    display: none;
  }

   body.light-mode & {
     color: #333;
      &:hover {
        color: #0056b3;
      }
   }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #101114; /* Fundo sólido igual navbar */
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* Remover padding para itens ocuparem tudo */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

   ${NavLinksList} {
     flex-direction: column;
     gap: 0px;
     width: 100%;
     padding: 0;
     background-color: transparent; /* Remover fundo da lista no mobile */
       body.light-mode & {
           background-color: transparent;
       }
   }

    ${NavItem} {
        width: 100%;
         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
         &:last-child {
             border-bottom: none;
         }
         body.light-mode & {
             border-bottom-color: rgba(0, 0, 0, 0.1);
        }
    }


   ${NavLinkStyled} {
     justify-content: center;
     font-size: 1.1rem;
     padding: 15px 20px;
     width: 100%;
     text-align: center;
     border-radius: 0;
      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }
      body.light-mode & {
         &:hover {
             background-color: rgba(0, 0, 0, 0.08);
          }
      }
   }

    body.light-mode & {
     background-color: #ffffff; /* Fundo sólido claro */
     border-top-color: rgba(0, 0, 0, 0.1);
    }
`;


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #25262a; /* Mantém o fundo escuro */
  border: 1px solid #444;
  border-radius: 6px;
  padding-left: 10px;
  height: 38px;
   transition: background-color 0.2s ease;

   &:focus-within {
      background-color: #303136;
      border-color: #555;
   }


  body.light-mode & {
    background-color: #e9ecef; /* Fundo claro para search */
    border-color: #ced4da;
     &:focus-within {
        background-color: #dee2e6;
        border-color: #adb5bd;
     }
  }
`;

export const SearchInput = styled.input`
  padding: 8px 10px 8px 4px;
  border: none;
  background-color: transparent;
  color: #e8eaed;
  font-size: 0.85rem;
  width: 150px;
  outline: none;
  transition: width 0.3s ease;

  &::placeholder {
    color: #888;
    font-size: 0.85rem;
  }

  &:focus {
    width: 200px;
  }

  body.light-mode & {
     color: #212529; /* Texto escuro no input claro */
      &::placeholder {
         color: #6c757d;
      }
  }
`;

export const SearchButton = styled.button`
  padding: 8px 10px;
  border: none;
  background-color: transparent;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;


  &:hover {
    color: #ccc;
  }

  svg {
    font-size: 1rem;
  }

   body.light-mode & {
     color: #6c757d;
     &:hover {
         color: #343a40;
     }
   }
`;

export const EmptySearchMessage = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 20px;
  background-color: rgba(240, 71, 71, 0.9);
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
   pointer-events: none;


  @media (max-width: 768px) {
     right: 10px;
  }
`;