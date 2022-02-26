import courseData from './config/courseData.json'
import College from './services/college';
import Courses from './services/courses';
import FormHandler from './ui/form_handler';
import { getRandomCourse } from './utils/randomCourse';
const N_COURSES = 5;
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
const courses = createCourses();
ulElem.innerHTML = `${getCourseItem(createCourse())}`
const dataProvider = new Courses(courses);
constProcessor = new College(dataProvider, courseData);
const formHandler = new FormHandler("courses-form", "alert");
formHandler.addHandler(course =>{
    const message = dataProcessor.addCourse(course);
    course.id = 100000;
    ulElem.innerHTML += `<li>${JSON.stringify(course)}</li>`;
})
