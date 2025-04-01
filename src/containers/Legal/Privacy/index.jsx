import React from 'react';
import styled from 'styled-components';
import { Container, Title, SectionTitle, Paragraph, Section } from '../../../styles/globalStyles';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logos/logo.png';
import Footer from '../../../components/Footer';
import NavigationBar from '../../../components/nav'; // Importe o NavigationBar

const DiscordButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #7289da; /* Cor padrão do Discord */
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #677bc4;
  }

  img {
    height: 24px;
  }
`;

function PrivacyPolicyPage() {
  const discordInviteLink = 'https://discord.gg/BrsFhGnZT4';

  return (
    <Container>
      
      <Title>Política de Privacidade - pwdim.com</Title>

      <Section>
        <SectionTitle>1. Informações que Coletamos</SectionTitle>
        <Paragraph>
          Para o adequado funcionamento e aprimoramento contínuo deste website, podemos coletar informações específicas. Estas podem incluir dados de acesso, como endereço IP, tipo de navegador, páginas visitadas e horários de acesso, visando analisar o uso do site e melhorar a experiência do usuário.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Uso das Informações</SectionTitle>
        <Paragraph>
          As informações coletadas podem ser utilizadas para analisar o tráfego do site, entender o comportamento do usuário, personalizar a experiência e melhorar o conteúdo e a funcionalidade do website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Compartilhamento de Informações</SectionTitle>
        <Paragraph>
          Este website é uma plataforma pessoal. As informações coletadas geralmente não são compartilhadas com terceiros, a menos que seja necessário para cumprir obrigações legais ou proteger os direitos e a segurança do site e de seus usuários.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Links para Terceiros</SectionTitle>
        <Paragraph>
          Este website poderá apresentar ligações (links) para sítios eletrônicos pertencentes a terceiros. Cumpre ressaltar que a presente Política de Privacidade restringe-se exclusivamente ao uso deste website, não abrangendo as práticas de privacidade de tais sítios externos. Recomendamos, portanto, que o usuário proceda à leitura atenta das políticas de privacidade de quaisquer sítios de terceiros que venha a visitar, a fim de garantir a proteção de seus dados pessoais.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Segurança</SectionTitle>
        <Paragraph>
          Empregamos medidas de segurança consideradas razoáveis e em conformidade com as melhores práticas da indústria para proteger as informações coletadas contra acessos não autorizados, alterações indevidas, divulgação ou destruição não autorizada.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Alterações nesta Política de Privacidade</SectionTitle>
        <Paragraph>
          A presente Política de Privacidade poderá ser atualizada periodicamente, visando refletir eventuais alterações nas práticas de coleta e uso de informações ou em decorrência de exigências legais. Quaisquer modificações serão devidamente publicadas nesta página, sendo recomendável que o usuário a revise regularmente para manter-se informado sobre as condições vigentes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Contato</SectionTitle>
        <Paragraph>
          Em caso de dúvidas ou quaisquer preocupações relacionadas à presente Política de Privacidade, o usuário poderá entrar em contato através do formulário de contato disponível no site.
        </Paragraph>
      </Section>
      {/* Removi o botão do Discord, você pode adicionar novamente se precisar */}
    </Container>
  );
}

export default PrivacyPolicyPage;