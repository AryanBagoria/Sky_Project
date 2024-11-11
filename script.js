
window.addEventListener('scroll', function () {
    var fixedButtons = document.getElementById('fixed-buttons');
    if (window.scrollY > 0) {
        fixedButtons.style.opacity = '0';
        fixedButtons.style.visibility = 'hidden';
        fixedButtons.style.pointerEvents = 'none';
    } else {
        fixedButtons.style.opacity = '1';
        fixedButtons.style.visibility = 'visible';
        fixedButtons.style.pointerEvents = 'auto';
    }
});


function validateForm() {
    // Form validation code
    return true;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone Number: " + phone_number);
    console.log("Message: " + message);

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var messageError = document.getElementById("messageError");

    var valid = true;

    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        valid = false;
    } else {
        var nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            nameError.innerHTML = "Name must contain only alphabets";
            valid = false;
        } else {
            nameError.innerHTML = "";
        }
    }

    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        valid = false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.innerHTML = "Invalid email format";
            valid = false;
        } else {
            emailError.innerHTML = ""; 
        }
    }

    if (phone_number.trim() === "") {
        phoneError.innerHTML = "Phone number is required";
        valid = false;
    } else {
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone_number)) {
            phoneError.innerHTML = "Invalid phone number format";
            valid = false;
        } else {
            phoneError.innerHTML = ""; 
        }
    }

    if (message.trim() === "") {
        messageError.innerHTML = "Message is required";
        valid = false;
    } else {
        messageError.innerHTML = ""; 
    }

    if (valid) {
        // If all validations are successful, redirect to thank you page
        window.location.href = "https://itboost.me/sandbox/aryan/Thankyou/thankyou.html";
    }

    return valid;
}

window.addEventListener('scroll', function () {
    var fixedButtonsLeft = document.getElementById('fixed-buttons-left');
    if (window.scrollY > 0) {
        fixedButtonsLeft.style.opacity = '0';
        fixedButtonsLeft.style.visibility = 'hidden';
        fixedButtonsLeft.style.pointerEvents = 'none';
    } else {
        fixedButtonsLeft.style.opacity = '1';
        fixedButtonsLeft.style.visibility = 'visible';
        fixedButtonsLeft.style.pointerEvents = 'auto';
    }
});

window.addEventListener('scroll', function () {
    var fixedButtonsLeft1 = document.getElementById('fixed-buttons-left1');
    if (window.scrollY > 0) {
        fixedButtonsLeft1.style.opacity = '0';
        fixedButtonsLeft1.style.visibility = 'hidden';
        fixedButtonsLeft1.style.pointerEvents = 'none';
    } else {
        fixedButtonsLeft1.style.opacity = '1';
        fixedButtonsLeft1.style.visibility = 'visible';
        fixedButtonsLeft1.style.pointerEvents = 'auto';
    }
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
