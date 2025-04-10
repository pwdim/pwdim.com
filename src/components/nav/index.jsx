// src/components/NavigationBar/index.jsx (or wherever your file is)
import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  NavbarContainer,
  NavContent,
  LogoLink,
  Logo,
  NavLinksContainerDesktop,
  NavLinksList,
  NavItem,
  NavLinkStyled,
  HamburgerButton,
  MobileMenuContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  EmptySearchMessage,
  RightSection,
} from './styles'; // Assuming styles are in './styles.js' relative to index.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faEnvelope,
  faBars,
  faTimes,
  faSearch,
  faList,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RoutePrefixContext } from '../../contexts/RoutePrefixContext'; // Adjust path if needed
// import ThemeToggle from '../ThemeToggle'; // Adjust path if needed

// Dummy ThemeToggle for demonstration
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{ background: 'none', border: 'none', color: '#a0a0a0', cursor: 'pointer', fontSize: '1.5rem' }}
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
  );
};


// The component name remains NavigationBar, even if the file is index.jsx
const NavigationBar = () => {
  const [searchNickNav, setSearchNickNav] = useState('');
  const [emptySearchMessageVisible, setEmptySearchMessageVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Make sure this context path is correct relative to your index.jsx
  const { profileRoutePrefix } = useContext(RoutePrefixContext);
  const mobileMenuRef = useRef(null);

  const handleSearchChangeNav = (event) => {
    setSearchNickNav(event.target.value);
  };

  const handleSearchSubmitNav = (event) => {
    event.preventDefault();
    if (searchNickNav.trim()) {
      navigate(`/${profileRoutePrefix}/${searchNickNav}`);
      setSearchNickNav('');
      setIsMobileMenuOpen(false);
      setEmptySearchMessageVisible(false);
    } else {
      setEmptySearchMessageVisible(true);
      setTimeout(() => {
        setEmptySearchMessageVisible(false);
      }, 2000);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        if (!event.target.closest('#hamburger-button')) {
          closeMobileMenu();
        }
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);


  const navLinks = [
    { to: "/sobre", icon: faInfoCircle, text: "Sobre" },
    { to: "/links", icon: faEnvelope, text: "Contato" },
    { to: "/leaderboard/hg", icon: faList, text: "Leaderboard" },
    // Add other links like LOJA, EQUIPE if needed
    // { to: "https://loja.flamemc.com.br/", icon: faStore, text: "Loja", external: true },
    // { to: "/staff", icon: faUsers, text: "Equipe" },
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <Link to="/" onClick={closeMobileMenu} style={{ textDecoration: 'none', display: 'inline-block' }} title="Página Inicial">
          {/* Use the LogoLink styled-component as a wrapper if needed, or style Logo directly */}
          <LogoLink> {/* This styled.div wraps the Logo */}
            <Logo src="https://imgur.com/PweVudw.png" alt="Logo" />
          </LogoLink>
        </Link>

        {/* Desktop Navigation Links */}
        <NavLinksContainerDesktop>
          <NavLinksList>
            {navLinks.map((link) => (
              <NavItem key={link.to}>
                {link.external ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </a>
                ) : (
                  <Link to={link.to}>
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </Link>
                )}

              </NavItem>
            ))}
          </NavLinksList>
        </NavLinksContainerDesktop>

        {/* Right Section: Search, ThemeToggle, Hamburger */}
        <RightSection>
          {/* Search Form */}
          <SearchForm onSubmit={handleSearchSubmitNav}>
            <SearchInput
              type="text"
              placeholder="Pesquisar Perfil"
              value={searchNickNav}
              onChange={handleSearchChangeNav}
            />
            <SearchButton type="submit" aria-label="Pesquisar">
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchForm>
          {/* Optional: Add ThemeToggle here if you want it on the right */}
          {/* <ThemeToggle /> */}

          {/* Hamburger Button (Visible only on mobile) */}
          <HamburgerButton onClick={toggleMobileMenu} id="hamburger-button" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </HamburgerButton>
        </RightSection>

      </NavContent>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <MobileMenuContainer ref={mobileMenuRef}>
          <NavLinksList>
            {navLinks.map((link) => (
              <NavItem key={link.to}>
                {link.external ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </a>
                ) : (
                  <Link to={link.to} onClick={closeMobileMenu}>
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </Link>
                )}
              </NavItem>
            ))}

          </NavLinksList>
        </MobileMenuContainer>
      )}

      {/* Empty Search Message */}
      {emptySearchMessageVisible && (
        <EmptySearchMessage>Por favor, digite um nick.</EmptySearchMessage>
      )}
    </NavbarContainer>
  );
};

// The export matches the component name, regardless of the filename index.jsx
export default NavigationBar;