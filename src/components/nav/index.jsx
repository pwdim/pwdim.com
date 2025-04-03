import React, { useState, useContext } from 'react';
import {
  Navbar,
  Logo,
  LogoContainer,
  CenterNavLinks, 
  NavLinks, 
  NavItem,
  NavLink as StyledNavLink,
  HamburgerButton,
  NavContent,
  SearchContainerNav,
  EmptySearchMessage,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faEnvelope,
  faBars,
  faSearch,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePrefixContext } from '../../contexts/RoutePrefixContext'; 
import ThemeToggle from '../ThemeToggle'; 

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchNickNav, setSearchNickNav] = useState('');
  const [emptySearchMessageVisible, setEmptySearchMessageVisible] = useState(false);
  const navigate = useNavigate();
  const { profileRoutePrefix } = useContext(RoutePrefixContext); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChangeNav = (event) => {
    setSearchNickNav(event.target.value);
  };

  const handleSearchSubmitNav = (event) => {
    event.preventDefault();
    if (searchNickNav.trim()) {
      navigate(`/${profileRoutePrefix}/${searchNickNav}`); 
      setEmptySearchMessageVisible(false);
    } else {
      setEmptySearchMessageVisible(true);
      setTimeout(() => {
        setEmptySearchMessageVisible(false);
      }, 2000);
    }
  };

  return (
    <Navbar>
      <NavContent>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo src="https://imgur.com/PweVudw.png"></Logo>
          </Link>
        </LogoContainer>

        <CenterNavLinks>
          <NavLinks>
            <NavItem>
              <Link to="/sobre" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <StyledNavLink>
                  <FontAwesomeIcon icon={faInfoCircle} /> Sobre
                </StyledNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/links" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <StyledNavLink>
                  <FontAwesomeIcon icon={faEnvelope} /> Contato
                </StyledNavLink>
              </Link>
            </NavItem>
              <NavItem>
                <Link to="/leaderboard/hg" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <StyledNavLink>
                    <FontAwesomeIcon icon={faList} /> Leaderboard
                  </StyledNavLink>
                </Link>
              </NavItem>
            <NavItem>
              <ThemeToggle />
            </NavItem>
          </NavLinks>
        </CenterNavLinks>

        <SearchContainerNav onSubmit={handleSearchSubmitNav}>
          <input
            type="text"
            placeholder="Pesquisar Perfil"
            value={searchNickNav}
            onChange={handleSearchChangeNav}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </SearchContainerNav>

        {emptySearchMessageVisible && (
          <EmptySearchMessage>Por favor, digite um nick.</EmptySearchMessage>
        )}
      </NavContent>
      <HamburgerButton onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerButton>
    </Navbar>
  );
};

export default NavigationBar;