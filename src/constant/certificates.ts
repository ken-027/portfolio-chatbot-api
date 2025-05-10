import { BASE_URL } from "@/config/env";

export interface Certificate {
    name: string;
    platform: string;
    platformLogo?: string;
    dateCompleted: Date | "ongoing";
    description: string;
    certificateLink?: string;
    certificateImage?: string;
    courseLink?: string;
}

const CERTIFICATES: Certificate[] = [
    {
        courseLink:
            "https://www.udemy.com/share/10bOXH3@2gFWjrfB2kscaF1cPlZCL6m_QrMZDFPf_BnNF18QGpwoEMHzRPKaLt3WW15F3eqfFw==",
        name: "LLM Engineering",
        platform: "Udemy",
        dateCompleted: new Date("2025-05-07"),
        description:
            "Mastered core concepts in &lt;strong&gt;Generative AI&lt;strong&gt;, including &lt;strong&gt;Retrieval-Augmented Generation&lt;/strong&gt; (RAG), &lt;strong&gt;Low-Rank Adaptation&lt;/strong&gt; (LoRA), and AI Agents. Gained hands-on experience with prompt engineering, model fine-tuning, and deploying AI-powered solutions.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
        certificateLink:
            "https://www.udemy.com/certificate/UC-e1862b94-8f6f-4ba0-8d05-bf0a2023920a",
        certificateImage: `${BASE_URL}/images/certificates/llm-certificate.jpg`,
    },
    {
        courseLink:
            "https://www.udemy.com/share/10dasB3@X0vZ9F0id4qBL8y2SkOwozeRxp70GD7JWR9cWmjIqnpnf4Efp_JSbUjtitd5gB9yfg==/",
        name: "Agentic AI Engineering",
        platform: "Udemy",
        dateCompleted: "ongoing",
        description:
            "Completed an intensive 30-day program focused on building 8 real-world AI agent applications using cutting-edge tools and frameworks including &lt;strong&gt;OpenAI Agents SDK&lt;/strong&gt;, &lt;strong&gt;CrewAI&lt;/strong&gt;, &lt;strong&gt;LangGraph&lt;/strong&gt;, &lt;strong&gt;AutoGen&lt;/strong&gt;, and &lt;strong&gt;MCP&lt;/strong&gt;. Gained hands-on experience designing, orchestrating, and deploying autonomous agents for complex, real-world tasks.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
    },
    {
        courseLink:
            "https://www.udemy.com/share/104Tz63@7P1To3EQcAXMXxYDRpGYDQbhoUKPzgjok3XU6cJRKaSrO5RGltZ_dGX2tAKtAv5UCw==",
        name: "DevOps",
        platform: "Udemy",
        dateCompleted: "ongoing",
        description:
            "Comprehensive training focused on core DevOps tools and practices. Gained hands-on experience with &lt;strong&gt;AWS&lt;/strong&gt;, &lt;strong&gt;Linux&lt;/strong&gt; system administration, &lt;strong&gt;shell scripting&lt;/strong&gt;, &lt;strong&gt;Jenkins&lt;/strong&gt;, &lt;strong&gt;Ansible&lt;/strong&gt;, GitOps workflows, &lt;strong&gt;Docker&lt;/strong&gt;, &lt;strong&gt;Kubernetes&lt;/strong&gt;, and &lt;strong&gt;Terraform&lt;/strong&gt;. Built a strong foundation for CI/CD, infrastructure automation, and cloud-native development.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
        //   certificateLink: "https://www.udemy.com/",
    },
    // {
    //     courseLink: "https://www.natcco.coop",
    //     name: "Mid-Software Developer",
    //     platform: "NATCCO",
    //     dateCompleted: new Date("2025-03-25"),
    //     description:
    //         "NATCCO (National Confederation of Cooperatives) – the largest federation of cooperatives in the Philippines, providing training, financial services, and digital tools to empower community-based organizations",
    //     platformLogo: `${BASE_URL}/images/companies/natcco-logo.svg`,
    // },
];

export default CERTIFICATES;
