let mlc = document.getElementsByClassName("dropdown");
mlc[3].addEventListener("click", myfun); 
function  myfun() {
    let bool_lm = document.getElementById("drop").classList.toggle("close-dropdown");
    if(bool_lm) {
        mlc[3].querySelector('.material-symbols-outlined').style.color = '#3FD28B';
    } else {
        mlc[3].querySelector('.material-symbols-outlined').style.color = 'white';
    }
}

let card = `[
    {
        "img": "./images/imageMask-1.svg",
        "courseName" : "Acceleration",
        "subject": "physics",
        "Grade": 7,
        "extraGrade": "+2",
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "pofessors" : "Mr. sukhs class A",
        "numberStudents": 50,
        "startDate": "21-jan-2020",
        "endDate": "21-Aug-2020",
        "expiry": false,
        "favourite": true
    },

    {
        "img": "./images/imageMask-2.svg",
        "courseName" : "Displacement, Velocity and Speed",
        "subject": "Physics 2",
        "Grade": 7,
        "extraGrade": "+2",
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "pofessors" : "Mr. sukhs class A",
        "numberStudents": 50,
        "startDate": "21-jan-2020",
        "endDate": "21-Aug-2020",
        "expiry": false,
        "favourite": false
    },

    {
        "img": "./images/imageMask-3.png",
        "courseName" : "Introduction to Biology: Micro organisms and how they affec...",
        "subject": "Biology",
        "Grade": 7,
        "extraGrade": "+2",
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "pofessors" : "Mr. sukhs class A",
        "numberStudents": 50,
        "startDate": "21-jan-2020",
        "endDate": "21-Aug-2020",
        "expiry": true,
        "favourite": false
    },

    {
        "img": "./images/imageMask-4.svg",
        "courseName" : "Introduction to High School Mathematics",
        "subject": "Maths",
        "Grade": 7,
        "extraGrade": "+2",
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "pofessors" : "Mr. sukhs class A",
        "numberStudents": 50,
        "startDate": "21-jan-2020",
        "endDate": "21-Aug-2020",
        "expiry": true,
        "favourite": true
    },

    {
        "img": "https://vedic.ac.in/images/vedic/career-page-img.jpg",
        "courseName" : "Vedic maths",
        "subject": "Maths",
        "Grade": 7,
        "extraGrade": "+2",
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "pofessors" : "Mr. sukhs class A",
        "numberStudents": 50,
        "startDate": "21-jan-2020",
        "endDate": "21-Aug-2020",
        "expiry": false,
        "favourite": true
    }

]`

let courseCard = JSON.parse(card);

courseCard.forEach(e => {
    let newele = document.createElement("div");
    let clas = "container"
    if(e.expiry) {
        clas = clas + " exiperControl"
    }
    let star;
    if(e.favourite) {
        star = "favourite";
    } else {
        star = "unfavourite";
    }
    newele.setAttribute("class", clas);
    let k = 
    `
    <span class="material-symbols-outlined ${star}">star</span>
    <div class="topcontainer">
        <img src="${e.img}" alt="${e.courseName} course">
        <div class="coursedetail">
            <p class="text-black-16 margin-top-null margin-bottom-null">${e.courseName}</p>
            <div class="subjectdetails">
                <p class="subjectdetails__subject margin-bottom-7 wet-12-8 margin-top-null">${e.subject}</p>
                <p class="subjectdetails__grade margin-bottom-7 wet-12-8 left-pad margin-top-null">grade ${e.Grade}
                    <span class="extragrade">${e.extraGrade}</span></p>
            </div>
            <div class="coursedetail-syl">
                <p class="margin-top-null margin-bottom-null"><span>${e.Units}</span> Units <span>${e.Lessons}</span> lessons
                    <span>${e.Topics}</span> topics</p>
            </div>
            <select name="choose" class="coursedetail__teacherselect text-black-16">
                <option value="teach1">All Classes</option>
                <option value="teach1">${e.pofessors}</option>
            </select>
            <div class="coursedetail__nostud">
                <p class="wet-12-8">${e.numberStudents} students</p>
                <p class="wet-12-8 left-pad">${e.startDate} - ${e.endDate}</p>
            </div>
        </div>
    </div>
    <div class="bottomcontainer">
        <img src="/images/preview.svg" alt="preview">
        <img src="/images/manage course.svg" alt="manage course">
        <img src="/images/grade submissions.svg" alt="grade submissions">
        <img src="/images/reports.svg" alt="reports">
    </div>
    
    `
    newele.innerHTML = k;
    
    document.getElementById('teacherdetailpanel').append(newele);
    
});
// let newele = document.createElement("div");
// let clas = "container"
// if(e.expiry) {
//     clas = clas + " exiperControl"
// }
// let star;
// if(e.favourite) {
//     star = "favourite";
// } else {
//     star = "unfavourite";
// }
// newele.setAttribute("class", clas);
// let k = 
// `
// <span class="material-symbols-outlined ${star}">star</span>
// <div class="topcontainer">
//     <img src="${e.img}" alt="${e.courseName} course">
//     <div class="coursedetail">
//         <p class="text-black-16 margin-top-null margin-bottom-null">${e.courseName}</p>
//         <div class="subjectdetails">
//             <p class="subjectdetails__subject margin-bottom-7 wet-12-8 margin-top-null">${e.subject}</p>
//             <p class="subjectdetails__grade margin-bottom-7 wet-12-8 left-pad margin-top-null">grade ${e.Grade}
//                 <span class="extragrade">${e.extraGrade}</span></p>
//         </div>
//         <div class="coursedetail-syl">
//             <p class="margin-top-null margin-bottom-null"><span>${e.Units}</span> Units <span>${e.Lessons}</span> lessons
//                 <span>${e.Topics}</span> topics</p>
//         </div>
//         <select name="choose" class="coursedetail__teacherselect text-black-16">
//             <option value="teach1">All Classes</option>
//             <option value="teach1">${e.pofessors}</option>
//         </select>
//         <div class="coursedetail__nostud">
//             <p class="wet-12-8">${e.numberStudents} students</p>
//             <p class="wet-12-8 left-pad">${e.startDate} - ${e.endDate}</p>
//         </div>
//     </div>
// </div>
// <div class="bottomcontainer">
//     <img src="/images/preview.svg" alt="preview">
//     <img src="/images/manage course.svg" alt="manage course">
//     <img src="/images/grade submissions.svg" alt="grade submissions">
//     <img src="/images/reports.svg" alt="reports">
// </div>

// `
// newele.innerHTML = k;

// document.getElementById('teacherdetailpanel').append(newele);