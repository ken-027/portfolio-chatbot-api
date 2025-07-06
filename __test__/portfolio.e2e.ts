import request from "supertest";
import { Express } from "express";
import createApp from "../src/app";

describe("portfolio endpoints", () => {
    let app: Express;

    beforeAll(() => {
        app = createApp;
    });

    it("should return list of skills", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/skills")
            .expect(200);

        expect(res.body.skills.length).toBeGreaterThan(0);
        expect(Object.keys(res.body.skills[0]).sort()).toEqual([
            "items",
            "name",
        ]);
        expect(res.body.skills[0].items.length).toBeGreaterThan(0);
        expect(Object.keys(res.body.skills[0].items[0]).sort()).toEqual(
            ["name", "level", "proficiency", "icon"].sort(),
        );
    }, 10000);

    it("should return list of projects", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/projects")
            .expect(200);

        expect(res.body.projects).toBeDefined();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const firstKey = Object.keys(res.body.projects)[0] as any;
        expect(res.body.projects[firstKey].category).toBeDefined();
        expect(res.body.projects[firstKey].title).toBeDefined();
        expect(res.body.projects[firstKey].thumbnailLink).toBeDefined();
        expect(res.body.projects[firstKey].description).toBeDefined();
        expect(res.body.projects[firstKey].technologies).toBeDefined();
        expect(res.body.projects[firstKey].type).toBeDefined();
        expect(res.body.projects[firstKey].projectRole).toBeDefined();

        expect(res.body.projects[firstKey].technologies.length).toBeGreaterThan(
            0,
        );
        expect(
            Object.keys(res.body.projects[firstKey].technologies[0]).sort(),
        ).toEqual(["name", "level", "proficiency", "icon"].sort());
    });

    it("should return list of experiences", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/experiences")
            .expect(200);

        expect(res.body.experiences.length).toBeGreaterThan(0);
        const experience = res.body.experiences[0];

        expect(
            Object.keys(experience)
                .sort()
                .filter((val) => val !== "companyLink"),
        ).toEqual(
            [
                "title",
                "company",
                "location",
                "startDate",
                "endDate",
                "descriptions",
                "companyLogo",
                "projects",
            ].sort(),
        );
        expect(experience.descriptions.length).toBeGreaterThan(0);
        expect(experience.projects.length).toBeGreaterThan(0);
        expect(Object.keys(experience.projects[0]).sort()).toEqual(
            [
                "category",
                "projectRole",
                "title",
                "thumbnailLink",
                "description",
                "technologies",
                "screenshot",
                "type",
            ].sort(),
        );
        expect(experience.projects[0].technologies.length).toBeGreaterThan(0);
        expect(
            Object.keys(experience.projects[0].technologies[0]).sort(),
        ).toEqual(["name", "level", "proficiency", "icon"].sort());
    });

    it("should return list of services", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/services")
            .expect(200);

        expect(res.body.services.length).toBeGreaterThan(0);
        expect(Object.keys(res.body.services[0]).sort()).toEqual([
            "description",
            "image",
            "title",
        ]);
    });

    it("should return list of certificates", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/certificates")
            .expect(200);

        expect(res.body.certificates.length).toBeGreaterThan(0);
        const certificate = res.body.certificates[0];
        expect(Object.keys(certificate).sort()).toEqual(
            [
                "courseLink",
                "name",
                "platform",
                "dateCompleted",
                "platformLogo",
                "certificateLink",
                "certificateImage",
                "status",
                "skills",
                "provider",
            ].sort(),
        );
        expect(certificate.skills.length).toBeGreaterThan(0);
    });

    it("should return list of developer platforms", async () => {
        const res = await request(app)
            .get("/api/v1/portfolio/developer-platform")
            .expect(200);

        expect(res.body.platforms.length).toBeGreaterThan(0);
        expect(Object.keys(res.body.platforms[0]).sort()).toEqual([
            "icon",
            "link",
            "name",
        ]);
    });

    it("should return years and months of experience", async () => {
        const res = await request(app).get(
            "/api/v1/portfolio/experiences/years-of-experience",
        );

        expect(res.statusCode).toBe(200);
        const keys = Object.keys(res.body);
        expect(keys.includes("years") && keys.includes("months")).toBe(true);
    });
});
