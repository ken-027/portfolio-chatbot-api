import { Router } from "express";
import {
    aboutMe,
    certificates,
    experiences,
    getTotalYearsExperience,
    platforms,
    projects,
    services,
    skills,
    whatIDo,
} from "@/controllers/portfolio.controller";

const portfolioRoutes = Router();

portfolioRoutes.route("/experiences").get(experiences);
portfolioRoutes
    .route("/experiences/years-of-experience")
    .get(getTotalYearsExperience);
portfolioRoutes.route("/services").get(services);
portfolioRoutes.route("/what-i-do").get(whatIDo);
portfolioRoutes.route("/certificates").get(certificates);
portfolioRoutes.route("/projects").get(projects);
portfolioRoutes.route("/skills").get(skills);
portfolioRoutes.route("/developer-platform").get(platforms);
portfolioRoutes.route("/about-me").get(aboutMe);

export default portfolioRoutes;
