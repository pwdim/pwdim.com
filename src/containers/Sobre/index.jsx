import React from 'react';
import {
    FaReact, FaPaintBrush, FaGithub, FaTrophy, FaUser, FaInfoCircle, FaLink
} from 'react-icons/fa';
import { IoFlash } from 'react-icons/io5';
import { SiVercel } from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
import SmokeBackground from '../../components/SmokeBackground';

import {
    Container,
    Section,
    SectionTitle,
    Paragraph,
} from '../../styles/globalStyles';

import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';


const AboutPage = () => {
    const YOUR_DISCORD_ID = '386563422055170048';
    const iconStyle = { marginRight: '8px', verticalAlign: 'middle' };

    return (
        <Container>
            <SmokeBackground />
            <Section></Section>
            <DiscordProfileDisplay userId={YOUR_DISCORD_ID} />

            <Section>
                <SectionTitle>Sobre Mim</SectionTitle>
                <Paragraph>
                    Sou o <strong>@pwdim</strong> responsável por este painel.
                    Atualmente, sou estudante do Bacharelado Interdisciplinar em Ciência e Tecnologia (BICT), curso que serve como base para diversas engenharias.
                    Embora minha formação não seja estritamente focada em programação, possuo grande interesse em aprofundar meus conhecimentos nesta área.
                    Não me considero um programador profissional; dedico-me ao estudo autodidata de tópicos de meu interesse,
                    tais como as limitações da Inteligência Artificial, a estruturação de websites utilizando React, a requisição de APIs e a criação de bancos de dados, entre outros.
                </Paragraph>
            </Section>


            

            <Section>
                <SectionTitle>Tecnologias Utilizadas</SectionTitle>
                <Paragraph>
                    Este website foi desenvolvido utilizando as seguintes ferramentas e tecnologias, visando garantir performance e uma ótima experiência ao usuário:
                    <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyle: 'none' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <FaReact style={iconStyle} />
                            <strong>React JS:</strong> Biblioteca utilizada para a construção da interface de usuário dinâmica e componentizada (frontend).
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <FaPaintBrush style={iconStyle} />
                            <strong>Styled Components:</strong> Empregado para a estilização via CSS-in-JS, permitindo estilos encapsulados e coesos com os componentes.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <IoFlash style={iconStyle} />
                            <strong>Vite:</strong> Ferramenta de build responsável por agilizar o desenvolvimento e otimizar a compilação para produção.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <FaGithub style={iconStyle} />
                            <strong>GitHub:</strong> Plataforma utilizada para o controle de versão do código-fonte e integração com o serviço de hospedagem.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <SiVercel style={iconStyle} />
                            <strong>Vercel:</strong> Plataforma de hospedagem e deploy contínuo (CI/CD), assegurando a distribuição global e atualizações constantes do website.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <BsStars style={iconStyle} />
                            <strong>IA Gemini:</strong> Inteligência Artificial utilizada como ferramenta de apoio em diversas etapas do desenvolvimento, auxiliando na criação e otimização do projeto.
                        </li>
                    </ul>
                </Paragraph>
            </Section>

        </Container>
    );
};

export default AboutPage;