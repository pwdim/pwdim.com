import React from "react";

import SmokeBackground from "../../../components/SmokeBackground";
import ProjectCard from "../../../components/ProjectCard";

import plugins from "../../../data/portfolio/plugins";

import {
    Container,
    Section,
    SectionTitle,
    Description,
    ProjectsGrid
} from "./styles";

export default function Plugins() {

    return (

        <Container>

            <SmokeBackground />

            <Section>

                <SectionTitle>

                    Plugins

                </SectionTitle>

                <Description>

                    Aqui estão alguns dos principais plugins que desenvolvi para
                    Minecraft. Cada projeto foi criado priorizando arquitetura,
                    desempenho, organização do código e facilidade de
                    manutenção.

                </Description>

                <ProjectsGrid>

                    {plugins.map((project) => (

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