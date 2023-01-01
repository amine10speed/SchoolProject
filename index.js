function loadCourses({ image, title, price }) {
    const card = document.createElement('div');
    card.setAttribute('class', 'col-4 p-3');
    const courseimage = document.createElement('img');
    courseimage.src = image;
    const courseimagecontainer = document.createElement('div');
    courseimagecontainer.setAttribute('class', 'course-image-wrapper');
    courseimagecontainer.append(courseimage);
    card.appendChild(courseimagecontainer);
    const coursetitle = document.createElement('h5');
    coursetitle.setAttribute('class', 'mt-2 text-center');
    coursetitle.innerText = title ;
    card.appendChild(coursetitle);
    const courseprice = document.createElement('span');
    courseprice.setAttribute('class', 'd-block text-center');
    courseprice.innerText = price ;
    card.appendChild(courseprice);
    document.querySelector("#courses-container .row").append(card);
}
const selectedCourses = [];
for (let i = 0; i < 3; i++) {
    let course = courses[Math.floor(Math.random() * courses.length)];
    while (selectedCourses.includes(course)) {
        course = courses[Math.floor(Math.random() * courses.length)];
    }
    selectedCourses.push(course);
    loadCourses(course);
}
