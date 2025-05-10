import { Router } from "express";
import {
    certificates,
    experiences,
    getTotalYearsExperience,
    projects,
    services,
    skills,
} from "@/controllers/portfolio.controller";

const portfolioRoutes = Router();

portfolioRoutes.route("/portfolio/experiences").get(experiences);
portfolioRoutes
    .route("/portfolio/experiences/years-of-experience")
    .get(getTotalYearsExperience);
portfolioRoutes.route("/portfolio/services").get(services);
portfolioRoutes.route("/portfolio/certificates").get(certificates);
portfolioRoutes.route("/portfolio/projects").get(projects);
portfolioRoutes.route("/portfolio/skills").get(skills);

export default portfolioRoutes;
