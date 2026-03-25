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
                     Meu nome é Pedro, mas também sou chamado de pwdim, atualmente sou discente em Análise e Desenvolvimento de Sistemas e possuo uma 
                     trajetória de mais de décadas anos de imersão no ecossistema tecnológico, tendo iniciado o contato com a computação desde muito cedo. 
                     Ao longo dessa jornada, desenvolvi um perfil híbrido e autodidata, com sólido domínio em
                     hardware — atuando na montagem, diagnóstico e manutenção de sistemas — e em software, com foco
                     em lógica de programação e no desenvolvimento de projetos autorais, como o ecossistema desse website. 
                     Atualmente, dedico-me ao aprimoramento de sistemas próprios e à exploração de linguagens como Java, Python e JavaScript. 
                     Com uma base técnica madura e visão analítica, busco minha primeira oportunidade profissional para aplicar essa bagagem em desafios de mercado, 
                     visando contribuir com soluções inovadoras e elevar continuamente meu rigor técnico.
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