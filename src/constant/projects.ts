import { BASE_URL } from "@/config/env";
import SKILLS from "./skills";

export interface Technology {
    name: string;
}

const language = SKILLS[0];
const frontend = SKILLS[1];
const backend = SKILLS[2];
const fullstack = SKILLS[3];
const tools = SKILLS[4];

export type Category = "fullstack" | "frontend" | "backend" | "AI-powered";

export interface Project {
    thumbnailLink?: string;
    title: string;
    description: string;
    technologies: Technology[];
    githubRepo?: string;
    liveDemo?: string;
    screenshot?: string;
    category: Category;
}

export const CATEGORIES: Category[] = [
    "frontend",
    "backend",
    "fullstack",
    "AI-powered",
];

type PROJECT_NAME =
    | "casa"
    | "casa_api"
    | "fixed_asset"
    | "portfolio"
    | "dashboard"
    | "job_posting"
    | "invoice_crud"
    | "wiwo"
    | "libre"
    | "educat"
    | "agency_match"
    | "trabook"
    | "e_commerce"
    | "mta"
    | "llda"
    | "csrm"
    | "csrm_api"
    | "ema"
    | "recipe_api"
    | "order_api"
    | "rustify"
    | "anime_dialog_translator"
    | "py_to_any";

const PROJECTS: Record<PROJECT_NAME, Project> = {
    casa: {
        category: "frontend",
        title: "EkoopBanker Plus CASA V3 (UI)",
        thumbnailLink: `${BASE_URL}/images/projects/casa-thumbnail.png`,
        description:
            "A core banking system that handles banking transactions and generates financial reports.",
        technologies: [
            language.items[0],
            language.items[2],
            frontend.items[0],
            frontend.items[3],
            frontend.items[2],
            fullstack.items[0],
            tools.items[5],
            tools.items[6],
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf`,
    },
    casa_api: {
        category: "backend",
        title: "EkoopBanker Plus CASA V3 (API)",
        thumbnailLink: `${BASE_URL}/images/projects/casa-thumbnail.png`,
        description:
            "A core banking system that handles banking transactions and generates financial reports.",
        technologies: [
            language.items[2],
            backend.items[0],
            backend.items[1],
            backend.items[2],
            tools.items[1],
            tools.items[6],
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf`,
    },
    fixed_asset: {
        category: "fullstack",
        title: "EkoopBanker Plus Accounting V2",
        thumbnailLink: `${BASE_URL}/images/projects/accounting-thumbnail.png`,
        description:
            "An accounting system that manages fixed asset transactions and generates detailed reports for asset management.",
        technologies: [
            language.items[5],
            backend.items[2],
            fullstack.items[3],
            tools.items[1],
        ],
        screenshot: `${BASE_URL}/pdf/EKOOPBANKER_PLUS_ACCOUNTING_V2.pdf`,
    },
    portfolio: {
        category: "frontend",
        title: "Portfolio Site",
        thumbnailLink: `${BASE_URL}/images/projects/portfolio-site-thumbnail.png`,
        description:
            "A simple portfolio website that showcases my experiences, projects, and services",
        technologies: [
            language.items[2],
            frontend.items[0],
            frontend.items[2],
            frontend.items[3],
        ],
        githubRepo: "https://github.com/ken-027/portfolio",
        liveDemo: "https://kenneth-andales.github.io",
    },
    dashboard: {
        category: "fullstack",
        title: "E-commerce Dashboard",
        thumbnailLink: `${BASE_URL}/images/projects/ecommerce-dashboard-thumbnail.png`,
        description:
            "An e-commerce dashboard for managing inventory items, enabling seamless tracking, updating, and organization of products.",
        technologies: [
            language.items[0],
            language.items[3],
            language.items[4],
            frontend.items[0],
            frontend.items[4],
            frontend.items[2],
            backend.items[4],
            fullstack.items[1],
        ],
        githubRepo: "https://github.com/ken-027/laravel-ecommerce-admin",
    },
    rustify: {
        category: "AI-powered",
        title: "Rustify",
        thumbnailLink: `${BASE_URL}/images/projects/rustify.png`,
        liveDemo: "https://rustify-sigma.vercel.app",
        description:
            "A simple conversion tool for converting js/ts code to rust code using Anthropic AI.",
        technologies: [
            language.items[0],
            language.items[2],
            frontend.items[3],
            frontend.items[2],
            backend.items[0],
            fullstack.items[0],
        ],
        githubRepo: "https://github.com/ken-027/rustify",
    },
    job_posting: {
        category: "fullstack",
        title: "Job Posting",
        thumbnailLink: `${BASE_URL}/images/projects/job-posting-thumbnail.png`,
        description:
            "A simple job posting site that allows users to create, manage, and track job listings.",
        technologies: [
            language.items[0],
            language.items[3],
            language.items[4],
            frontend.items[0],
            frontend.items[4],
            frontend.items[2],
            backend.items[4],
            fullstack.items[1],
        ],
        githubRepo: "https://github.com/ken-027/laravelfindeasyjob",
    },
    invoice_crud: {
        category: "fullstack",
        title: "Invoice CRUD",
        thumbnailLink: `${BASE_URL}/images/projects/invoice-crud-thumbnail.png`,
        description:
            "A simple CRUD application for efficiently managing and processing invoice.",
        technologies: [
            language.items[0],
            language.items[3],
            language.items[4],
            frontend.items[0],
            frontend.items[4],
            frontend.items[2],
            backend.items[3],
            fullstack.items[1],
        ],
        githubRepo: "https://github.com/ken-027/laravelinvoicecrud",
    },
    wiwo: {
        category: "frontend",
        title: "Wilson Works Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/wilson-works-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            language.items[0],
            language.items[3],
            frontend.items[2],
            frontend.items[3],
        ],
        githubRepo: "https://github.com/ken-027/wiwosite",
        liveDemo: "https://kenneth-andales.github.io/wilson-works/",
    },
    libre: {
        category: "frontend",
        title: "Libre Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/libre-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            language.items[0],
            language.items[1],
            language.items[3],
            frontend.items[2],
            frontend.items[3],
        ],
        githubRepo: "https://github.com/ken-027/libre-site",
        liveDemo: "https://kenneth-andales.github.io/libre/",
    },
    educat: {
        category: "frontend",
        title: "Educat Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/educat-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            language.items[0],
            language.items[1],
            language.items[3],
            frontend.items[2],
        ],
        githubRepo: "https://github.com/ken-027/educat-landing",
        liveDemo: "https://kenneth-andales.github.io/educat/",
    },
    agency_match: {
        category: "frontend",
        title: "AgencyMatch Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/agency-match-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            language.items[0],
            language.items[1],
            language.items[3],
            frontend.items[2],
        ],
        githubRepo: "https://github.com/ken-027/agency-match",
        liveDemo: "https://kenneth-andales.github.io/agency-match/",
    },
    trabook: {
        category: "frontend",
        title: "TraBook Landing Page",
        thumbnailLink: `${BASE_URL}/images/projects/trabook-thumbnail.png`,
        description:
            "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
        technologies: [
            language.items[0],
            language.items[1],
            language.items[3],
            frontend.items[2],
        ],
        githubRepo: "https://github.com/ken-027/trabook",
        liveDemo: "https://kenneth-andales.github.io/trabook/",
    },
    e_commerce: {
        category: "frontend",
        title: "Buyback E-commerce Website",
        description:
            "An e-commerce site that allows customers to sell their old devices, with the option to check if their device is listed on the platform before selling.",
        technologies: [language.items[0], language.items[4], frontend.items[4]],
    },
    mta: {
        category: "fullstack",
        title: "DSWD Minor Travelling Abroad",
        description:
            "A government website for the Department of Social Welfare and Development (DSWD) that facilitates booking and approval of travel for minors.",
        technologies: [
            language.items[0],
            language.items[3],
            language.items[4],
            frontend.items[0],
            frontend.items[1],
            frontend.items[4],
            backend.items[4],
            fullstack.items[2],
        ],
    },
    llda: {
        category: "fullstack",
        title: "Laguna Lake Development Authority",
        description:
            "A government website for the Laguna Lake Development Authority (LLDA) that handles the approval process and certification for activities in the Laguna region.",
        technologies: [
            language.items[0],
            language.items[3],
            language.items[4],
            frontend.items[0],
            frontend.items[1],
            frontend.items[4],
            backend.items[4],
            fullstack.items[2],
        ],
    },
    csrm: {
        category: "frontend",
        title: "Customer Service Record Management System (UI)",
        description:
            "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
        technologies: [
            language.items[0],
            language.items[3],
            frontend.items[0],
            frontend.items[1],
        ],
    },
    csrm_api: {
        category: "backend",
        title: "Customer Service Record Management System (API)",
        description:
            "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
        technologies: [language.items[4], backend.items[3]],
    },
    ema: {
        category: "fullstack",
        title: "EMA V2 E-commerce Website",
        description:
            "An e-commerce platform for managing merchant products, enabling seamless product listing, updates, and inventory tracking.",
        technologies: [
            language.items[0],
            language.items[3],
            frontend.items[0],
            frontend.items[1],
            language.items[4],
            backend.items[3],
        ],
    },
    recipe_api: {
        category: "backend",
        title: "Recipe API",
        thumbnailLink: `${BASE_URL}/images/projects/recipe-api.png`,
        description:
            "A simple CRUD application for managing recipes, instructions, and ingredients.",
        technologies: [language.items[4], backend.items[3], fullstack.items[1]],
        githubRepo: "https://github.com/ken-027/laravel-recipe-api",
    },
    order_api: {
        category: "backend",
        title: "Order API",
        thumbnailLink: `${BASE_URL}/images/projects/order-api.png`,
        description: "A simple authentication and CRUD application for orders.",
        technologies: [language.items[4], backend.items[3], fullstack.items[1]],
        githubRepo: "https://github.com/ken-027/laravel-orderapi",
    },
    anime_dialog_translator: {
        category: "AI-powered",
        title: "Anime Audio Translator",
        thumbnailLink: `${BASE_URL}/images/projects/anime-audio-translator.png`,
        description:
            "Translate Japanese anime audio into English and Filipino (Tagalog) using Gradio, OpenAI and HuggingFace open-source models running on google colab.",
        technologies: [language.items[6]],
        githubRepo: "https://github.com/ken-027/anime-dialog-translator",
    },
    py_to_any: {
        category: "AI-powered",
        title: "Python Code to Any",
        thumbnailLink: `${BASE_URL}/images/projects/code_conversion.png`,
        description:
            "A simple code conversion tool that converts Python code to any programming language like cpp, javascript and php using openai and anthropic",
        technologies: [language.items[6]],
        githubRepo: "https://github.com/ken-027/py-to-any",
    },
};

export default PROJECTS;
