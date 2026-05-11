const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateCircles();
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.15;
        y += (nextCircle.y - y) * 0.15;
    });
}

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})


// Contact Form with Google App Script 

function sendMessage() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    console.log(name, email, subject, message);


    const api_id = "AKfycbzk5Wof9R28KYYh7eHnh7r7oCDDpdgGjWSRh5P6xZ2LnVVHAW4nagbfuxjOI8YrHffF4g";
    const url = `https://script.google.com/macros/s/AKfycbwpzS12DPDmf2CY9_KahyteQEg4dhWj2wmxUHTICSXszdnARL-m9jG8GPQ5_TEB8M_b4w/exec`
    const encoded_data = encodeURI(JSON.stringify({ name: name, email: email, subject: subject, message: message }))
    const request = `${url}?data=${encoded_data}`
    fetch(request).then(resp => resp.json()).then(data => console.log(data));
}