import React from "react";

import SmokeBackground from "../../../components/SmokeBackground";
import ProjectCard from "../../../components/ProjectCard";

import websites from "../../../data/portfolio/websites";

import {
    Container,
    Section,
    SectionTitle,
    Description,
    ProjectsGrid
} from "./styles";

export default function Websites() {

    return (

        <Container>

            <SmokeBackground />

            <Section>

                <SectionTitle>

                    Websites

                </SectionTitle>

                <Description>

                    WebSites públicos desenvolvidos para usó próprio ou encomenda de clientes, utilizando de tecnologia como JavaScript, Node, Vite, React, entre outras.

                </Description>

                <ProjectsGrid>

                    {websites.map((project) => (

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