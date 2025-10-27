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
  StyledRouterLink,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faEnvelope,
  faBars,
  faTimes,
  faSearch,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutePrefixContext } from '../../contexts/RoutePrefixContext';
import ThemeToggle from '../ThemeToggle'; 


const NavigationBar = () => {
  const [searchNickNav, setSearchNickNav] = useState('');
  const [emptySearchMessageVisible, setEmptySearchMessageVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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
    { to: "/about", icon: faInfoCircle, text: "Sobre" },
    { to: "/links", icon: faEnvelope, text: "Contato" },
    //{ to: "/leaderboard/hg", icon: faList, text: "Leaderboard" },
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <StyledRouterLink to="/" onClick={closeMobileMenu} title="Página Inicial">
          <LogoLink>
            <Logo src="https://imgur.com/MRrA1Nk.png" alt="Logo" />
          </LogoLink>
        </StyledRouterLink>

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
                  <StyledRouterLink to={link.to}>
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </StyledRouterLink>
                )}

              </NavItem>
            ))}
          </NavLinksList>
        </NavLinksContainerDesktop>

        <RightSection>
          {/* <SearchForm onSubmit={handleSearchSubmitNav}>
            <SearchInput
              type="text"
              placeholder="Pesquisar Perfil"
              value={searchNickNav}
              onChange={handleSearchChangeNav}
            />
            <SearchButton type="submit" aria-label="Pesquisar">
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchForm> */}

          <ThemeToggle />

          <HamburgerButton onClick={toggleMobileMenu} id="hamburger-button" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </HamburgerButton>
        </RightSection>

      </NavContent>

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
                  <StyledRouterLink to={link.to} onClick={closeMobileMenu}>
                    <NavLinkStyled>
                      {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
                    </NavLinkStyled>
                  </StyledRouterLink>
                )}
              </NavItem>
            ))}

          </NavLinksList>
        </MobileMenuContainer>
      )}

      {/* {emptySearchMessageVisible && (
        <EmptySearchMessage>Por favor, digite um nick.</EmptySearchMessage>
      )} */}
    </NavbarContainer>
  );
};

export default NavigationBar;