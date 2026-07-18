import styled, { keyframes } from "styled-components";

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

const rotateBorder = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
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

    margin:0 0 20px;

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

export const Paragraph = styled.div`
    position:relative;
    z-index:2;

    color:${({ theme }) =>
        theme.mode === "dark"
            ? "#d8e4ff"
            : "#404960"
    };

    font-size:1.05rem;
    line-height:1.9;

    display:flex;
    flex-direction:column;
    gap:18px;

    strong{
        color:#60dfff;
    }

    p{
        margin:0;
    }

    @media(max-width:768px){
        font-size:.95rem;
    }
`;

export const SocialRow = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:18px;
margin-top:30px;
flex-wrap:wrap;
`;

export const Glass = styled.a`
position:relative;
display:flex;
align-items:center;
justify-content:center;
width:62px;
height:62px;
border-radius:50%;
overflow:hidden;
cursor:pointer;
text-decoration:none;
transition:.45s;
transform-style:preserve-3d;
background:${({ theme }) => theme.mode === "dark" ? "#181c27" : "#fff"};
border:1px solid ${({ theme }) => theme.mode === "dark" ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"};
box-shadow:${({ theme }) => theme.mode === "dark" ? "0 12px 30px rgba(0,0,0,.45)" : "0 12px 30px rgba(0,0,0,.12)"};

&::before{
content:"";
position:absolute;
width:220%;
height:220%;
background:conic-gradient(from 0deg,#60dfff,#3b82f6,#8d0fff,#60dfff);
animation:${rotateBorder} 4s linear infinite;
opacity:0;
transition:.4s;
}

&::after{
content:"";
position:absolute;
inset:2px;
border-radius:50%;
background:${({ theme }) => theme.mode === "dark" ? "#181c27" : "#fff"};
z-index:1;
}

svg{
position:relative;
z-index:2;
font-size:26px;
color:${({ theme }) => theme.mode === "dark" ? "#fff" : "#222"};
transition:.35s;
}

&:hover{
transform:translateY(-8px) scale(1.08) rotate(8deg);
box-shadow:0 20px 50px rgba(96,223,255,.35);
}

&:hover::before{
opacity:1;
}

&:hover svg{
color:#60dfff;
transform:scale(1.15);
}
`;

export const CopyMessage = styled.div`
margin-top:20px;
text-align:center;
color:#60dfff;
font-size:.95rem;
font-weight:600;
animation:${fadeUp} .35s ease;
`;

export const Divider = styled.div`
width:100%;
height:1px;
margin:30px 0;

background:${({theme}) =>
theme.mode==="dark"
?`
linear-gradient(
90deg,
transparent,
rgba(96,223,255,.35),
rgba(141,15,255,.25),
transparent
)
`
:`
linear-gradient(
90deg,
transparent,
rgba(96,223,255,.30),
rgba(141,15,255,.20),
transparent
)
`
};
`;

export const ContactCard = styled.div`
position:relative;

display:flex;
flex-direction:column;
gap:12px;

padding:24px;

border-radius:22px;

background:${({theme}) =>
theme.mode==="dark"
?"rgba(255,255,255,.025)"
:"rgba(0,0,0,.025)"
};

border:1px solid
${({theme}) =>
theme.mode==="dark"
?"rgba(255,255,255,.06)"
:"rgba(0,0,0,.06)"
};

transition:.35s;

overflow:hidden;

&::before{
content:"";
position:absolute;
top:0;
left:0;
width:4px;
height:100%;
background:linear-gradient(
180deg,
#60dfff,
#8d0fff
);
opacity:.85;
}

&:hover{
transform:translateY(-6px);

border-color:rgba(96,223,255,.30);

box-shadow:
0 20px 40px rgba(96,223,255,.10);
}
`;

export const ContactTitle = styled.h3`
margin:0;

font-size:1.15rem;
font-weight:700;

color:#60dfff;
`;

export const ContactText = styled.p`
margin:0;

line-height:1.8;

color:${({theme}) =>
theme.mode==="dark"
?"#d8e4ff"
:"#404960"
};
`;

export const Badge = styled.span`
display:inline-flex;
align-items:center;

width:max-content;

margin-top:4px;

padding:8px 16px;

border-radius:999px;

font-size:.85rem;
font-weight:700;

background:linear-gradient(
135deg,
#60dfff,
#3b82f6,
#8d0fff
);

color:white;

box-shadow:
0 10px 25px rgba(96,223,255,.18);
`;

export const AboutSection = styled.div`
display:flex;
flex-direction:column;
gap:18px;

h3{

margin:0;

font-size:1.6rem;

font-weight:700;

color:#60dfff;

}

p{

margin:0;

line-height:1.9;

color:${({theme}) =>
theme.mode==="dark"
?"#d8e4ff"
:"#404960"
};

}

strong{
color:#60dfff;
}
`;