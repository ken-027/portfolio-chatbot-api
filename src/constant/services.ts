import { BASE_URL } from "@/config/env";
import { Service } from "@/types";

const SERVICES: Service[] = [
    {
        title: "Custom Website Development",
        description:
            "Business websites and systems tailored to specific needs using modern technologies.",
        image: `${BASE_URL}/images/services/website.svg`,
    },
    {
        title: "API Development & Integration",
        description:
            "RESTful API creation using Node.js or PHP, plus integration with any third-party API.",
        image: `${BASE_URL}/images/services/development.svg`,
    },
    {
        title: "Website Maintenance & Upgrades",
        description:
            "Ongoing support, bug fixes, and feature enhancements for existing sites and systems—whether built from scratch or inherited.",
        image: `${BASE_URL}/images/services/maintenance.svg`,
    },
    {
        title: "Single Page Applications (SPA)",
        description:
            "Develop  interactive apps using React or Next.js with seamless user experience and client-side routing",
        image: `${BASE_URL}/images/services/spa.svg`,
    },
    {
        title: "Bug Fixing",
        description:
            "Identify and fix slow-loading pages, broken features, or any issues across web applications.",
        image: `${BASE_URL}/images/services/bug-fixing.svg`,
    },
    {
        title: "Cross-Team Feature Implementation",
        description:
            "Collaborate across frontend/backend teams to ship features end-to-end—clear Git workflows, commits, and documentation included.",
        image: `${BASE_URL}/images/services/team.svg`,
    },
    {
        title: "AI Integration",
        description:
            "Integrate AI tools like chatbots, recommendation systems, and data insights into your app for smarter functionality.",
        image: `${BASE_URL}/images/services/ai-integration.svg`,
    },
];

export default SERVICES;
