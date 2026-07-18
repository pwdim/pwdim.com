import pwdimImage from "../../assets/portfolio/websites/pwdim.png";
import botPwdimImage from "../../assets/portfolio/websites/bot-pwdim.png";

const websites = [

    {
        title: "pwdim.com",

        subtitle: "Meu portfólio e website pessoal",

        image: pwdimImage,

        featured: true,

        status: "development",

        description:
            "Website desenvolvido para reunir meu portfólio, projetos, experiências e formas de contato. Construído com foco em design moderno, animações fluidas, glassmorphism, responsividade e desempenho, servindo como vitrine para meus trabalhos em desenvolvimento de software.",

        technologies: [
            "React",
            "Styled Components",
            "Vite",
            "JavaScript",
            "Vercel"
        ],

        github: "",

        website: "https://pwdim.com",

        documentation: "",

        demo: ""
    },

    {
        title: "bot.pwdim.com",

        subtitle: "Website simples com os termos dos meus produtos",

        image: botPwdimImage,

        status: "completed",

        description:
            "Landing page dedicada a minha política de privacidade e aos termos de uso.",

        technologies: [
            "React",
            "Styled Components",
            "JavaScript",
            "Vite",
            "Discord API"
        ],

        github: "",

        website: "https://bot.pwdim.com",

        documentation: "",

        demo: ""
    }

];

export default websites;