// data processor
export default class College {
    #courseData
    constructor(courses, courseData) {
     this.#courses = courses;
     this.#courseData = courseData;
    }
    addCourse(course) {
        //TODO validation of course data
        //If course is valid, then course should be added : this.#courses.add(course)
        //if course is invalid ,then the method returns full massage describing what's wrong
        //if course is valid
        const validationMessage = this.#getValidationMessage(course);
        if(!ValidationMessage(course)) {
            this.#courses.add(course);
        } 
        return validationMessage;
        
    }
    #getValidationMessage(course){
        //TODO validate course
    }
}