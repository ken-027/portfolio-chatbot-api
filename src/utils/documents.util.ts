import CERTIFICATES from "@/constant/certificates";
import CONTACTS from "@/constant/contacts";
import EXPERIENCES from "@/constant/experiences";
import HOBBIES from "@/constant/hobbies";
import INFO from "@/constant/info";
import PROJECTS, { Project } from "@/constant/projects";
import SERVICES from "@/constant/services";
import SKILLS from "@/constant/skills";

export const skills = SKILLS.map((skill) => {
    const items = skill.items
        .map((item) => `${item.name} (${item.proficiency}/10)`)
        .join(", ");
    return `${skill.name}: ${items}`;
});

export const projects = Object.keys(PROJECTS).map((name) => {
    //@ts-expect-error @ts-ignore
    const project = PROJECTS[name] as Project;
    const {
        title,
        category,
        description,
        technologies,
        liveDemo,
        githubRepo,
        screenshot,
    } = project;

    const response_technology = technologies.map(({ name }) => name).join(", ");

    const response = `Category: ${category}, Title: ${title}, Description: ${description}, Technologies: ${response_technology}, Live Demo: ${
        liveDemo || ""
    }, Github Repo:${githubRepo || ""}, Screenshots:${screenshot || ""}`;
    return response;
});

export const services = SERVICES.map(
    ({ description, title }) => `Title:${title}, ${description}`,
);

export const experiences = EXPERIENCES.map(
    ({
        company,
        title,
        projects,
        startDate,
        endDate,
        descriptions,
        location,
    }) => {
        const response_project = projects?.map(
            ({
                title,
                category,
                description,
                technologies,
                liveDemo,
                githubRepo,
                screenshot,
            }) => {
                const response_technology = technologies
                    .map(({ name }) => name)
                    .join(", ");

                const response = `Category: ${category}, Title: ${title}, Description: ${description}, Technologies: ${response_technology}, Live Demo: ${
                    liveDemo || ""
                }, Github Repo:${githubRepo || ""}, Screenshots:${screenshot || ""}`;
                return response;
            },
        );

        return `Company: ${company}, Role: ${title}, Date Started: ${startDate}, End Date: ${endDate}, Descriptions: ${descriptions.join(
            ", ",
        )}, Location: ${location}, Projects: ${response_project}`;
    },
);

export const certificates = CERTIFICATES.map(
    ({ dateCompleted, description, name, certificateLink, courseLink }) =>
        `Name: ${name}, description: ${description}, Date Completed: ${dateCompleted}, Certificate Link: ${
            certificateLink || ""
        }, Course Link: ${courseLink || ""}`,
);

export const contacts = CONTACTS.map(
    ({ link, name }) => `Name: ${name}, Link: ${link}`,
);

export const hobbies = HOBBIES.map((hobby) => `Hobby: ${hobby}`);

export const infos = INFO.map((info) => `INFO: ${info}`);
