import goldImage from "../../assets/portfolio/plugins/gold.webp";
import monetImage from "../../assets/portfolio/plugins/monet.webp";
import lunaImage from "../../assets/portfolio/plugins/luna.webp";
import himmelImage from "../../assets/portfolio/plugins/himmel.webp";

const plugins = [

    {
        title: "Gold",

        subtitle: "Plugin principal do Lobby",

        image: goldImage,

        featured: false,

        status: "development",

        description:
            "Plugin em paper para o YaraMC.com.br, desenvolvido para ser versátil e abrigar todos os sitemas necessários nos servidores back-end. Sincronizado com o proxy para exibir todos os menus referente as tags, logs, /account, reports, entre outros, gerenciamento de mundo, sistema de lobby, além dos sistemas de rankup.",

        technologies: [
            "Java 25",
            "Paper",
            "PacketEvents",
            "MySQL",
            "Redis",
            "Adventure",
            "Gradle"
        ],

        github: "",

        website: "",

        documentation: "",

        demo: ""
    },

    {
        title: "Himmel",

        subtitle: "Plugin do Proxy",

        image: himmelImage,
        featured: true,

        status: "development",

        description:
            "Plugin de proxy para o YaraMC.com.br, desenvolvido para vincular todos os servidores, sistema de permissões/grupos/ranks baseados em grandes servidores, sistema de logs e logins com menu in-game e no discord, sistema de tags com estilização por versão, gerenciamento total de usuários com o /account via menu que são sincronizados com o plugin de back-end Gold.",

        technologies: [
            "Java 25",
            "Bungeecoord/Waterfall/Zartema",
            "MySQL"
        ],

        github: "",

        website: "",

        documentation: "",

        demo: ""
    },

        {
        title: "Arcade",

        subtitle: "Base de plugin",

        image: himmelImage,

        status: "archived",

        description:
            "Base pública de um plugin desenvolvida com sistema de gerenciamento de salas por mundo, tendo como dependência o SlimeWorldManager para criação e reset das mesmas.",

        technologies: [
            "Java 8",
            "Paper",
            "SlimeWorldManager",
            "Minecraft 1.8"
        ],

        github: "https://github.com/pwdim/arcade",

        website: "",

        documentation: "",

        demo: ""
    }

];

export default plugins;