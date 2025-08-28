import { BASE_URL } from "@/config/env";
import SKILLS from "./skills";
import { ItemSkill, Project, ProjectName } from "@/types";

const frontend = SKILLS[0].items;
const backend = SKILLS[1].items;
const database = SKILLS[2].items;
const ai_integration = SKILLS[5].items;
const tools = SKILLS[4].items;
const dev_ops = SKILLS[3].items;

const getSkillByName = (name: string, skills: ItemSkill[]) => {
    const skill = skills.find(
        ({ name: _name }) => name.toLowerCase() === _name.toLowerCase(),
    ) as ItemSkill;

    if (!skill) throw new Error(`Skill ${name} not found!`);

    return skill;
};

const PROJECTS: Record<ProjectName, Project> = {
    uptime_monitoring: {
        category: "fullstack",
        title: "Uptime Monitoring SaaS",
        thumbnailLink: `${BASE_URL}/images/projects/uptime-monitoring-thumbnail.png`,
        description:
            "A full-featured monitoring platform that tracks website and API uptime, with real-time alerts, AI diagnostics, and scheduled check intervals.",
        technologies: [
            getSkillByName("tailwind css", frontend),
            getSkillByName("typescript", frontend),
            getSkillByName("react js", frontend),
            getSkillByName("node js", backend),
            getSkillByName("next js", backend),
            getSkillByName("postgresql", database),
            getSkillByName("drizzle", tools),
            getSkillByName("better auth", tools),
            getSkillByName("mcp", ai_integration),
            getSkillByName("docker", dev_ops),
        ],
        liveDemo: "https://uptime-monitoring.ksoftdev.site",
        githubRepo: "https://github.com/ken-027/uptime-monitoring",
        type: "personal",
        projectRole: "individual contributor",
        aiPowered: true,
        dockerLink: "https://hub.docker.com/r/ken027/uptime-monitoring",
    },
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
        projectRole: "pair programmer",
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
        projectRole: "team collaborator",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
            getSkillByName("jest", tools),
            getSkillByName("vector db", database),
            getSkillByName("docker", dev_ops),
        ],
        githubRepo: "https://github.com/ken-027/portfolio-api",
        dockerLink: "https://hub.docker.com/r/ken027/portfolio-api",
        type: "personal",
        aiPowered: true,
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
    },
    agentic_api: {
        category: "backend",
        title: "Autonomous Agents API",
        thumbnailLink: `${BASE_URL}/images/projects/autonomous-agents-api-thumbnail.png`,
        description:
            "API platform for deploying and orchestrating autonomous AI agents with LangGraph workflows, built with TypeScript and Express.js.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("jest", tools),
            getSkillByName("openai", ai_integration),
            getSkillByName("langgraph", ai_integration),
            getSkillByName("docker", dev_ops),
        ],
        liveDemo: "https://agentic-api.ksoftdev.site/api-docs",
        githubRepo: "https://github.com/ken-027/autonomous-agents-api",
        aiPowered: true,
        type: "personal",
        projectRole: "individual contributor",
        dockerLink: "https://hub.docker.com/r/ken027/agents-api",
    },
    ratelimiter_api: {
        category: "backend",
        title: "Ratelimiter API",
        thumbnailLink: `${BASE_URL}/images/projects/ratelimiter-thumbnail.png`,
        description:
            "A comprehensive rate limiting API that features multiple algorithms including Fixed Window, Sliding Log, Token Bucket, and Leaky Bucket.",
        technologies: [
            getSkillByName("typescript", frontend),
            getSkillByName("node js", backend),
            getSkillByName("express js", backend),
            getSkillByName("docker", dev_ops),
            getSkillByName("redis", database),
            getSkillByName("jest", tools),
        ],
        liveDemo: "https://ratelimiter-api.ksoftdev.site/api-docs",
        githubRepo: "https://github.com/ken-027/ratelimiter-api",
        type: "personal",
        projectRole: "individual contributor",
        dockerLink: "https://hub.docker.com/r/ken027/ratelimiter-api",
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
        projectRole: "individual contributor",
    },
    gradio_apps: {
        category: "fullstack",
        title: "Gradio AI Apps",
        aiPowered: true,
        projectRole: "individual contributor",
        thumbnailLink: `${BASE_URL}/images/projects/gradio-apps-thumbnail.png`,
        liveDemo: "https://huggingface.co/kenneth-andales/spaces",
        description:
            "A collection of applications including Resume Match, Audio Translator, Deep Research, Chatbot, and Code Converter.",
        type: "personal",
        technologies: [
            getSkillByName("python", backend),
            getSkillByName("gradio", tools),
            getSkillByName("openai", ai_integration),
            getSkillByName("anthropic", ai_integration),
            getSkillByName("crewai", ai_integration),
        ],
        githubRepo:
            "https://github.com/search?q=repo:ken-027%2Fresume-match-gradio+repo:ken-027%2Fresume-match-ai+repo:ken-027%2Fpy-to-any+repo:ken-027%2Fanime-dialog-translator+repo:ken-027%2Fai-deep-research+repo:ken-027%2Fgradio-chatbot&type=repositories&ref=advsearch",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "individual contributor",
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
        projectRole: "team collaborator",
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
        projectRole: "team collaborator",
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
        projectRole: "pair programmer",
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
        projectRole: "individual contributor",
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
        projectRole: "team collaborator",
    },
};

export default PROJECTS;
