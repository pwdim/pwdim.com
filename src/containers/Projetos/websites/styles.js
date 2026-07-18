import styled from "styled-components";

export { Container, Section, SectionTitle } from "../../Projetos/styles";

export const Description = styled.p`
    position:relative;
    z-index:2;

    margin-top:20px;

    color:${({theme})=>

        theme.mode==="dark"

            ?"#d8e4ff"

            :"#555"};

    font-size:1rem;

    line-height:1.9;

    max-width:900px;
`;

export const ProjectsGrid = styled.div`
    position:relative;

    z-index:2;

    display:flex;

    flex-direction:column;

    gap:35px;

    margin-top:40px;
`;