// MOBILE MENU

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


// ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventType = document.getElementById("eventType").value;
    const date = document.getElementById("eventDate").value;
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (name === "" || phone === "" || eventType === "") {

        formMessage.textContent =
            "Please fill all required details.";

        return;
    }


    if (phone.length < 10) {

        formMessage.textContent =
            "Please enter a valid phone number.";

        return;
    }


    formMessage.textContent =
        `Thank you ${name}! Your ${eventType} enquiry has been received.`;


    enquiryForm.reset();

});


// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", function(event) {

    const menu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});