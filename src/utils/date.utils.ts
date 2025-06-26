import { TIMEZONE } from "@/config/env";
import { Experience } from "@/types";
import moment from "moment-timezone";

export const getDateTime = () => moment().tz(TIMEZONE).format();

export const getDate = () => moment().tz(TIMEZONE).format("DD-MM-yyyy");

export const getTotalYears = (
    experiences: Experience[],
): { years: number; months: number } => {
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

    return { years, months };
};
