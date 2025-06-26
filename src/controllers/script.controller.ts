import { Request, Response } from "express";
import Embedder from "@/utils/embedder.util";
import {
    certificates,
    contacts,
    experiences,
    hobbies,
    infos,
    projects,
    whatIdo,
    skills,
    aboutMe,
} from "@/utils/documents.util";

export async function uploadVector(
    _request: Request<never, unknown>,
    response: Response,
) {
    await Embedder.cleanVector();

    skills.unshift("My skills");
    projects.unshift("My projects build and maintained");
    whatIdo.unshift("What I do as software developer");
    experiences.unshift("My experiences and projects on each company");
    contacts.unshift("My contacts");
    certificates.unshift("My certificates");
    hobbies.unshift("My hobbies besides my profession");
    aboutMe.unshift("About me");

    const saveSkills = Embedder.saveVectorDoc(skills);
    const saveProjects = Embedder.saveVectorDoc(projects);
    const saveWhatIdo = Embedder.saveVectorDoc(whatIdo);
    const saveExperiences = Embedder.saveVectorDoc(experiences);
    const saveContact = Embedder.saveVectorDoc(contacts);
    const saveCertificates = Embedder.saveVectorDoc(certificates);
    const saveHobbies = Embedder.saveVectorDoc(hobbies);
    const saveInfo = Embedder.saveVectorDoc(infos);
    const saveAboutMe = Embedder.saveVectorDoc(aboutMe);

    await Promise.all([
        saveSkills,
        saveProjects,
        saveWhatIdo,
        saveExperiences,
        saveContact,
        saveCertificates,
        saveHobbies,
        saveInfo,
        saveAboutMe,
    ]);

    response.json({ status: "ok" });
}
