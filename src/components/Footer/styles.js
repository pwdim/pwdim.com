import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #121314; /* Cor de fundo preta */
  color: #a0a0a0;
  padding: 40px 20px;
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
`;

export const LabyrinthSection = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 20px;
  text-align: right; /* Alinha "pwdim.com" à direita */
`;

export const EmpresaSection = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 20px;
`;

export const LegalSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
  text-align: center; /* Alinha "LEGAL" ao centro */

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  color: #fff;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  a {
    color: #a0a0a0;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00FFFF;
    }
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
`;

export const LanguageOption = styled.span`
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#a0a0a0'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;

    a {
      color: #a0a0a0;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #00FFFF;
      }
    }
  }
`;

export const Copyright = styled.p`
  margin-bottom: 15px;
  line-height: 1.4;
`;

export const LogoPlaceholder = styled.span`
  font-size: 1.5rem;
  color: #fff;
  display: block;
  margin-bottom: 10px;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center; /* Garante que os links legais fiquem no centro */

  a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00FFFF;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BottomSection = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
`;

export const BottomText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
`;