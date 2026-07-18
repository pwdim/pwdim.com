import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeUp = keyframes`
from{
    opacity:0;
    transform:translateY(25px);
}
to{
    opacity:1;
    transform:translateY(0);
}
`;

const glow = keyframes`
0%{
    box-shadow:
    0 20px 50px rgba(0,0,0,.45);
}
50%{
    box-shadow:
    0 30px 70px rgba(96,223,255,.18),
    0 0 25px rgba(141,15,255,.12);
}
100%{
    box-shadow:
    0 20px 50px rgba(0,0,0,.45);
}
`;

export const Container = styled.div`
    position:relative;

    width:min(1100px,90%);
    margin:50px auto;

    display:flex;
    flex-direction:column;
    gap:35px;

    z-index:2;

    @media(max-width:768px){
        width:95%;
        gap:20px;
    }
`;

export const Section = styled.section`
    position:relative;
    overflow:hidden;

    padding:35px;

    border-radius:34px;

    transition:.45s;

    background:${({ theme }) =>
        theme.mode === "dark"
            ? `
            linear-gradient(
                145deg,
                rgba(20,24,35,.92),
                rgba(14,18,28,.82)
            )
            `
            : `
            linear-gradient(
                145deg,
                rgba(255,255,255,.92),
                rgba(245,248,252,.90)
            )
            `
    };

    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);

    border:1px solid
    ${({ theme }) =>
        theme.mode === "dark"
            ? "rgba(255,255,255,.08)"
            : "rgba(0,0,0,.08)"
    };

    box-shadow:
    ${({ theme }) =>
        theme.mode === "dark"
            ? `
            0 25px 70px rgba(0,0,0,.45)
            `
            : `
            0 25px 60px rgba(0,0,0,.08)
            `
    };

    animation:${fadeUp} .8s ease;

    &::before{
        content:"";
        position:absolute;

        width:320px;
        height:320px;

        top:-170px;
        right:-170px;

        border-radius:50%;

        background:
        radial-gradient(
            circle,
            rgba(96,223,255,.20),
            transparent 70%
        );

        transition:.5s;
    }

    &::after{
        content:"";
        position:absolute;

        width:240px;
        height:240px;

        left:-120px;
        bottom:-120px;

        border-radius:50%;

        background:
        radial-gradient(
            circle,
            rgba(141,15,255,.18),
            transparent 70%
        );

        transition:.5s;
    }

    &:hover{

        transform:translateY(-8px);

        animation:${glow} 2s infinite;

    }

    &:hover::before{
        transform:scale(1.2);
    }

    &:hover::after{
        transform:scale(1.15);
    }

    @media(max-width:768px){

        padding:25px;
        border-radius:24px;

    }
`;

export const SectionTitle = styled.h2`
    position:relative;
    z-index:2;

    margin:0;

    font-size:2rem;
    font-weight:700;

    color:#60dfff;

    display:flex;
    align-items:center;
    gap:10px;

    &::after{

        content:"";

        flex:1;

        height:2px;

        border-radius:999px;

        background:
        linear-gradient(
            90deg,
            #60dfff,
            #8d0fff,
            transparent
        );

    }

    @media(max-width:768px){

        font-size:1.5rem;

    }
`;

export const PortfolioGrid = styled.div`
    position:relative;
    z-index:2;

    width:100%;

    display:grid;

    grid-template-columns:
        repeat(auto-fit,minmax(320px,1fr));

    gap:35px;

    margin-top:35px;

    @media(max-width:768px){

        grid-template-columns:1fr;

    }
`;

export const PortfolioCard = styled(Link)`
    position:relative;

    height:360px;

    overflow:hidden;

    border-radius:34px;

    text-decoration:none;

    transform-style:preserve-3d;

    transition:.45s;

    background:
        radial-gradient(
            circle at top right,
            rgba(96,223,255,.28),
            transparent 55%
        ),
        radial-gradient(
            circle at bottom left,
            rgba(141,15,255,.22),
            transparent 60%
        ),
        linear-gradient(
            145deg,
            #161b26,
            #11151f
        );

    border:1px solid rgba(255,255,255,.08);

    box-shadow:
        0 20px 50px rgba(0,0,0,.45);

    &:hover{

        transform:
            perspective(1000px)
            rotateX(8deg)
            rotateY(-8deg)
            translateY(-10px);

        box-shadow:
            0 30px 70px rgba(96,223,255,.18),
            0 0 25px rgba(141,15,255,.12);

    }
`;

export const CardImage = styled.img`
    position:absolute;
    inset:0;

    width:100%;
    height:100%;

    object-fit:cover;

    opacity:.28;

    transition:.45s;

    ${PortfolioCard}:hover &{

        transform:scale(1.08);

    }
`;

export const Glass = styled.div`
    position:absolute;

    inset:10px;

    border-radius:28px;

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);

    border:1px solid rgba(255,255,255,.10);

    z-index:1;
`;

export const CardContent = styled.div`
    position:absolute;

    left:28px;
    right:28px;
    bottom:78px;

    z-index:2;

    color:#fff;

    .icon{

        font-size:2rem;

        color:#60dfff;

        margin-bottom:16px;

    }

    h2{

        margin:0 0 10px;

        font-size:2rem;

        font-weight:700;

    }

    p{

        margin:0;

        color:#d7dce8;

        line-height:1.7;

        font-size:.95rem;

    }
`;

export const CardFooter = styled.div`
    position:absolute;

    left:28px;
    right:28px;
    bottom:26px;

    z-index:2;

    display:flex;
    justify-content:space-between;
    align-items:center;

    color:#60dfff;

    font-weight:700;

    svg{

        transition:.35s;

    }

    ${PortfolioCard}:hover & svg{

        transform:translateX(8px);

    }
`;