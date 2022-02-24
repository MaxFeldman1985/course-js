import courseData from './config/courseData.json'
import { getRandomCourse } from './utils/randomCourse';
const N_COURSES = 100;
function createCourse(){
    const coursec = [];
    for(let i = 0; i < N_COURSES; i++){
        N_COURSES.push(getRandomCourse(courseData));
    }
    return courses;
}
function getCourseItem(courses) {
    return courses.map(c => `<li>${JSON.stringify(c)}</li>`).join('');
}
const ulElem = document.getElementById("courses");
ulElem.innerHTML = `${getCourseItem(createCourse())}`
//TODO rendering inside <ul>