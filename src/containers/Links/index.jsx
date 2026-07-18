import React, { useState } from "react";
import * as S from "./styles";

import SmokeBackground from "../../components/SmokeBackground";
import DiscordProfileDisplay from "../../components/DiscordProfileDisplay";

import {
    FaGithub,
    FaDiscord,
    FaEnvelope,
    FaCode
} from "react-icons/fa";

const LinksPage = () => {

    const YOUR_DISCORD_ID = "386563422055170048";

    const [copyMessage, setCopyMessage] = useState("");
    const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

    const handleEmailClick = async (e) => {

        e.preventDefault();

        try {

            await navigator.clipboard.writeText("contact@pwdim.com");

            setCopyMessage("Email copiado com sucesso!");
            setIsCopyMessageVisible(true);

            setTimeout(() => {
                setIsCopyMessageVisible(false);
            }, 3000);

        } catch {

            setCopyMessage("Não foi possível copiar o email.");
            setIsCopyMessageVisible(true);

            setTimeout(() => {
                setIsCopyMessageVisible(false);
            }, 3000);

        }

    };

    return (

        <S.Container>

            <SmokeBackground />

            <S.Section>

                <DiscordProfileDisplay
                    userId={YOUR_DISCORD_ID}
                />

                <S.SocialRow>

                    <S.Glass
                        href="https://github.com/pwdim"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </S.Glass>

                    <S.Glass
                        href="https://dc.pwdim.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Discord"
                    >
                        <FaDiscord />
                    </S.Glass>

                    <S.Glass
                        href="#"
                        onClick={handleEmailClick}
                        title="Copiar Email"
                    >
                        <FaEnvelope />
                    </S.Glass>

                </S.SocialRow>

                {isCopyMessageVisible && (
                    <S.CopyMessage>
                        {copyMessage}
                    </S.CopyMessage>
                )}

            </S.Section>
                        <S.Section>

                <S.SectionTitle>
                    <FaCode />
                    Contato
                </S.SectionTitle>

                <S.Paragraph>

                    <p>
                        Sou apaixonado por tecnologia e sempre aberto a novos
                        desafios. Caso tenha interesse em desenvolver um projeto,
                        realizar uma parceria ou conversar sobre oportunidades
                        profissionais, ficarei feliz em conversar.
                    </p>

                </S.Paragraph>

                <S.ContactCard>

                    <S.ContactTitle>
                        Email
                    </S.ContactTitle>

                    <S.ContactText>
                        Entre em contato através do endereço abaixo.
                    </S.ContactText>

                    <S.Badge>
                        contact@pwdim.com
                    </S.Badge>

                </S.ContactCard>

                <S.ContactCard>

                    <S.ContactTitle>
                        Discord
                    </S.ContactTitle>

                    <S.ContactText>
                        Estou online praticamente todos os dias e respondo o
                        mais rápido possível.
                    </S.ContactText>

                    <S.Badge>
                        @pwdium
                    </S.Badge>

                </S.ContactCard>

                <S.ContactCard>

                    <S.ContactTitle>
                        GitHub
                    </S.ContactTitle>

                    <S.ContactText>
                        Todos os meus projetos públicos, estudos e contribuições
                        encontram-se disponíveis no GitHub.
                    </S.ContactText>

                    <S.Badge>
                        github.com/pwdim
                    </S.Badge>

                </S.ContactCard>

            </S.Section>

            <S.Section>

                <S.SectionTitle>
                    Vamos construir algo incrível
                </S.SectionTitle>

                <S.Paragraph>

                    <p>
                        Estou sempre em busca de novos desafios envolvendo
                        <strong> Java</strong>,
                        <strong> React</strong>,
                        <strong> JavaScript</strong>,
                        <strong> Python</strong> e desenvolvimento de soluções
                        para Minecraft, aplicações web e automações.
                    </p>

                    <S.Divider />

                    <p>
                        Se você possui uma ideia, um projeto ou busca alguém
                        para colaborar no desenvolvimento de uma aplicação,
                        plugin ou sistema, entre em contato através de qualquer
                        um dos canais disponíveis acima.
                    </p>

                </S.Paragraph>

            </S.Section>

        </S.Container>

    );

};

export default LinksPage;