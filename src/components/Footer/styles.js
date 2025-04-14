import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #121314;
  color: #a0a0a0;
  padding: 40px 20px;
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;

  body.light-mode & {
    background-color: #f8f9fa;
    color: #555;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;


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
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
     padding: 0;
  }
`;

export const LabyrinthSection = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 20px;
  padding: 0 15px;
  box-sizing: border-box;

  @media (min-width: 769px) {
      text-align: center;
  }
   @media (max-width: 768px) {
     text-align: center;
     padding: 0;
  }
`;

export const EmpresaSection = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 20px;
  padding: 0 15px;
  box-sizing: border-box;

   @media (max-width: 768px) {
     padding: 0;
  }
`;

export const LegalSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
  padding: 0 15px;
  box-sizing: border-box;
  text-align: center; 

  @media (max-width: 768px) {
    padding: 0;
    
  }
`;


export const Title = styled.h3`
  color: #fff;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;

  body.light-mode & {
    color: #212529;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
     justify-content: center;
  }


  a {
    color: #a0a0a0;
    font-size: 1.3rem;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: #00FFFF;
      transform: scale(1.1);
    }

     body.light-mode & {
       color: #555;
       &:hover {
         color: #007bff;
       }
     }
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

   @media (max-width: 768px) {
     justify-content: center;
  }
`;

export const LanguageOption = styled.span`
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#a0a0a0'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};

   body.light-mode & {
     color: ${props => props.active ? '#212529' : '#555'};
   }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #a0a0a0;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #00FFFF;
      }

       body.light-mode & {
         color: #555;
         &:hover {
           color: #007bff;
         }
       }
    }
  }
`;

export const Copyright = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 0.85rem;
`;

export const LogoPlaceholder = styled.span`
  font-size: 1.5rem;
  color: #fff;
  display: block;
  margin-bottom: 10px;

   body.light-mode & {
    color: #212529;
   }
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00FFFF;
    }

     body.light-mode & {
       color: #555;
       &:hover {
         color: #007bff;
       }
     }
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;
export const BottomSection = styled.div`
  text-align: right;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #333;

   @media (max-width: 768px) {
    text-align: center;
  }

  body.light-mode & {
    border-top-color: #dee2e6;
  }
`;

export const BottomText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;

   body.light-mode & {
    color: #6c757d;
  }
`;