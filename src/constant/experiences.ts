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
            "Collaborated as pair programmer on EkoopBanker Plus CASA V3 frontend development using React.js, Next.js, TypeScript, and Redux Toolkit with real-time Socket.IO integration for core banking operations",
            "Contributed as team collaborator to backend API development using Node.js, Express.js, and SQL Server, handling banking transactions and financial data processing",
            "Independently developed the Fixed Asset module for EkoopBanker Plus Accounting V2 using ASP.NET and C#, enabling asset lifecycle tracking and automated financial reporting",
            "Implemented Crystal Reports integration for comprehensive regulatory compliance and detailed financial data visualization",
        ],
        companyLogo: `${BASE_URL}/images/companies/natcco-logo.svg`,
        projects: [PROJECTS.casa, PROJECTS.casa_api, PROJECTS.fixed_asset],
        companyLink: "https://natcco.coop",
    },
    {
        title: "Freelance Web Developer",
        company: "Self-Employed",
        location: "WFH",
        startDate: new Date("2022-01-05"),
        endDate: new Date("2022-05-20"),
        descriptions: [
            "Built comprehensive e-commerce dashboard using Laravel, PHP, and MariaDB for real-time inventory management and product tracking with Bootstrap and jQuery interface",
            "Developed responsive landing pages including Wilson Works (React.js with Tailwind CSS) and Libre (React.js with Sass) featuring smooth animations and modern UX design",
            "Created buyback e-commerce platform allowing customers to sell their devices with integrated pricing algorithms and listing management functionality",
            "Collaborated with designers and backend developers to transform Figma mockups into fully functional user interfaces with API integrations",
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
            "Collaborated on DSWD Minors Travelling Abroad government booking system using PHP, CodeIgniter, and MariaDB with user-friendly approval workflows and document management",
            "Contributed to maintenance of the Laguna Lake Development Authority certification platform, ensuring system stability and compliance using PHP, MariaDB, and structured approval workflows",
            "Participated in team code reviews and maintained code quality standards, reducing technical debt and improving system maintainability across government projects",
            "Resolved critical performance issues through collaborative debugging and system optimization techniques",
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
            "Pair programmed Customer Service Record Management System frontend using HTML, CSS, jQuery, and JavaScript for efficient customer interaction tracking",
            "Independently developed backend API using PHP and MySQL to handle customer service records, support tickets, and data management",
            "Collaborated on EMA V2 e-commerce platform development for merchant product and inventory management using full-stack PHP and MySQL architecture",
            "Implemented Bitbucket version control workflows and provided comprehensive end-user support ensuring smooth application deployment and adoption",
        ],
        companyLogo: `${BASE_URL}/images/companies/ipp-logo.svg`,
        projects: [PROJECTS.csrm, PROJECTS.csrm_api, PROJECTS.ema],
        companyLink: "https://intl-payments.com",
    },
];

export default EXPERIENCES;
