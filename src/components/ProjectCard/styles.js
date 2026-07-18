import styled, { keyframes } from "styled-components";

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

export const Card = styled.article`
    position:relative;

    overflow:hidden;

    display:grid;
    grid-template-columns:420px 1fr;

    gap:35px;

    padding:28px;

    border-radius:34px;

    transition:.45s;

    background:${({theme})=>
        theme.mode==="dark"
            ?`
            linear-gradient(
                145deg,
                rgba(20,24,35,.92),
                rgba(14,18,28,.82)
            )
            `
            :`
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
    ${({theme})=>
        theme.mode==="dark"
            ?"rgba(255,255,255,.08)"
            :"rgba(0,0,0,.08)"
    };

    box-shadow:
    ${({theme})=>
        theme.mode==="dark"
            ?"0 25px 70px rgba(0,0,0,.45)"
            :"0 25px 60px rgba(0,0,0,.08)"
    };

    animation:${glow} 6s infinite;

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
            rgba(96,223,255,.18),
            transparent 70%
        );

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
            rgba(141,15,255,.16),
            transparent 70%
        );

    }

    &:hover{

        transform:
            translateY(-8px);

    }

    @media(max-width:980px){

        grid-template-columns:1fr;

    }
`;

export const ImageBox = styled.div`
    position:relative;

    z-index:2;

    border-radius:24px;

    overflow:hidden;

    min-height:260px;
`;

export const Image = styled.img`
    width:100%;
    height:100%;

    object-fit:cover;

    transition:.45s;

    ${Card}:hover &{

        transform:scale(1.05);

    }
`;

export const Content = styled.div`
    position:relative;
    z-index:2;

    display:flex;
    flex-direction:column;

    justify-content:center;

    gap:18px;
`;

export const Status = styled.span`
    width:max-content;

    padding:8px 14px;

    border-radius:999px;

    font-size:.8rem;
    font-weight:700;

    color:#fff;

    background:${({ color }) => color || "#60dfff"};

    box-shadow:0 8px 25px rgba(0,0,0,.25);
`;

export const Title = styled.h2`
    margin:0;

    font-size:2rem;
    font-weight:700;

    color:${({theme})=>
        theme.mode==="dark"
            ?"#fff"
            :"#222"};
`;

export const Subtitle = styled.h3`
    margin:0;

    font-size:1rem;
    font-weight:600;

    color:#60dfff;
`;

export const Description = styled.p`
    margin:0;

    line-height:1.9;

    font-size:1rem;

    color:${({theme})=>
        theme.mode==="dark"
            ?"#d8e4ff"
            :"#555"};
`;

export const TechList = styled.div`
    display:flex;

    flex-wrap:wrap;

    gap:12px;
`;

export const Tech = styled.span`
    padding:8px 14px;

    border-radius:999px;

    font-size:.82rem;
    font-weight:700;

    color:#60dfff;

    background:rgba(96,223,255,.08);

    border:1px solid rgba(96,223,255,.18);

    transition:.35s;

    &:hover{

        transform:translateY(-3px);

        background:rgba(96,223,255,.15);

    }
`;

export const Divider = styled.div`
    width:100%;

    height:1px;

    background:
    linear-gradient(
        90deg,
        transparent,
        rgba(96,223,255,.25),
        transparent
    );
`;

export const Footer = styled.div`
    display:flex;

    flex-wrap:wrap;

    gap:14px;

    margin-top:8px;
`;

export const Button = styled.a`
    display:inline-flex;

    align-items:center;
    justify-content:center;

    gap:10px;

    padding:12px 22px;

    border-radius:999px;

    text-decoration:none;

    font-weight:700;
    font-size:.92rem;

    color:${({theme})=>
        theme.mode==="dark"
            ?"#fff"
            :"#222"};

    background:${({theme})=>
        theme.mode==="dark"
            ?"rgba(255,255,255,.04)"
            :"rgba(255,255,255,.95)"};

    border:1px solid
    ${({theme})=>
        theme.mode==="dark"
            ?"rgba(255,255,255,.08)"
            :"rgba(0,0,0,.08)"};

    transition:.35s;

    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);

    svg{

        color:#60dfff;

        font-size:18px;

        transition:.35s;

    }

    &:hover{

        transform:
            translateY(-4px);

        color:#60dfff;

        border-color:rgba(96,223,255,.35);

        box-shadow:
            0 12px 30px rgba(96,223,255,.18);

    }

    &:hover svg{

        transform:scale(1.15);

    }
`;

export const Featured = styled.div`
    position:absolute;

    top:18px;
    right:18px;

    z-index:3;

    padding:8px 14px;

    border-radius:999px;

    background:
        linear-gradient(
            135deg,
            #60dfff,
            #8d0fff
        );

    color:#fff;

    font-size:.75rem;
    font-weight:700;

    letter-spacing:.4px;

    box-shadow:
        0 10px 30px rgba(96,223,255,.25);
`;