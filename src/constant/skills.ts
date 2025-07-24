import { BASE_URL } from "@/config/env";
import { Skill } from "@/types";

const SKILLS: Skill[] = [
    {
        name: "Frontend",
        items: [
            {
                name: "HTML",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/html.svg`,
            },
            {
                name: "CSS",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/css.svg`,
            },
            {
                name: "Sass",
                level: 5,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/sass.svg`,
            },
            {
                name: "Javascript",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/javascript.svg`,
            },
            {
                name: "Typescript",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/typescript.svg`,
            },
            {
                name: "React JS",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/reactjs.svg`,
            },
            {
                name: "JQuery",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/jquery.svg`,
            },
            {
                name: "Tailwind CSS",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/tailwindcss.svg`,
            },
            {
                name: "Bootstrap",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/bootstrap.svg`,
            },
        ],
    },
    {
        name: "Backend",
        items: [
            {
                name: "Node JS",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/nodejs.svg`,
            },
            {
                name: "Express JS",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/expressjs.svg`,
            },
            {
                name: "Next JS",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/nextjs.svg`,
            },
            {
                name: "PHP",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/php.svg`,
            },
            {
                name: "Laravel",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/laravel.svg`,
            },
            {
                name: "CodeIgniter",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/codeigniter.svg`,
            },
            {
                name: "Csharp",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/csharp.svg`,
            },
            {
                name: "Python",
                level: 5,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/python.svg`,
            },
            {
                name: "ASP.NET",
                level: 5,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/dotnet.svg`,
            },
            {
                name: "Socket.IO",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/socketio.svg`,
            },
        ],
    },
    {
        name: "Database",
        items: [
            {
                name: "SQL Server",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/sqlserver.svg`,
            },
            {
                name: "MySQL",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/mysql.svg`,
            },
            {
                name: "Maria DB",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/mariadb.svg`,
            },
            {
                name: "MongoDB",
                level: 5,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/mongodb.svg`,
            },
            {
                name: "PostgreSQL",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/postgres.svg`,
            },
            {
                name: "Vector DB",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/vector-db.svg`,
            },
            {
                name: "Redis",
                level: 2,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/redis.svg`,
            },
        ],
    },
    {
        name: "Clouds & DevOps",
        items: [
            {
                name: "GIT",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/git.svg`,
            },
            {
                name: "Docker",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/docker.svg`,
            },
            {
                name: "AWS",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/aws.svg`,
            },
            {
                name: "Bash",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/bash.svg`,
            },
            {
                name: "Kubernetes",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/kubernetes.svg`,
            },
            // {
            //     name: "Jenkins",
            //     level: 3,
            //     proficiency: "beginner",
            //     icon: `${BASE_URL}/icons/jenkins.svg`,
            // },
            {
                name: "Terraform",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/terraform.svg`,
            },
        ],
    },
    {
        name: "Other Tools",
        items: [
            {
                name: "VS Code",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/vscode.svg`,
            },
            {
                name: "Postman",
                level: 7,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/postman.svg`,
            },
            {
                name: "Redux Toolkit",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/redux.svg`,
            },
            {
                name: "Jest",
                level: 5,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/jest.svg`,
            },
            {
                name: "Figma",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/figma.svg`,
            },
            {
                name: "Crystal Report",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/sap.svg`,
            },
            {
                name: "Gradio",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/gradio.svg`,
            },
            {
                name: "NPM",
                level: 6,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/npm.svg`,
            },
            {
                name: "Drizzle",
                level: 4,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/drizzle.svg`,
            },
            {
                name: "Better Auth",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/better-auth.svg`,
            },
        ],
    },
    {
        name: "AI & LLM Development",
        items: [
            {
                name: "OpenAI",
                level: 5,
                proficiency: "intermediate",
                icon: `${BASE_URL}/icons/openai.svg`,
            },
            {
                name: "Anthropic",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/anthropic.svg`,
            },
            {
                name: "CrewAI",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/crewai.svg`,
            },
            {
                name: "LangChain",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/lang-chain.svg`,
            },
            {
                name: "LangGraph",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/lang-graph.svg`,
            },
            // {
            //     name: "AutoGen",
            //     level: 3,
            //     proficiency: "beginner",
            //     icon: `${BASE_URL}/icons/auto-gen.svg`, // you can add or create an icon
            // },
            {
                name: "MCP",
                level: 3,
                proficiency: "beginner",
                icon: `${BASE_URL}/icons/mcp.svg`, // you can add or create an icon
            },
        ],
    },
];

export default SKILLS;
