import CERTIFICATES from "@/constant/certificates";
import EXPERIENCES from "@/constant/experiences";
import PROJECTS from "@/constant/projects";
import SERVICES from "@/constant/services";
import SKILLS from "@/constant/skills";
import { Request, Response } from "express";
import moment from "moment";

export async function experiences(
    _request: Request<never, unknown>,
    response: Response,
) {
    const experiences = EXPERIENCES;
    response.json({ experiences });
}

export async function services(
    _request: Request<never, unknown>,
    response: Response,
) {
    const services = SERVICES;
    response.json({ services });
}

export async function certificates(
    _request: Request<never, unknown>,
    response: Response,
) {
    const certificates = CERTIFICATES;
    response.json({ certificates });
}

export async function projects(
    _request: Request<never, unknown>,
    response: Response,
) {
    const projects = PROJECTS;
    response.json({ projects });
}

export async function skills(
    _request: Request<never, unknown>,
    response: Response,
) {
    const skills = SKILLS;
    response.json({ skills });
}

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
