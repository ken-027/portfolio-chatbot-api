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
            "Modern UI for a core banking system, enabling seamless transactions and financial reporting.",
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
            "Robust backend API powering banking operations and real-time financial data.",
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
            "Accounting system for managing fixed assets and generating detailed reports.",
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
            "Personal website showcasing my skills, projects, and services in a clean layout.",
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
            "Portfolio site with a nostalgic terminal interface to highlight my work and skills.",
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
            "API with AI-powered chatbot using RAG and MongoDB Vector Search for smart responses.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("docker", dev_ops),
            getSkillByName("jest", tools),
            getSkillByName("vector db", database),
        ],
        githubRepo: "https://github.com/ken-027/portfolio-chatbot-api",
        dockerLink: "https://hub.docker.com/r/ken027/portfolio-api",
        type: "personal",
        aiPowered: true,
    },
    ticketing_microservices: {
        category: "backend",
        title: "Nodejs Ticketing Microservices",
        thumbnailLink: `${BASE_URL}/images/projects/nodejs-ticketing-microservices.png`,
        description:
            "Microservices-based ticketing system with event-driven architecture and Kubernetes.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("mongodb", database),
            getSkillByName("jest", tools),
            getSkillByName("npm", tools),
            getSkillByName("docker", dev_ops),
            getSkillByName("kubernetes", dev_ops),
        ],
        githubRepo: "https://github.com/ken-027/ticketing-microservices",
        dockerLink: "https://hub.docker.com/u/ken027?page=1&search=ticketing-",
        type: "personal",
    },
    dashboard: {
        category: "fullstack",
        title: "E-commerce Dashboard",
        thumbnailLink: `${BASE_URL}/images/projects/ecommerce-dashboard-thumbnail.png`,
        description:
            "Dashboard for real-time inventory management and product tracking in e-commerce.",
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
    resume_match_gradio: {
        category: "fullstack",
        title: "Resume Match Gradio",
        thumbnailLink: `${BASE_URL}/images/projects/resume-match-gradio.png`,
        description:
            "AI app that analyzes resumes, finds jobs, and suggests improvements using CrewAI and Gradio.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("gradio", tools),
        ],
        githubRepo: "https://github.com/ken-027/resume-match-gradio",
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/resume-match-ai",
        type: "personal",
        aiPowered: true,
    },
    resume_match_ai: {
        category: "backend",
        title: "Resume Match App",
        thumbnailLink: `${BASE_URL}/images/projects/resume-match-ai.png`,
        description:
            "Multi-agent AI app for resume analysis, job matching, and personalized feedback.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("anthropic", ai_integration),
            getSkillByName("crewai", ai_integration),
        ],
        githubRepo: "https://github.com/ken-027/resume-match-ai",
        liveDemo:
            "https://resume-match-ai-599528b1-cf57-446a-8922-4b5-ec219a74.crewai.com/inputs",
        type: "personal",
        aiPowered: true,
    },
    ai_deep_research: {
        category: "fullstack",
        title: "AI Deep Research",
        thumbnailLink: `${BASE_URL}/images/projects/ai-deep-research.png`,
        description:
            "Generates in-depth AI-powered reports and delivers them via email with usage control.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("gradio", tools),
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
            "AI-powered portfolio chatbot built with Gradio, featuring interactive conversations and secure user requests via a custom third-party API.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("gradio", tools),
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
            "Converts JavaScript/TypeScript code to Rust using Anthropic AI for fast prototyping.",
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
            "Simple platform for creating, managing, and tracking job listings online.",
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
            "CRUD app for efficient invoice management and processing.",
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
            "Responsive landing page with smooth animations for an engaging user experience.",
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
            "Clean, responsive landing page with subtle animations for modern web presence.",
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
            "Modern, responsive landing page designed for educational platforms.",
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
            "Responsive landing page with smooth animations for agency branding.",
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
            "Attractive, responsive landing page for travel-related services.",
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
            "E-commerce platform for customers to sell old devices and check listings easily.",
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
            "Government site for booking and approving minor travel with user-friendly workflows.",
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
            "Certification and approval platform for activities in the Laguna region.",
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
            "UI for managing customer interactions and support requests efficiently.",
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
            "Backend API for handling customer service records and support data.",
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
            "E-commerce platform for merchants to manage products and inventory with ease.",
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
            "Transcribes and translates anime audio using Gradio, Whisper, and Anthropic Claude.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("anthropic", ai_integration),
            getSkillByName("gradio", tools),
        ],
        githubRepo: "https://github.com/ken-027/anime-dialog-translator",
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/anime-audio-translator",
        type: "personal",
        aiPowered: true,
    },
    py_to_any: {
        category: "fullstack",
        title: "Python Code to Any",
        thumbnailLink: `${BASE_URL}/images/projects/code_conversion.png`,
        description:
            "Converts Python code to other languages using OpenAI and Anthropic for fast prototyping.",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("openai", ai_integration),
            getSkillByName("gradio", tools),
        ],
        githubRepo: "https://github.com/ken-027/py-to-any",
        liveDemo:
            "https://huggingface.co/spaces/kenneth-andales/py-code-converter",
        type: "personal",
        aiPowered: true,
    },
};

export default PROJECTS;
