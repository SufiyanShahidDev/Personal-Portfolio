const navs = document.querySelectorAll('.nav-list li')
const cube = document.querySelector('.box')
const sections = document.querySelectorAll('.section')

const resumeLists = document.querySelectorAll('.resume-list')
const resumeBoxs = document.querySelectorAll('.resume-box')
const portfolioLists = document.querySelectorAll('.portfolio-list')
const portfolioBoxs = document.querySelectorAll('.portfolio-box')


// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active')
        nav.classList.add('active')

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active')
        sections[idx].classList.add('active')

        const array = Array.from(sections)
        const arrSecs = array.slice(1, -1)
        arrSecs.forEach(arrSecs => {
            if (arrSecs.classList.contains('active')) {
                sections[4].classList.add('action-contact')
            }
        })

        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact')
        }
    })
})

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active')
        list.classList.add('active')

        document.querySelector('.resume-box.active').classList.remove('active')
        resumeBoxs[idx].classList.add('active')
    })
})

// portfolio section when clicking tab-list

portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active')
        list.classList.add('active')

        document.querySelector('.portfolio-box.active').classList.remove('active')
        portfolioBoxs[idx].classList.add('active')
    })

})

// visibility for contact section when reloading (cube reloading animation)

setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500)

// sweetAlert

const sweetAlert = (error, title, message) => {
    Swal.fire({
        icon: error,
        title: title,
        text: message,
    });
}

// form validation

let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone-number");
let subject = document.getElementById("email-subject");
let message = document.getElementById("message");

let sendBtn = document.querySelector(".contact-form .btn");

let contactsArr = JSON.parse(localStorage.getItem("contacts") || "[]");

const contactHandler = function (e) {

    if (e && e.preventDefault) e.preventDefault();

    const sweetAlert = function (icon, title, text) {
        if (typeof Swal !== "undefined" && Swal.fire) {
            Swal.fire({ icon: icon, title: title, text: text });
        } else {
            alert(title + "\n\n" + text);
        }
    };

    const nameMin = 3;
    const messageMin = 10;
    const phoneMinDigits = 10;
    const phoneMaxDigits = 15;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const getDigits = function (s) { return (s || "").replace(/\D/g, ""); };

    const nameVal = (fullname && fullname.value || "").trim();
    const emailVal = (email && email.value || "").trim();
    const phoneVal = (phone && phone.value || "").trim();
    const subjectVal = (subject && subject.value || "").trim();
    const messageVal = (message && message.value || "").trim();

    if (nameVal.length < nameMin) {
        sweetAlert("error", "Invalid Name", "Full Name must be at least " + nameMin + " characters.");
        if (fullname) fullname.focus();
        return;
    }

    if (!emailRegex.test(emailVal)) {
        sweetAlert("error", "Invalid Email", "Please enter a valid email address.");
        if (email) email.focus();
        return;
    }

    const phoneDigits = getDigits(phoneVal);
    if (phoneDigits.length < phoneMinDigits || phoneDigits.length > phoneMaxDigits) {
        sweetAlert("error", "Invalid Phone", "Phone number must contain " + phoneMinDigits + "–" + phoneMaxDigits + " digits.");
        if (phone) phone.focus();
        return;
    }

    if (subjectVal === "") {
        sweetAlert("error", "Missing Subject", "Email Subject cannot be empty.");
        if (subject) subject.focus();
        return;
    }

    if (messageVal.length < messageMin) {
        sweetAlert("error", "Message Too Short", "Message must be at least " + messageMin + " characters.");
        if (message) message.focus();
        return;
    }

    const contactData = {
        fullName: nameVal,
        email: emailVal,
        phone: phoneVal,
        phoneDigitsOnly: phoneDigits,
        subject: subjectVal,
        message: messageVal,
        submittedAt: new Date().toISOString()
    };

    contactsArr.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(contactsArr));

    console.log("Contact saved. Current contacts array:");
    console.table(contactsArr);

    sweetAlert("success", "Message Sent", "Your message was validated and saved to localStorage.");

    if (fullname) fullname.value = "";
    if (email) email.value = "";
    if (phone) phone.value = "";
    if (subject) subject.value = "";
    if (message) message.value = "";
};

if (sendBtn) {
    sendBtn.addEventListener("click", contactHandler);
} else {
    const formEl = document.querySelector(".contact-form");
    if (formEl) formEl.addEventListener("submit", contactHandler);
}