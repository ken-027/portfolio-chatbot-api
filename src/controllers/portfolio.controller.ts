import CERTIFICATES from "@/constant/certificates";
import EXPERIENCES from "@/constant/experiences";
import PROJECTS from "@/constant/projects";
import SERVICES from "@/constant/services";
import SKILLS from "@/constant/skills";
import { Request, Response } from "express";

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
