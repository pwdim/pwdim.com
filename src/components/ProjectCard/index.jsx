import React from "react";
import {
    FaGithub,
    FaGlobe,
    FaBook,
    FaPlay
} from "react-icons/fa";

import * as S from "./styles";

const statusColors = {
    development: "#4ade80",
    completed: "#3b82f6",
    maintenance: "#facc15",
    archived: "#ef4444"
};

const statusLabels = {
    development: "Em desenvolvimento",
    completed: "Concluído",
    maintenance: "Manutenção",
    archived: "Arquivado"
};

export default function ProjectCard({

    title,
    subtitle,

    image,

    description,

    technologies = [],

    github,
    website,
    documentation,
    demo,

    status = "development",

    featured = false

}) {

    return (

        <S.Card>

            {featured && (

                <S.Featured>

                    Destaque

                </S.Featured>

            )}

            <S.ImageBox>

                <S.Image
                    src={image}
                    alt={title}
                />

            </S.ImageBox>

            <S.Content>

                <S.Status
                    color={statusColors[status]}
                >

                    {statusLabels[status]}

                </S.Status>

                <S.Title>

                    {title}

                </S.Title>

                {subtitle && (

                    <S.Subtitle>

                        {subtitle}

                    </S.Subtitle>

                )}

                <S.Description>

                    {description}

                </S.Description>

                {technologies.length > 0 && (

                    <>

                        <S.Divider />

                        <S.TechList>

                            {technologies.map((tech) => (

                                <S.Tech
                                    key={tech}
                                >

                                    {tech}

                                </S.Tech>

                            ))}

                        </S.TechList>

                    </>

                )}

                <S.Footer>

                    {github && (

                        <S.Button
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <FaGithub />

                            GitHub

                        </S.Button>

                    )}

                    {website && (

                        <S.Button
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <FaGlobe />

                            Website

                        </S.Button>

                    )}

                    {documentation && (

                        <S.Button
                            href={documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <FaBook />

                            Documentação

                        </S.Button>

                    )}

                    {demo && (

                        <S.Button
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <FaPlay />

                            Demo

                        </S.Button>

                    )}

                </S.Footer>

            </S.Content>

        </S.Card>

    );

}