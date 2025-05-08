export interface ItemSkill {
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Skill {
  name: string;
  items: ItemSkill[];
}

const SKILLS: Skill[] = [
  {
    name: "Programming & Markup Languages",
    items: [
      { name: "HTML", proficiency: 8 },
      { name: "Sass", proficiency: 5 },
      { name: "Typescript", proficiency: 7 },
      { name: "Javascript", proficiency: 8 },
      { name: "PHP", proficiency: 8 },
      { name: "Csharp", proficiency: 5 },
      { name: "Python", proficiency: 5 },
      { name: "Bash", proficiency: 4 },
    ],
  },
  {
    name: "Frontend Development",
    items: [
      { name: "CSS", proficiency: 7 },
      { name: "JQuery", proficiency: 7 },
      { name: "React JS", proficiency: 8 },
      { name: "Tailwind CSS", proficiency: 8 },
      { name: "Bootstrap", proficiency: 8 },
    ],
  },
  {
    name: "Backend Development",
    items: [
      { name: "Node JS", proficiency: 7 },
      { name: "Express JS", proficiency: 7 },
      { name: "SQL Server", proficiency: 8 },
      { name: "MySQL", proficiency: 6 },
      { name: "Maria DB", proficiency: 7 },
    ],
  },
  {
    name: "Fullstack Development",
    items: [
      { name: "Next JS", proficiency: 6 },
      { name: "Laravel", proficiency: 7 },
      { name: "CodeIgniter", proficiency: 7 },
      { name: "ASP.NET", proficiency: 5 },
    ],
  },
  {
    name: "Tools and Technologies",
    items: [
      { name: "Figma", proficiency: 5 },
      { name: "Crystal Report", proficiency: 6 },
      { name: "VS Code", proficiency: 8 },
      { name: "Postman", proficiency: 7 },
      { name: "Jest", proficiency: 5 },
      { name: "Redux Toolkit", proficiency: 6 },
      { name: "Socket.IO", proficiency: 5 },
      { name: "GIT", proficiency: 8 },
      { name: "Docker", proficiency: 4 },
      { name: "AWS", proficiency: 4 },
    ],
  },
];

export default SKILLS;
