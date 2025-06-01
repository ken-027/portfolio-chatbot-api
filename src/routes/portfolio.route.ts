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

portfolioRoutes.route("/experiences").get(experiences);
portfolioRoutes
    .route("/experiences/years-of-experience")
    .get(getTotalYearsExperience);
portfolioRoutes.route("/services").get(services);
portfolioRoutes.route("/certificates").get(certificates);
portfolioRoutes.route("/projects").get(projects);
portfolioRoutes.route("/skills").get(skills);

export default portfolioRoutes;
