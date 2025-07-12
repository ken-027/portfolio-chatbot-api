import { BASE_URL } from "@/config/env";
import { DeveloperPlatform as DEVELOPERPLATFORM } from "@/types";

const DEVELOPER_PLATFORM: DEVELOPERPLATFORM[] = [
    {
        name: "Github",
        icon: `${BASE_URL}/images/developer-platform/github.svg`,
        link: "https://github.com/ken-027",
    },
    {
        name: "Docker",
        icon: `${BASE_URL}/images/developer-platform/docker.svg`,
        link: "https://hub.docker.com/u/ken027",
    },
    {
        name: "Hugging Face",
        icon: `${BASE_URL}/images/developer-platform/hugging-face.svg`,
        link: "https://huggingface.co/kenneth-andales",
    },
    {
        name: "NPM ",
        icon: `${BASE_URL}/images/developer-platform/npm.svg`,
        link: "https://www.npmjs.com/~ken_27",
    },
    {
        name: "Replit ",
        icon: `${BASE_URL}/images/developer-platform/replit.svg`,
        link: "https://replit.com/@ken-027",
    },
    {
        name: "LeetCode",
        icon: `${BASE_URL}/images/developer-platform/leetcode.svg`,
        link: "https://leetcode.com/u/ken-027",
    },
];

export default DEVELOPER_PLATFORM;
