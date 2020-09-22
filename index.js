let students =[];
let courses = [];
let student_string = '';
const studentsButton = document.getElementById('students');
const coursesButton = document.getElementById('Courses');
const newStudentButton = document.getElementById('new_student');
const studentsRow = document.getElementById('students_row');
const coursesRow = document.getElementById('courses_row');
const newStudentFirstName = document.getElementById('new_student_first_name');
const newStudentLastName = document.getElementById('new_student_last_name');


async function fetchStudents() {
    const response = await fetch('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json');
    const students_body = await response.json();
    students = students_body;
}
async function fetchCourses() {
    const response = await fetch('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json');
    const courses_body = await response.json();
    courses = courses_body;
}

function getStudents(students) {
    studentsRow.innerHTML = ''   

    for(let i=0; i< students.length; i++) {
        let student = students[i];
        let col = document.createElement("div")
        col.classList.add('col-4');
        let content = document.createElement('p')
        content.innerText = `${student.name} ${student.last_name}`
        col.appendChild(content)
        studentsRow.appendChild(col);
    }
}


function getCourses(courses) {
    coursesRow.innerHTML = ''   

    for(let i=0; i< courses.length; i++) {
        let course = courses[i];
        let col = document.createElement("div")
        col.classList.add('col-4');
        let content = document.createElement('p')
        content.innerText = `${course.name} ${course.duration}`
        col.appendChild(content)
        coursesRow.appendChild(col);
    }
}

function displayStudents () {
    coursesRow.style.display = 'none';
    studentsRow.style.display = 'flex';    
}

function displayCourses () {
    studentsRow.style.display = 'none';
    coursesRow.style.display = 'flex';    
}

async function addNewStuddent() {
    let firstName = newStudentFirstName.value;
    let lastName = newStudentLastName.value;
    const response = await fetch('https://student-challenge-api.herokuapp.com/students');
       
    const body = await response.json();
        console.log(body);
    
}

studentsButton.addEventListener('click', (event) => {
  
    displayStudents();
    
});

coursesButton.addEventListener('click', (event) => {
  
    displayCourses();
    
});
newStudentButton.addEventListener('click', (event) => {
  
    addNewStuddent();
    
});
