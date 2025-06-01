import request from "supertest";
import { Express } from "express";
import createApp from "../src/app";

describe("/api/v1/portfolio", () => {
    let app: Express;

    beforeAll(() => {
        app = createApp;
    });

    it("should return list of skills", async () => {
        const res = await request(app).get("/api/v1/portfolio/skills");

        expect(res.statusCode).toBe(200);
        expect(res.body.skills.length).toBeGreaterThan(0);
    });

    it("should return list of projects", async () => {
        const res = await request(app).get("/api/v1/portfolio/projects");

        expect(res.statusCode).toBe(200);
        expect(Object.keys(res.body.projects).length).toBeGreaterThan(0);
    });

    it("should return list of experiences", async () => {
        const res = await request(app).get("/api/v1/portfolio/experiences");

        expect(res.statusCode).toBe(200);
        expect(res.body.experiences.length).toBeGreaterThan(0);
    });

    it("should return list of services", async () => {
        const res = await request(app).get("/api/v1/portfolio/services");

        expect(res.statusCode).toBe(200);
        expect(res.body.services.length).toBeGreaterThan(0);
    });

    it("should return list of certificates", async () => {
        const res = await request(app).get("/api/v1/portfolio/certificates");

        expect(res.statusCode).toBe(200);
        expect(res.body.certificates.length).toBeGreaterThan(0);
    });

    it("should return years and months of experience", async () => {
        const res = await request(app).get(
            "/api/v1/portfolio/experiences/years-of-experience",
        );

        expect(res.statusCode).toBe(200);
        const keys = Object.keys(res.body);
        expect(keys.includes("years") || keys.includes("months")).toBe(true);
    });
});
