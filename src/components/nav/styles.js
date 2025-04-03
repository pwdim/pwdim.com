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

export const Navbar = styled.nav`
  color: #a0a0a0;
  width: 100%; 
  background: #121314; 
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); 
  position: relative;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px 20px; 
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 80px; 
  width: auto;
  animation: breathe 3s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 60px; 
  }

  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const CenterNavLinks = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 30%; 

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center; 
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  
  justify-content: space-around; 
  width: 100%; 
`;

export const NavItem = styled.li`
  

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.div`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #0ff;
  }

  svg {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a0a0a0;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  padding: 5px;

  &:hover {
    color: #0ff;
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

export const SearchContainerNav = styled.form`
  display: flex;
  align-items: center;
  

  input[type="text"] {
    padding: 8px;
    border: 1px solid #333;
    border-radius: 30px 30px 30px 30px;
    background-color: #25262a;
    color: #fff;
    font-size: 0.9rem;
  }

  button {
    padding: 10px 10px;
    border: none;
    border-radius: 30px;
    background-color: #00FFFF;
    color: #121314;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 0.9rem;
    margin-right: 1%;

    &:hover {
      background-color: rgba(0, 255, 255, 0.8);
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export const EmptySearchMessage = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.8rem;
  z-index: 10;

  @media (max-width: 768px) {
    top: auto;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
  }
`;