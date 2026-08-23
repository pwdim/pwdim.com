import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

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

const breathe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;
  min-height: 80px;

  padding: 10px 0;

  box-sizing: border-box;

  color: #a0a0a0;

  background-color: transparent;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  body.light-mode & {
    color: #333;
    background-color: transparent;
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    min-height: 64px;
    padding: 8px 0;
  }

  @media (max-width: 480px) {
    min-height: 58px;
    padding: 7px 0;
  }
`;

export const NavContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1280px;

  min-height: 60px;

  margin: 0 auto;
  padding: 0 20px;

  box-sizing: border-box;

  gap: 15px;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    min-height: 48px;
    padding: 0 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    min-height: 44px;
    padding: 0 12px;
    gap: 8px;
  }
`;

export const LogoLink = styled.div`
  display: inline-flex;
  align-items: center;

  flex: 0 0 auto;

  min-width: 0;

  line-height: 0;
`;

export const Logo = styled.img`
  display: block;

  width: auto;
  height: 50px;

  max-width: 100%;

  object-fit: contain;

  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 36px;
  }
`;

export const NavLinksContainerDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    position: absolute;

    top: 50%;
    left: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: auto;
    max-width: calc(100% - 320px);

    min-width: 0;

    transform: translate(-50%, -50%);
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 15px;

  flex: 0 0 auto;

  min-width: 0;

  margin-left: auto;

  @media (max-width: 900px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 7px;
  }
`;

export const NavLinksList = styled.ul`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0;

  list-style: none;

  gap: 20px;

  min-width: 0;

  @media (min-width: 769px) {
    flex-direction: row;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    width: 100%;

    gap: 0;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;

  min-width: 0;

  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    width: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  display: block;

  min-width: 0;

  color: inherit;

  text-decoration: none;
`;

export const NavLinkStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 10px 15px;

  box-sizing: border-box;

  border-radius: 4px;

  color: #a0a0a0;

  font-size: 1rem;
  font-weight: bold;

  text-decoration: none;

  white-space: nowrap;

  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease;

  &:hover {
    color: #0ff;

    background-color: rgba(255, 255, 255, 0.05);
  }

  svg {
    flex-shrink: 0;

    font-size: 1.1rem;
  }

  @media (min-width: 769px) {
    justify-content: flex-start;

    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    width: 100%;

    justify-content: center;

    padding: 15px 20px;

    border-radius: 0;

    font-size: 1.1rem;

    text-align: center;
  }

  body.light-mode & {
    color: #555;

    &:hover {
      color: #0056b3;

      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  flex: 0 0 40px;

  padding: 5px;

  box-sizing: border-box;

  border: none;
  border-radius: 10px;

  background: transparent;

  color: #a0a0a0;

  font-size: 1.8rem;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: #0ff;

    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;

    flex-basis: 36px;

    padding: 3px;

    font-size: 1.6rem;
  }

  body.light-mode & {
    color: #333;

    &:hover {
      color: #0056b3;

      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;

  top: 100%;
  left: 0;

  width: 100%;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;

  overflow: hidden;

  background-color: #101114;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  z-index: 999;

  animation: ${slideDown} 0.3s ease-out;

  ${NavLinksList} {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;

    gap: 0;

    margin: 0;
    padding: 0;

    background-color: transparent;
  }

  ${NavItem} {
    width: 100%;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }

  ${NavLinkStyled} {
    width: 100%;

    justify-content: center;

    padding: 15px 20px;

    border-radius: 0;

    font-size: 1.1rem;

    text-align: center;

    box-sizing: border-box;

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
  }

  body.light-mode & {
    background-color: #ffffff;

    border-top-color: rgba(0, 0, 0, 0.1);

    ${NavItem} {
      border-bottom-color: rgba(0, 0, 0, 0.1);
    }

    ${NavLinkStyled} {
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export const SearchForm = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  height: 38px;

  padding-left: 10px;

  box-sizing: border-box;

  background-color: #25262a;

  border: 1px solid #444;
  border-radius: 6px;

  transition: background-color 0.2s ease;

  &:focus-within {
    background-color: #303136;
    border-color: #555;
  }

  body.light-mode & {
    background-color: #e9ecef;
    border-color: #ced4da;

    &:focus-within {
      background-color: #dee2e6;
      border-color: #adb5bd;
    }
  }
`;

export const SearchInput = styled.input`
  width: 150px;

  min-width: 0;

  padding: 8px 10px 8px 4px;

  border: none;
  outline: none;

  background-color: transparent;

  color: #e8eaed;

  font-size: 0.85rem;

  transition: width 0.3s ease;

  &::placeholder {
    color: #888;
    font-size: 0.85rem;
  }

  &:focus {
    width: 200px;
  }

  body.light-mode & {
    color: #212529;

    &::placeholder {
      color: #6c757d;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  padding: 8px 10px;

  border: none;

  background-color: transparent;

  color: #888;

  cursor: pointer;

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

  z-index: 10;

  padding: 6px 10px;

  border-radius: 4px;

  background-color: rgba(240, 71, 71, 0.9);

  color: white;

  font-size: 0.8rem;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  pointer-events: none;

  @media (max-width: 768px) {
    right: 10px;
  }
`;