import React, { useState } from "react";
import {
    FaReact,
    FaPaintBrush,
    FaGithub,
    FaDiscord,
    FaEnvelope
} from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { SiVercel } from "react-icons/si";
import { BsStars } from "react-icons/bs";

import SmokeBackground from "../../components/SmokeBackground";
import DiscordProfileDisplay from "../../components/DiscordProfileDisplay";

import {
    Container,
    Section,
    SectionTitle,
    Paragraph,
    SocialRow,
    Glass,
    CopyMessage
} from "./styles";

const AboutPage = () => {
    const YOUR_DISCORD_ID = "386563422055170048";

    const [copyMessage, setCopyMessage] = useState("");
    const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

    const iconStyle = {
        marginRight: "8px",
        verticalAlign: "middle"
    };

    const handleEmailClick = async (e) => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText("contact@pwdim.com");

            setCopyMessage("Email copiado com sucesso!");
            setIsCopyMessageVisible(true);

            setTimeout(() => {
                setIsCopyMessageVisible(false);
            }, 3000);
        } catch (err) {
            setCopyMessage("Não foi possível copiar o email.");
            setIsCopyMessageVisible(true);

            setTimeout(() => {
                setIsCopyMessageVisible(false);
            }, 3000);
        }
    };

    return (
        <Container>
            <SmokeBackground />

            <Section>

                <DiscordProfileDisplay
                    userId={YOUR_DISCORD_ID}
                />

                <SocialRow>

                    <Glass
                        href="https://github.com/pwdim"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </Glass>

                    <Glass
                        href="https://discord.pwdim.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Discord"
                    >
                        <FaDiscord />
                    </Glass>

                    <Glass
                        href="#"
                        onClick={handleEmailClick}
                        title="Copiar Email"
                    >
                        <FaEnvelope />
                    </Glass>

                </SocialRow>

                {isCopyMessageVisible && (
                    <CopyMessage>
                        {copyMessage}
                    </CopyMessage>
                )}

            </Section>

            <Section>

                <SectionTitle>
                    Sobre Mim
                </SectionTitle>

                <Paragraph>

                    Olá, sou Pedro (pwdim).

                    Discente em Análise e Desenvolvimento de Sistemas, com mais
                    de uma década de imersão no ecossistema tecnológico.

                    Minha trajetória começou cedo, permitindo desenvolver um
                    perfil híbrido e autodidata, unindo sólido conhecimento em
                    hardware (diagnóstico, manutenção e infraestrutura) com
                    desenvolvimento de software.

                    Atualmente concentro meus estudos em Java, Python e
                    JavaScript, desenvolvendo projetos próprios focados em
                    desempenho, arquitetura e boas práticas.

                    Tenho interesse em desenvolvimento backend, aplicações web,
                    automações e plugins para Minecraft, buscando constantemente
                    criar soluções escaláveis, organizadas e modernas.

                    Estou em busca da minha primeira oportunidade profissional,
                    onde possa aplicar meus conhecimentos técnicos, aprender
                    continuamente e contribuir para projetos relevantes.

                </Paragraph>

            </Section>

            <Section>

                <SectionTitle>
                    Tecnologias Utilizadas
                </SectionTitle>

                <Paragraph>

                    Este website foi desenvolvido utilizando tecnologias
                    modernas, priorizando desempenho, organização do código e
                    experiência do usuário.

                    <ul>

                        <li>

                            <FaReact style={iconStyle} />

                            <div>

                                <strong>
                                    React JS
                                </strong>

                                <br />

                                Biblioteca responsável pela construção de toda a
                                interface do projeto utilizando componentes
                                reutilizáveis.

                            </div>

                        </li>

                        <li>

                            <FaPaintBrush style={iconStyle} />

                            <div>

                                <strong>
                                    Styled Components
                                </strong>

                                <br />

                                Utilizado para criar toda a estilização através
                                de CSS-in-JS, mantendo os estilos organizados,
                                reutilizáveis e desacoplados.

                            </div>

                        </li>

                        <li>

                            <IoFlash style={iconStyle} />

                            <div>

                                <strong>
                                    Vite
                                </strong>

                                <br />

                                Responsável pelo ambiente de desenvolvimento e
                                build da aplicação, oferecendo inicialização
                                extremamente rápida e excelente otimização para
                                produção.

                            </div>

                        </li>

                        <li>

                            <FaGithub style={iconStyle} />

                            <div>

                                <strong>
                                    GitHub
                                </strong>

                                <br />

                                Utilizado para versionamento do código,
                                gerenciamento do projeto e integração com o
                                deploy automático.

                            </div>

                        </li>

                        <li>

                            <SiVercel style={iconStyle} />

                            <div>

                                <strong>
                                    Vercel
                                </strong>

                                <br />

                                Plataforma responsável pela hospedagem,
                                distribuição global e deploy contínuo da
                                aplicação.

                            </div>

                        </li>

                        <li>

                            <BsStars style={iconStyle} />

                            <div>

                                <strong>
                                    IA Gemini
                                </strong>

                                <br />

                                Utilizada como ferramenta de apoio durante o
                                desenvolvimento, auxiliando em ideias,
                                otimizações e validações técnicas ao longo do
                                projeto.

                            </div>

                        </li>

                    </ul>

                </Paragraph>

            </Section>

        </Container>
    );
};

export default AboutPage;