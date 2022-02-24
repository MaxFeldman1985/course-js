import { createCourse } from "../models/course";
import { getRandomDate, getRandomNumber, getRandomElement } from "./random";
export function getRandomCourse(courseDate){
    //TODO getting random 
    const id = getRandomNumber(minId, maxId);
    const lecture = getRandomElement(lectors);
    const name = getRandomElement(courses);
    const hours = Math.round(getRandomNumber(minHours, maxHours) / 10) * 10;
    const cost = Math.round(getRandomNumber(minCost, maxCost) / 100) * 100;
    const openingDate = getRandomDate(minYear, maxYear);
    return createCourse(id, name, lecture, hours, cost, openingDate);
}