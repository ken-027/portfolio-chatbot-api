import { BASE_URL } from "@/config/env";
import { WhatIDo } from "@/types";

const WHAT_I_DO: WhatIDo[] = [
    {
        title: "Full-Stack Development",
        description: [
            "Build custom websites and business systems using React, Node.js, and PHP",
            "Develop interactive Single Page Applications with seamless user experiences",
            "Create responsive, modern web interfaces with client-side routing",
        ],
        image: `${BASE_URL}/images/services/website.svg`,
    },
    {
        title: "API Development & Integration",
        description: [
            "Design and build RESTful APIs using Node.js and PHP",
            "Integrate third-party APIs and external services into existing applications",
            "Implement secure data exchange, authorization and authentication systems",
        ],
        image: `${BASE_URL}/images/services/development.svg`,
    },
    {
        title: "Problem Solving & Optimization",
        description: [
            "Debug and fix performance issues in web applications",
            "Identify and resolve broken features across complex systems",
            "Optimize slow-loading pages and improve overall application performance",
        ],
        image: `${BASE_URL}/images/services/bug-fixing.svg`,
    },
    {
        title: "AI & Modern Technologies",
        description: [
            "Integrate AI tools like chatbots and recommendation systems",
            "Build agentic AI systems and autonomous agents for complex tasks",
            "Stay current with emerging technologies and best practices",
        ],
        image: `${BASE_URL}/images/services/ai-integration.svg`,
    },
    {
        title: "Team Collaboration",
        description: [
            "Work effectively across frontend and backend teams",
            "Follow clear Git workflows with comprehensive documentation",
            "Ship features end-to-end in collaborative environments",
        ],
        image: `${BASE_URL}/images/services/team.svg`,
    },
    {
        title: "Maintenance & Support",
        description: [
            "Provide ongoing support and feature enhancements for existing systems",
            "Handle inherited codebases and legacy system improvements",
            "Implement upgrades and modernization initiatives",
        ],
        image: `${BASE_URL}/images/services/maintenance.svg`,
    },
];

export default WHAT_I_DO;
