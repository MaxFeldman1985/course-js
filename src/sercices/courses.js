// fake data provisioning module

import { getRandomNumber } from "../utils/random";

// data are the regular JS array
export default class Courses {
    #courses
    #minId
    #maxId
    constructor(minId, maxId, courses){
        this.#courses = courses ? courses : [] // this.#courses = courses ?? [];
        this.#minId = minId ?? 1;
        this.#maxId = maxId ?? 10000000;
    }
    add(course){
        course.id = this.#getId();
        this.#courses.push(course);
        return course;
    }
    #getId(){
        //returne unique value of id
       let id;
       do{
        id = getRandomNumber(this.#minId, this.#maxId)
       }while(this.exists(id));
       
    }
    exists(id){
        //TODO checks if a course with the given id exists
        return false;
    }
}