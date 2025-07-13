import { BASE_URL } from "@/config/env";
import PROJECTS from "./projects";
import { Experience } from "@/types";

const EXPERIENCES: Experience[] = [
    {
        title: "Mid-Software Developer",
        company: "National Confederation of Cooperatives",
        location: "WFH",
        startDate: new Date("2023-07-25"),
        endDate: new Date("2025-03-25"),
        descriptions: [
            "Developed frontend of EkoopBanker Plus CASA V3 with React.js, Next.js, TypeScript, and Redux Toolkit with real-time Socket.IO integration for seamless core banking operations.",
            "Contributed to backend API development using Node.js, Express.js, and SQL Server, handling banking transactions and financial data processing.",
            "Independently developed a Fixed Asset module for EkoopBanker Plus Accounting V2 using ASP.NET and C#, delivering complete asset lifecycle management and automated financial reporting.",
            "Implemented Crystal Reports integration for regulatory compliance and detailed financial data visualization, ensuring accurate reporting standards.",
        ],
        companyLogo: `${BASE_URL}/images/companies/natcco-logo.svg`,
        projects: [PROJECTS.casa, PROJECTS.casa_api, PROJECTS.fixed_asset],
        companyLink: "https://natcco.coop",
    },
    {
        title: "Freelance Full-Stack Developer",
        company: "Self-Employed",
        location: "WFH",
        startDate: new Date("2022-01-05"),
        endDate: new Date("2022-05-20"),
        descriptions: [
            "Built comprehensive e-commerce dashboard using Laravel, PHP, and MariaDB with real-time inventory management and product tracking, featuring responsive Bootstrap and jQuery interface.",
            "Maintained and enhanced existing e-commerce platforms by optimizing SEO performance and implementing multilingual support to improve accessibility and global reach.",
            "Developed modern landing pages including Wilson Works (React.js with Tailwind CSS) and Libre (React.js with Sass) with smooth animations and contemporary UX design.",
            "Collaborated with cross-functional teams to transform Figma mockups into fully functional user interfaces with seamless API integrations.",
        ],
        projects: [
            PROJECTS.dashboard,
            PROJECTS.e_commerce,
            PROJECTS.wiwo,
            PROJECTS.libre,
        ],
    },
    {
        title: "Software Developer",
        company: "Cloud Panda PH",
        location: "BGC, Taguig City, Philippines",
        startDate: new Date("2019-10-10"),
        endDate: new Date("2020-03-17"),
        descriptions: [
            "Collaborated on government systems including DSWD Minors Travelling Abroad booking platform using PHP, CodeIgniter, and MariaDB with user-friendly approval workflows and document management.",
            "Maintained Laguna Lake Development Authority certification platform, ensuring system stability and regulatory compliance through structured approval workflows.",
            "Participated in code reviews and maintained quality standards, reducing technical debt and improving system maintainability across government projects.",
            "Resolved critical performance issues through collaborative debugging and system optimization techniques.",
        ],
        companyLogo: `${BASE_URL}/images/companies/cloud-panda-ph-logo.svg`,
        projects: [PROJECTS.mta, PROJECTS.llda],
        // companyLink: "https://www.cloudpanda.ph",
    },
    {
        title: "Jr. Web Developer",
        company: "International Payment Processing",
        location: "Puerto Princesa City, Philippines",
        startDate: new Date("2018-05-02"),
        endDate: new Date("2019-04-17"),
        descriptions: [
            "Developed Customer Service Record Management System using HTML, CSS, jQuery, and JavaScript for efficient customer interaction tracking.",
            "Built backend API using PHP and MySQL for customer service records, support tickets, and comprehensive data management.",
            "Contributed to EMA V2 e-commerce platform development for merchant product and inventory management using full-stack PHP and MySQL architecture.",
        ],
        companyLogo: `${BASE_URL}/images/companies/ipp-logo.svg`,
        projects: [PROJECTS.csrm, PROJECTS.csrm_api, PROJECTS.ema],
        companyLink: "https://intl-payments.com",
    },
];

export default EXPERIENCES;
