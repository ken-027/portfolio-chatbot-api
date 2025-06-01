import {
    skills,
    projects,
    certificates,
} from "../src/controllers/portfolio.controller";
import { mockRequest, mockResponse } from "../__mocks__/request.mock";

describe("skills", () => {
    it("should return list of skills", () => {
        // @ts-expect-error @ts-ignore
        skills(mockRequest, mockResponse).then((data) => console.log(data));
        expect(mockResponse.json).toHaveBeenCalled();
    });
});

describe("projects", () => {
    it("should return list of projects", () => {
        // @ts-expect-error @ts-ignore
        projects(mockRequest, mockResponse).then((data) => console.log(data));
        expect(mockResponse.json).toHaveBeenCalled();
    });
});

describe("certificates", () => {
    it("should return list of certificates", () => {
        // @ts-expect-error @ts-ignore
        certificates(mockRequest, mockResponse).then((data) =>
            console.log(data),
        );
        expect(mockResponse.json).toHaveBeenCalled();
    });
});
