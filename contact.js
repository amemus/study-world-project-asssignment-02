

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");


contactForm.addEventListener("input", function () {

    if (contactForm.checkValidity()) {
        formStatus.textContent = "All fields are filled correctly!";
    } else {
        formStatus.textContent = "Please complete all fields correctly.";
    }

});


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (contactForm.checkValidity()) {
        formStatus.textContent = "Thank you! Your message is ready.";
        contactForm.reset();
    }

});
