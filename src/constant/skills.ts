import { BASE_URL } from "@/config/env";

export interface ItemSkill {
    name: string;
    proficiency: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    icon: string;
}

export interface Skill {
    name: string;
    items: ItemSkill[];
}

const SKILLS: Skill[] = [
    {
        name: "Programming & Markup Languages",
        items: [
            {
                name: "HTML",
                proficiency: 8,
                icon: `${BASE_URL}/icons/html.svg`,
            },
            {
                name: "Sass",
                proficiency: 5,
                icon: `${BASE_URL}/icons/sass.svg`,
            },
            {
                name: "Typescript",
                proficiency: 7,
                icon: `${BASE_URL}/icons/typescript.svg`,
            },
            {
                name: "Javascript",
                proficiency: 8,
                icon: `${BASE_URL}/icons/javascript.svg`,
            },
            { name: "PHP", proficiency: 8, icon: `${BASE_URL}/icons/php.svg` },
            {
                name: "Csharp",
                proficiency: 5,
                icon: `${BASE_URL}/icons/csharp.svg`,
            },
            {
                name: "Python",
                proficiency: 5,
                icon: `${BASE_URL}/icons/python.svg`,
            },
            {
                name: "Bash",
                proficiency: 4,
                icon: `${BASE_URL}/icons/bash.svg`,
            },
        ],
    },
    {
        name: "Frontend Development",
        items: [
            { name: "CSS", proficiency: 7, icon: `${BASE_URL}/icons/css.svg` },
            {
                name: "JQuery",
                proficiency: 7,
                icon: `${BASE_URL}/icons/jquery.svg`,
            },
            {
                name: "React JS",
                proficiency: 8,
                icon: `${BASE_URL}/icons/reactjs.svg`,
            },
            {
                name: "Tailwind CSS",
                proficiency: 8,
                icon: `${BASE_URL}/icons/tailwindcss.svg`,
            },
            {
                name: "Bootstrap",
                proficiency: 8,
                icon: `${BASE_URL}/icons/bootstrap.svg`,
            },
        ],
    },
    {
        name: "Backend Development",
        items: [
            {
                name: "Node JS",
                proficiency: 7,
                icon: `${BASE_URL}/icons/nodejs.svg`,
            },
            {
                name: "Express JS",
                proficiency: 7,
                icon: `${BASE_URL}/icons/expressjs.svg`,
            },
            {
                name: "SQL Server",
                proficiency: 8,
                icon: `${BASE_URL}/icons/sqlserver.svg`,
            },
            {
                name: "MySQL",
                proficiency: 6,
                icon: `${BASE_URL}/icons/mysql.svg`,
            },
            {
                name: "Maria DB",
                proficiency: 7,
                icon: `${BASE_URL}/icons/mariadb.svg`,
            },
        ],
    },
    {
        name: "Fullstack Development",
        items: [
            {
                name: "Next JS",
                proficiency: 6,
                icon: `${BASE_URL}/icons/nextjs.svg`,
            },
            {
                name: "Laravel",
                proficiency: 7,
                icon: `${BASE_URL}/icons/laravel.svg`,
            },
            {
                name: "CodeIgniter",
                proficiency: 7,
                icon: `${BASE_URL}/icons/codeigniter.svg`,
            },
            {
                name: "ASP.NET",
                proficiency: 5,
                icon: `${BASE_URL}/icons/dotnet.svg`,
            },
        ],
    },
    {
        name: "Tools and Technologies",
        items: [
            {
                name: "Figma",
                proficiency: 5,
                icon: `${BASE_URL}/icons/figma.svg`,
            },
            {
                name: "Crystal Report",
                proficiency: 6,
                icon: `${BASE_URL}/icons/sap.svg`,
            },
            {
                name: "VS Code",
                proficiency: 8,
                icon: `${BASE_URL}/icons/vscode.svg`,
            },
            {
                name: "Postman",
                proficiency: 7,
                icon: `${BASE_URL}/icons/postman.svg`,
            },
            {
                name: "Jest",
                proficiency: 5,
                icon: `${BASE_URL}/icons/jest.svg`,
            },
            {
                name: "Redux Toolkit",
                proficiency: 6,
                icon: `${BASE_URL}/icons/redux.svg`,
            },
            {
                name: "Socket.IO",
                proficiency: 5,
                icon: `${BASE_URL}/icons/socketio.svg`,
            },
            { name: "GIT", proficiency: 8, icon: `${BASE_URL}/icons/git.svg` },
            {
                name: "Docker",
                proficiency: 4,
                icon: `${BASE_URL}/icons/docker.svg`,
            },
            { name: "AWS", proficiency: 4, icon: `${BASE_URL}/icons/aws.svg` },
        ],
    },
];

export default SKILLS;
