import CERTIFICATES from "@/constant/certificates";
import EXPERIENCES from "@/constant/experiences";
import PROJECTS from "@/constant/projects";
import SERVICES from "@/constant/services";
import SKILLS from "@/constant/skills";
import { Request, Response } from "express";
import moment from "moment";

/**
 * @swagger
 * /api/v1/portfolio/experiences:
 *   get:
 *     summary: Get all experiences
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: A list of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 experiences:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: Full Stack Developer
 *                       company:
 *                         type: string
 *                         example: TechCorp Inc.
 *                       location:
 *                         type: string
 *                         example: Remote
 *                       startDate:
 *                         type: string
 *                         format: date
 *                         example: 2021-06-01
 *                       endDate:
 *                         type: string
 *                         example: Present
 *                       descriptions:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["Developed core features", "Managed deployments"]
 *                       companyLogo:
 *                         type: string
 *                         nullable: true
 *                         example: "https://example.com/logo.png"
 *                       projects:
 *                         type: array
 *                         nullable: true
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: Project Atlas
 *                             description:
 *                               type: string
 *                               example: A web-based inventory tracking system
 */

export async function experiences(
    _request: Request<never, unknown>,
    response: Response,
) {
    const experiences = EXPERIENCES;
    response.json({ experiences });
}

/**
 * @swagger
 * /api/v1/portfolio/experiences/years-of-experience:
 *   get:
 *     summary: Get total years and months of experience
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: Total experience in years and months
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 years:
 *                   type: integer
 *                   example: 3
 *                 months:
 *                   type: integer
 *                   example: 5
 */

export async function getTotalYearsExperience(
    _request: Request<never, unknown>,
    response: Response,
) {
    const experiences = EXPERIENCES;

    const daysOfExperience = experiences
        .map(({ startDate, endDate }) =>
            moment(endDate === "Present" ? new Date() : endDate).diff(
                startDate,
                "days",
            ),
        )
        .reduce((total, value) => total + value, 0);

    const start = moment();
    const end = moment().add(daysOfExperience, "days");

    const monthsOfExperience = end.diff(start, "months");

    const years = Math.floor(monthsOfExperience / 12);
    const months = monthsOfExperience % 12;

    return response.json({ years, months });
}

/**
 * @swagger
 * /api/v1/portfolio/services:
 *   get:
 *     summary: Get all services
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: A list of available services
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 services:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: Web Development
 *                       description:
 *                         type: string
 *                         example: Building responsive and modern websites.
 *                       image:
 *                         type: string
 *                         example: https://example.com/images/web-development.png
 */

export async function services(
    _request: Request<never, unknown>,
    response: Response,
) {
    const services = SERVICES;
    response.json({ services });
}

/**
 * @swagger
 * /api/v1/portfolio/certificates:
 *   get:
 *     summary: Get all certificates
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: A list of certificates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 certificates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: JavaScript Algorithms and Data Structures
 *                       platform:
 *                         type: string
 *                         example: freeCodeCamp
 *                       platformLogo:
 *                         type: string
 *                         nullable: true
 *                         example: https://example.com/images/freecodecamp-logo.png
 *                       dateCompleted:
 *                         type: string
 *                         example: ongoing
 *                         description: Completion date or "ongoing"
 *                       description:
 *                         type: string
 *                         example: Learned the fundamentals of JavaScript, algorithms, and data structures.
 *                       certificateLink:
 *                         type: string
 *                         nullable: true
 *                         example: https://example.com/certificates/javascript
 *                       certificateImage:
 *                         type: string
 *                         nullable: true
 *                         example: https://example.com/images/certificate.png
 *                       courseLink:
 *                         type: string
 *                         nullable: true
 *                         example: https://example.com/courses/javascript
 */
export async function certificates(
    _request: Request<never, unknown>,
    response: Response,
) {
    const certificates = CERTIFICATES;
    response.json({ certificates });
}

/**
 * @swagger
 * /api/v1/portfolio/projects:
 *   get:
 *     summary: Get all projects with details
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: List of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 projects:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       thumbnailLink:
 *                         type: string
 *                         format: uri
 *                         example: https://cdn.example.com/thumb.png
 *                       title:
 *                         type: string
 *                         example: AI Chatbot
 *                       description:
 *                         type: string
 *                         example: A smart AI chatbot built with OpenAI.
 *                       technologies:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: React
 *                             proficiency:
 *                               type: integer
 *                               example: 8
 *                               minimum: 1
 *                               maximum: 10
 *                             icon:
 *                               type: string
 *                               format: uri
 *                               example: https://cdn.example.com/icons/react.svg
 *                       githubRepo:
 *                         type: string
 *                         format: uri
 *                         example: https://github.com/user/project
 *                       liveDemo:
 *                         type: string
 *                         format: uri
 *                         example: https://project.example.com
 *                       screenshot:
 *                         type: string
 *                         format: uri
 *                         example: https://cdn.example.com/screenshots/project.png
 *                       category:
 *                         type: string
 *                         enum: [fullstack, frontend, backend, AI-powered]
 *                         example: AI-powered
 */
export async function projects(
    _request: Request<never, unknown>,
    response: Response,
) {
    const projects = PROJECTS;
    response.json({ projects });
}

/**
 * @swagger
 * /api/v1/portfolio/skills:
 *   get:
 *     summary: Get all skills with proficiency and icons
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: A list of categorized skills
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: Frontend
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: React
 *                             proficiency:
 *                               type: integer
 *                               minimum: 1
 *                               maximum: 10
 *                               example: 8
 *                             icon:
 *                               type: string
 *                               format: uri
 *                               example: https://cdn.example.com/icons/react.svg
 */
export async function skills(
    _request: Request<never, unknown>,
    response: Response,
) {
    const skills = SKILLS;
    response.json({ skills });
}
