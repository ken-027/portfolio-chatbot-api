import { Request, Response } from "express";
import Embedder from "@/utils/embedder.util";
import {
    certificates,
    contacts,
    experiences,
    hobbies,
    infos,
    projects,
    services,
    skills,
} from "@/utils/documents.util";

export async function uploadVector(
    _request: Request<never, unknown>,
    response: Response,
) {
    await Embedder.cleanVector();

    const saveSkills = Embedder.saveVectorDoc(skills);
    const saveProjects = Embedder.saveVectorDoc(projects);
    const saveServices = Embedder.saveVectorDoc(services);
    const saveExperiences = Embedder.saveVectorDoc(experiences);
    const saveContact = Embedder.saveVectorDoc(contacts);
    const saveCertificates = Embedder.saveVectorDoc(certificates);
    const saveHobbies = Embedder.saveVectorDoc(hobbies);
    const saveInfo = Embedder.saveVectorDoc(infos);

    await Promise.all([
        saveSkills,
        saveProjects,
        saveServices,
        saveExperiences,
        saveContact,
        saveCertificates,
        saveHobbies,
        saveInfo,
    ]);

    response.json({ status: "ok" });
}
