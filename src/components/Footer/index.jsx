import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub, // Importe o ícone do GitHub
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
            <a href="https://github.com/pwdim" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> {/* Troquei pelo GitHub */}
            </a>
            <a href="https://discord.gg/SEUS_LINK_DO_DISCORD" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="mailto:contato@pwdim.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            {/* Removi o ícone do TikTok, adicione se precisar */}
          </S.SocialIcons>
          <S.LanguageSelector>
          </S.LanguageSelector>
        </S.ContactInfo>

        <S.LegalSection> {/* LEGAL agora vem antes */}
          <S.Title>LEGAL</S.Title>
          <S.Copyright>
            © {currentYear} Copyright pwdim.com<br />
            Todos os direitos reservados.
          </S.Copyright>
          <S.LegalLinks>
            <a href="/legal/terms">Termos de Serviço</a> {/* Adicione o link correto */}
            <a href="/legal/privacy">Políticas de Privacidade</a> {/* Adicione o link correto */}
          </S.LegalLinks>
          <S.BottomSection>
            <S.BottomText><img src='/src/assets/logos/logofull.png'></img></S.BottomText> {/* Troquei para PWDIM */}
          </S.BottomSection>
        </S.LegalSection>

        <S.LabyrinthSection> {/* pwdim.com agora vem depois */}
          <S.Title>pwdim.com</S.Title>
          <S.LinkList>
            <li><a href="/">Inicio</a></li>
            <li><a href="/sobre" target="_blank" rel="noopener noreferrer">Sobre</a></li>
            <li><a href="/links  " target="_blank" rel="noopener noreferrer">Links</a></li>
          </S.LinkList>
        </S.LabyrinthSection>

      </S.TopSection>
    </S.FooterContainer>
  );
};

export default Footer;