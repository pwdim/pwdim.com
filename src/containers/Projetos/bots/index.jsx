import React from "react";

import SmokeBackground from "../../../components/SmokeBackground";
import ProjectCard from "../../../components/ProjectCard";

import bots from "../../../data/portfolio/bots";

import {
    Container,
    Section,
    SectionTitle,
    Description,
    ProjectsGrid
} from "./styles";

export default function Bots() {

    return (

        <Container>

            <SmokeBackground />

            <Section>

                <SectionTitle>

                    Bots

                </SectionTitle>

                <Description>

                    Automações utilizadas em serviços de atendimento ao cliente ou logs, desenvolvidas para plataformas como WhatsApp, Discord, Instagram,
                    utilizando API's públicas ou próprias para exibição de informações.

                </Description>

                <ProjectsGrid>

                    {bots.map((project) => (

                        <ProjectCard

                            key={project.title}

                            {...project}

                        />

                    ))}

                </ProjectsGrid>

            </Section>

        </Container>

    );

}