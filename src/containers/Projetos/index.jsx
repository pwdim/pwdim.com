import React from "react";
import {
    FaArrowRight,
    FaCode,
    FaGlobe,
    FaRobot
} from "react-icons/fa";
import SmokeBackground from "../../components/SmokeBackground";

import {
    Container,
    Section,
    SectionTitle,
    PortfolioGrid,
    PortfolioCard,
    CardImage,
    Glass,
    CardContent,
    CardFooter
} from "./styles";

import pluginsImg from "../../assets/portfolio/plugins.png";
import websitesImg from "../../assets/portfolio/websites.png";
import botsImg from "../../assets/portfolio/bots.png";

const items = [
    {
        title: "Plugins",
        desc: "Plugins para Minecraft desenvolvidos em Java.",
        image: pluginsImg,
        icon: <FaCode />,
        link: "/portfolio/plugins"
    },
    {
        title: "Websites",
        desc: "Sites modernos utilizando React e outras tecnologias.",
        image: websitesImg,
        icon: <FaGlobe />,
        link: "/portfolio/websites"
    },
    {
        title: "Bots",
        desc: "Bots para Discord e automações.",
        image: botsImg,
        icon: <FaRobot />,
        link: "/portfolio/bots"
    }
];

export default function Portfolio() {

    return (

        <Container>

            <SmokeBackground />

            <Section>

                <SectionTitle>
                    Meu Portfólio
                </SectionTitle>

                <p
                    style={{
                        marginTop: 18,
                        color: "#d8e4ff",
                        lineHeight: 1.8,
                        position: "relative",
                        zIndex: 2
                    }}
                >
                    Aqui você encontrará alguns dos meus principais projetos, divididos por
                    categoria. Cada seção reúne trabalhos desenvolvidos com foco em qualidade,
                    organização do código e boas práticas.
                </p>

                <PortfolioGrid>
                    {items.map((item) => (

                        <PortfolioCard
                            key={item.title}
                            to={item.link}
                        >

                            <CardImage
                                src={item.image}
                                alt={item.title}
                            />

                            <Glass />

                            <CardContent>

                                <div className="icon">
                                    {item.icon}
                                </div>

                                <h2>
                                    {item.title}
                                </h2>

                                <p>
                                    {item.desc}
                                </p>

                            </CardContent>

                            <CardFooter>

                                <span>
                                    Ver projetos
                                </span>

                                <FaArrowRight />

                            </CardFooter>

                        </PortfolioCard>

                    ))}

                </PortfolioGrid>

            </Section>

        </Container>

    );

}