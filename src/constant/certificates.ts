import { BASE_URL } from "@/config/env";
import { Certificate } from "@/types";

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
            "https://www.udemy.com/share/10dgIV3@3PRRW6hZhNZus-WqMJ7klaYzQ9JrqFTfSFMdJ8Lcsuf7x7MZZLXElzSgY4pgXSsuJQ==",
        name: "AI Agents & Autonomous Apps with LangGraph & LangChain",
        platform: "Udemy",
        dateCompleted: "ongoing",
        description:
            "Learn how to create powerful AI agents and design multi-agent autonomous workflows using &lt;strong&gt;LangGraph&lt;/strong&gt; and &lt;strong&gt;LangChain&lt;/strong&gt;. Build real-world applications that automate complex tasks and enable intelligent decision-making with cutting-edge &lt;strong&gt;AI frameworks&lt;/strong&gt;.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
    },
    {
        courseLink:
            "https://www.udemy.com/share/104Tz63@7P1To3EQcAXMXxYDRpGYDQbhoUKPzgjok3XU6cJRKaSrO5RGltZ_dGX2tAKtAv5UCw==",
        name: "DevOps",
        platform: "Udemy",
        dateCompleted: new Date("2025-05-31"),
        description:
            "Comprehensive training focused on core DevOps tools and practices. Gained hands-on experience with &lt;strong&gt;AWS&lt;/strong&gt;, &lt;strong&gt;Linux&lt;/strong&gt; system administration, &lt;strong&gt;shell scripting&lt;/strong&gt;, &lt;strong&gt;Jenkins&lt;/strong&gt;, &lt;strong&gt;Ansible&lt;/strong&gt;, GitOps workflows, &lt;strong&gt;Docker&lt;/strong&gt;, &lt;strong&gt;Kubernetes&lt;/strong&gt;, and &lt;strong&gt;Terraform&lt;/strong&gt;. Built a strong foundation for CI/CD, infrastructure automation, and cloud-native development.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
        certificateLink:
            "https://www.udemy.com/certificate/UC-0f82967f-c0f2-4abf-a24b-7486388a0d21/",
        certificateImage: `${BASE_URL}/images/certificates/devops-certificate.jpg`,
    },
    {
        courseLink:
            "https://www.udemy.com/share/104coM3@xjybR_4oh_OZZY-lNCA-qu-ewROtCKizj60DXcb9NcOc8-lswhFP4w2FGQeh_5NEjw==",
        name: "Next JS 15",
        platform: "Udemy",
        dateCompleted: "ongoing",
        description:
            "Completed a comprehensive Next.js 15 course covering full-stack React development using the App Router. Gained hands-on experience with React Server Components, data fetching, file-based routing, server actions, and authentication. Explored both App Router and Pages Router approaches, and built real-world projects to reinforce learning.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
    },
    {
        courseLink:
            "https://www.udemy.com/share/1013ja3@oS043JFY0UNL77HWc8_rGbaD2kvGKWfUbI-lhoJMmag0RyTNm8TvvgtboAGX66L3kQ==",
        name: "Data Structures + Algorithms",
        platform: "Udemy",
        dateCompleted: "ongoing",
        description:
            "This comprehensive program teaches essential algorithms, data structures, and problem-solving techniques used in professional software development, covering core concepts including sorting algorithms, trees, graphs, and hash tables with emphasis on practical implementation and performance optimization.",
        platformLogo: `${BASE_URL}/images/certificates/udemy-logo.png`,
    },
];

export default CERTIFICATES;
