import { getTotalYears } from "@/utils/date.utils";
import EXPERIENCES from "./experiences";

const { months, years } = getTotalYears(EXPERIENCES);

const ABOUT_ME: string[] = [
    `Hi, I'm Kenneth Andales, a passionate full-stack web developer with ${months >= 9 ? years + 1 : years}${months > 3 ? "+" : ""} years of experience crafting reliable and efficient web applications. Based in the Philippines, I specialize in building modern web solutions that combine clean code with intuitive user experiences.`,
    "My development journey began in 2018 as a Jr. Web Developer at International Payment Processing in Puerto Princesa, where I learned the fundamentals of web development and deployment. From there, I progressed to Cloud Panda PH, honing my skills in responsive design and team collaboration. After gaining valuable freelance experience, I advanced to my current role as Mid-Software Developer at National Confederation of Cooperatives, where I've been modernizing legacy systems and implementing new features since 2023.",
    "I'm particularly skilled in both frontend and backend development, with expertise in React, Node Js, PHP, Laravel, and modern JavaScript frameworks. Whether it's optimizing performance, integrating APIs, or solving complex technical challenges, I approach each project with attention to detail and a commitment to delivering results.",
    "When I'm not coding, I'm expanding my expertise through continuous learning—recently completing certifications in AI Engineering, DevOps, and advanced web development. I thrive in collaborative environments and am passionate about taking on challenging projects that deliver real impact and push technical boundaries.",
    "Ready to build something amazing together? Let's connect and discuss how I can help bring your vision to life.",
];

export default ABOUT_ME;
