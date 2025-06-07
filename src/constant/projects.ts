import { BASE_URL } from "@/config/env";
import SKILLS from "./skills";
import { ItemSkill, Project, ProjectName } from "@/types";

const frontend = SKILLS[0].items;
const backend = SKILLS[1].items;
const database = SKILLS[2].items;
const ai_integration = SKILLS[5].items;
const tools = SKILLS[4].items;
const dev_ops = SKILLS[3].items;

const getSkillByName = (name: string, skills: ItemSkill[]) =>
    (skills.find(
        ({ name: _name }) => name.toLowerCase() === _name.toLowerCase(),
    ) as ItemSkill) || [];

const PROJECTS: Record<ProjectName, Project> = {
    casa: {
        category: "frontend",
        title: "EkoopBanker Plus CASA V3 (UI)",
        thumbnailLink: `${BASE_URL}/images/projects/casa-thumbnail.png`,
        description:
            "A core banking system that handles banking transactions and generates financial reports.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("typescript", frontend),
            getSkillByName("css", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("next js", backend),
            getSkillByName("redux toolkit", tools),
            getSkillByName("socket.io", backend),
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf`,
        type: "company",
    },
    casa_api: {
        category: "backend",
        title: "EkoopBanker Plus CASA V3 (API)",
        thumbnailLink: `${BASE_URL}/images/projects/casa-thumbnail.png`,
        description:
            "A core banking system that handles banking transactions and generates financial reports.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("sql server", database),
            getSkillByName("socket.io", backend),
            getSkillByName("crystal report", tools),
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf`,
        type: "company",
    },
    fixed_asset: {
        category: "fullstack",
        title: "EkoopBanker Plus Accounting V2",
        thumbnailLink: `${BASE_URL}/images/projects/accounting-thumbnail.png`,
        description:
            "An accounting system that manages fixed asset transactions and generates detailed reports for asset management.",
        technologies: [
            getSkillByName("csharp", backend),
            getSkillByName("asp.net", backend),
            getSkillByName("sql server", database),
            getSkillByName("crystal report", tools),
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_ACCOUNTING_V2.pdf`,
        type: "company",
    },
    portfolio: {
        category: "frontend",
        title: "Portfolio Site",
        thumbnailLink: `${BASE_URL}/images/projects/portfolio-site-thumbnail.png`,
        description:
            "A simple portfolio website that showcases my experiences, projects, and services",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("css", frontend),
            getSkillByName("html", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("tailwind css", frontend),
            getSkillByName("docker", dev_ops),
        ],
        githubRepo: "https://github.com/ken-027/portfolio",
        dockerLink: "https://hub.docker.com/r/ken027/portfolio-site",
        liveDemo: "https://portfolio.ksoftdev.site",
        type: "personal",
    },
    portfolio_terminal: {
        category: "frontend",
        title: "Terminal-Styled Portfolio",
        thumbnailLink: `${BASE_URL}/images/projects/terminal-based-portfolio.png`,
        description:
            "A terminal-style portfolio website designed to showcase my skills, featured projects, and professional services with a nostalgic command-line interface.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("css", frontend),
            getSkillByName("html", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("tailwind css", frontend),
            getSkillByName("docker", dev_ops),
        ],
        githubRepo: "https://github.com/ken-027/portfolio",
        dockerLink: "https://hub.docker.com/r/ken027/portfolio-site",
        liveDemo: "#terminal-styled",
        type: "personal",
    },
    portfolio_api: {
        category: "backend",
        title: "Portfolio API with Chatbot",
        thumbnailLink: `${BASE_URL}/images/projects/portfolio-chatbot-api.png`,
        liveDemo: "https://portfolio-api.ksoftdev.site/api-docs",
        description:
            "Built a simple portfolio with chatbot API that combines OpenAI's frontend model with Retrieval-Augmented Generation (RAG), using MongoDB's Vector Search for embedding-based document retrieval to provide more relevant and context-aware responses.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("express js", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("docker", dev_ops),
        ],
        githubRepo: "https://github.com/ken-027/portfolio-chatbot-api",
        dockerLink: "https://hub.docker.com/r/ken027/portfolio-api",
        type: "personal",
        aiPowered: true,
    },
    dashboard: {
        category: "fullstack",
        title: "E-commerce Dashboard",
        thumbnailLink: `${BASE_URL}/images/projects/ecommerce-dashboard-thumbnail.png`,
        description:
            "A comprehensive dashboard designed for efficient inventory management in an e-commerce setting. Enables seamless tracking, updating, and categorization of products with real-time data interaction. Features include intuitive product organization, stock level monitoring, and streamlined workflows for managing item details, availability, and updates.",
        technologies: [
            getSkillByName("css", frontend),
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("php", backend),
            getSkillByName("laravel", backend),
            getSkillByName("maria db", database),
        ],
        screenshot: `${BASE_URL}/pdf/LARAVEL_ECOMMERCE_DASHBOARD.pdf`,
        type: "freelance",
    },
    ai_deep_research: {
        category: "fullstack",
        title: "AI Deep Research",
        thumbnailLink: `${BASE_URL}/images/projects/ai-deep-research.png`,
        description:
            "AI Deep Research generates in-depth AI-powered reports and emails them to users using EmailJS, with a third-party rate limiter ensuring fair usage.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
        ],
        githubRepo: "https://github.com/ken-027/ai-deep-research",
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/ai-deep-research",
        type: "personal",
        aiPowered: true,
    },
    gradio_portfolio_chatbot: {
        category: "fullstack",
        title: "Gradio Portfolio Chatbot",
        thumbnailLink: `${BASE_URL}/images/projects/gradio-portfolio-chatbot.png`,
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/portfolio_chatbot",
        description:
            "Built an interactive chatbot using Gradio in Python for showcasing my portfolio. Integrated custom tools and a rate-limited third-party API built with Express.js to handle user requests efficiently and securely.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
        ],
        githubRepo: "https://github.com/ken-027/gradio-portfolio-chatbot",
        type: "personal",
        aiPowered: true,
    },
    rustify: {
        category: "fullstack",
        title: "Rustify",
        thumbnailLink: `${BASE_URL}/images/projects/rustify.png`,
        liveDemo: "https://rustify.ksoftdev.site",
        description:
            "A simple conversion tool for converting js/ts code to rust code using Anthropic AI.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("typescript", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("tailwind css", frontend),
            getSkillByName("node js", backend),
            getSkillByName("next js", backend),
            getSkillByName("anthropic", ai_integration),
        ],
        githubRepo: "https://github.com/ken-027/rustify",
        type: "personal",
        aiPowered: true,
    },
    job_posting: {
        category: "fullstack",
        title: "Job Posting",
        thumbnailLink: `${BASE_URL}/images/projects/job-posting-thumbnail.png`,
        description:
            "A simple job posting site that allows users to create, manage, and track job listings.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("php", backend),
            getSkillByName("laravel", backend),
            getSkillByName("maria db", database),
        ],
        githubRepo: "https://github.com/ken-027/laravelfindeasyjob",
        type: "personal",
    },
    invoice_crud: {
        category: "fullstack",
        title: "Invoice CRUD",
        thumbnailLink: `${BASE_URL}/images/projects/invoice-crud-thumbnail.png`,
        description:
            "A simple CRUD application for efficiently managing and processing invoice.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("php", backend),
            getSkillByName("laravel", backend),
            getSkillByName("mysql", database),
        ],
        githubRepo: "https://github.com/ken-027/laravelinvoicecrud",
        type: "personal",
    },
    wiwo: {
        category: "frontend",
        title: "Wilson Works Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/wilson-works-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("css", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("tailwind css", frontend),
        ],
        liveDemo: "https://wiwo.ksoftdev.site",
        type: "freelance",
    },
    libre: {
        category: "frontend",
        title: "Libre Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/libre-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("sass", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("react js", frontend),
        ],
        liveDemo: "https://libre.ksoftdev.site",
        type: "freelance",
    },
    educat: {
        category: "frontend",
        title: "Educat Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/educat-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("sass", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("react js", frontend),
        ],
        githubRepo: "https://github.com/ken-027/educat-landing",
        liveDemo: "https://educat.ksoftdev.site",
        type: "personal",
    },
    agency_match: {
        category: "frontend",
        title: "AgencyMatch Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/agency-match-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("sass", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("react js", frontend),
        ],
        githubRepo: "https://github.com/ken-027/agency-match",
        liveDemo: "https://agency-match.ksoftdev.site",
        type: "personal",
    },
    trabook: {
        category: "frontend",
        title: "TraBook Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/trabook-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("sass", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("react js", frontend),
        ],
        githubRepo: "https://github.com/ken-027/trabook",
        liveDemo: "https://trabook.ksoftdev.site",
        type: "personal",
    },
    e_commerce: {
        category: "fullstack",
        title: "Buyback E-commerce Website",
        description:
            "An e-commerce site that allows customers to sell their old devices, with the option to check if their device is listed on the platform before selling.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("php", backend),
        ],
        type: "freelance",
    },
    mta: {
        category: "fullstack",
        title: "DSWD Minor Travelling Abroad",
        description:
            "A government website for the Department of Social Welfare and Development (DSWD) that facilitates booking and approval of travel for minors.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("php", backend),
            getSkillByName("codeigniter", backend),
            getSkillByName("maria db", database),
        ],
        type: "company",
    },
    llda: {
        category: "fullstack",
        title: "Laguna Lake Development Authority",
        description:
            "A government website for the Laguna Lake Development Authority (LLDA) that handles the approval process and certification for activities in the Laguna region.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("bootstrap", frontend),
            getSkillByName("php", backend),
            getSkillByName("codeigniter", backend),
            getSkillByName("maria db", database),
        ],
        type: "company",
    },
    csrm: {
        category: "frontend",
        title: "Customer Service Record Management System (UI)",
        description:
            "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("css", frontend),
            getSkillByName("jquery", frontend),
        ],
        type: "company",
    },
    csrm_api: {
        category: "backend",
        title: "Customer Service Record Management System (API)",
        description:
            "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
        technologies: [
            getSkillByName("php", backend),
            getSkillByName("mysql", database),
        ],
        type: "company",
    },
    ema: {
        category: "fullstack",
        title: "EMA V2 E-commerce Website",
        description:
            "An e-commerce platform for managing merchant products, enabling seamless product listing, updates, and inventory tracking.",
        technologies: [
            getSkillByName("html", frontend),
            getSkillByName("javascript", frontend),
            getSkillByName("css", frontend),
            getSkillByName("jquery", frontend),
            getSkillByName("php", backend),
            getSkillByName("mysql", database),
        ],
        type: "company",
    },
    // recipe_api: {
    //     category: "backend",
    //     title: "Recipe API",
    //     thumbnailLink: `${BASE_URL}/images/projects/recipe-api.png`,
    //     description:
    //         "A simple CRUD application for managing recipes, instructions, and ingredients.",
    //     technologies: [
    //         getSkillByName("php", backend),
    //         getSkillByName("laravel", backend),
    //         getSkillByName("mysql", database),
    //     ],
    //     githubRepo: "https://github.com/ken-027/laravel-recipe-api",
    //     type: "personal",
    // },
    // order_api: {
    //     category: "backend",
    //     title: "Order API",
    //     thumbnailLink: `${BASE_URL}/images/projects/order-api.png`,
    //     description: "A simple authentication and CRUD application for orders.",
    //     technologies: [
    //         getSkillByName("php", backend),
    //         getSkillByName("laravel", backend),
    //         getSkillByName("mysql", database),
    //     ],
    //     githubRepo: "https://github.com/ken-027/laravel-orderapi",
    //     type: "personal",
    // },
    anime_dialog_translator: {
        category: "fullstack",
        title: "Anime Audio Translator",
        thumbnailLink: `${BASE_URL}/images/projects/anime-audio-translator.png`,
        description:
            "Translate Japanese anime audio into English and Filipino (Tagalog) using Gradio, OpenAI and HuggingFace open-source models running on google colab.",
        technologies: [getSkillByName("python", backend)],
        githubRepo: "https://github.com/ken-027/anime-dialog-translator",
        type: "personal",
        aiPowered: true,
    },
    py_to_any: {
        category: "fullstack",
        title: "Python Code to Any",
        thumbnailLink: `${BASE_URL}/images/projects/code_conversion.png`,
        description:
            "A simple code conversion tool that converts Python code to any programming frontend like cpp, javascript and php using openai and anthropic",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
        ],
        githubRepo: "https://github.com/ken-027/py-to-any",
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/py-code-converter",
        type: "personal",
        aiPowered: true,
    },
};

export default PROJECTS;
