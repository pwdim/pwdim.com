import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub, 
  faDiscord,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.TopSection>
        <S.ContactInfo>
          <S.Title>ENTRE EM CONTATO:</S.Title>
          <S.SocialIcons>
            <a href="https://git.pwdim.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> 
            </a>
            <a href="https://dc.pwdim.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="mailto:contato@pwdim.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            
          </S.SocialIcons>
          <S.LanguageSelector>
          </S.LanguageSelector>
        </S.ContactInfo>

        <S.LegalSection> 
          <S.Title>LEGAL</S.Title>
          <S.Copyright>
            © {currentYear} Copyright pwdim<br />
            Todos os direitos reservados.
          </S.Copyright>
          <S.LegalLinks>
            <a href="/legal/terms">Termos de Serviço</a> 
            <a href="/legal/privacy">Políticas de Privacidade</a> 
          </S.LegalLinks>
          <S.BottomSection>
            <S.BottomText></S.BottomText> 
          </S.BottomSection>
        </S.LegalSection>

        <S.LabyrinthSection> 
          <S.Title>pwdim.com</S.Title>
          <S.LinkList>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about" target="_blank" rel="noopener noreferrer">Sobre</a></li>
            <li><a href="/links  " target="_blank" rel="noopener noreferrer">Links</a></li>
          </S.LinkList>
        </S.LabyrinthSection>

      </S.TopSection>
    </S.FooterContainer>
  );
};

export default Footer;