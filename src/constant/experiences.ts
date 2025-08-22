import { BASE_URL } from "@/config/env";
import PROJECTS from "./projects";
import { Experience } from "@/types";

const EXPERIENCES: Experience[] = [
    {
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        location: "Remote",
        startDate: new Date("2025-08-01"),
        endDate: "Present",
        descriptions: [
            "Assisting clients in enhancing and maintaining existing web applications",
            "Implementing new features and optimizing system performance based on client requirements",
        ],
        companyLogo: "",
        projects: [],
    },
    {
        title: "Mid-Software Developer",
        company: "National Confederation of Cooperatives",
        location: "Remote",
        startDate: new Date("2023-07-25"),
        endDate: new Date("2025-03-25"),
        descriptions: [
            "Led frontend development of EkoopBanker Plus CASA V3, delivering a real-time user experience for cooperative transactions and mentoring a junior developer",
            "Contributed to backend APIs enabling secure transactions and accurate financial data across branches",
            "Developed Fixed Asset module for Accounting V2, supporting full asset lifecycle tracking and automated reports",
            "Integrated regulatory reporting tools, ensuring compliance and clear financial data visualization",
            "Maintained legacy production systems, resolving data issues to ensure stability and performance",
        ],
        companyLogo: `${BASE_URL}/images/companies/natcco-logo.svg`,
        projects: [PROJECTS.casa, PROJECTS.casa_api, PROJECTS.fixed_asset],
        companyLink: "https://natcco.coop",
    },
    {
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        location: "Remote",
        startDate: new Date("2022-01-05"),
        endDate: new Date("2022-05-20"),
        descriptions: [
            "Built a responsive e-commerce dashboard with real-time inventory and product management",
            "Enhanced online store platforms by improving SEO and adding multilingual support for global reach",
            "Developed animated landing pages with modern UX, boosting user engagement and brand visibility",
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
            "Collaborated on government platforms, including a booking and approval system for minors traveling abroad with streamlined workflows and document management",
            "Maintained certification systems, ensuring regulatory compliance and system stability by implementing structured approval workflows and resolving performance issues through collaborative debugging and optimization",
            "Conducted code reviews and upheld quality standards, reducing technical debt and enhancing maintainability",
        ],
        companyLogo: `${BASE_URL}/images/companies/cloud-panda-ph-logo.svg`,
        projects: [PROJECTS.mta, PROJECTS.llda],
        companyLink: "https://www.cloudpanda.ph",
    },
    {
        title: "Jr. Web Developer",
        company: "International Payment Processing",
        location: "Puerto Princesa City, Philippines",
        startDate: new Date("2018-05-02"),
        endDate: new Date("2019-04-17"),
        descriptions: [
            "Built a Customer Service Record Management internal website streamlining interaction tracking and improving support efficiency",
            "Enhanced an e-commerce platform for merchants, improving usability and scalability for product and inventory management",
        ],
        companyLogo: `${BASE_URL}/images/companies/ipp-logo.svg`,
        projects: [PROJECTS.csrm, PROJECTS.csrm_api, PROJECTS.ema],
        companyLink: "https://intl-payments.com",
    },
];

export default EXPERIENCES;
