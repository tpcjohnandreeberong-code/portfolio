// ------------------------------------------------------
//  EMAILJS INIT
// ------------------------------------------------------
emailjs.init("H_t7ri_-JfM7SviBH");

// ------------------------------------------------------
//  TYPING EFFECT
// ------------------------------------------------------
const typingText = ["Web Designer", "Frontend Developer", "UI/UX Creator"];
let i = 0, j = 0;

function typing() {
    document.querySelector(".typing").textContent = typingText[i].slice(0, j);
    j++;
    if (j > typingText[i].length) {
        j = 0;
        i = (i + 1) % typingText.length;
    }
    setTimeout(typing, 120);
}
typing();

// ------------------------------------------------------
//  SMOOTH SCROLL
// ------------------------------------------------------
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ------------------------------------------------------
//  ACTIVE NAV ON SCROLL
// ------------------------------------------------------
window.addEventListener("scroll", () => {
    let pos = window.scrollY + 150;
    document.querySelectorAll("section").forEach(sec => {
        if (pos > sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active-link"));
            let current = document.querySelector(`.nav-link[href='#${sec.id}']`);
            if (current) current.classList.add("active-link");
        }
    });
});

// ------------------------------------------------------
//  SCROLL REVEAL
// ------------------------------------------------------
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();

// ------------------------------------------------------
//  BACK TO TOP
// ------------------------------------------------------
const backTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 400 ? "block" : "none";
});
backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ------------------------------------------------------
//  SUBSCRIBE POPUP
// ------------------------------------------------------
document.querySelector(".neon-btn.ms-3").addEventListener("click", () => {
    document.getElementById("subscribeBox").style.display = "block";
});
function sendSubscribe() {
    let email = document.getElementById("subEmail").value;
    if (!email) return alert("Please enter your email!");
    alert("Subscribed successfully!");
    document.getElementById("subscribeBox").style.display = "none";
}

// ------------------------------------------------------
//  CONTACT FORM WITH EMAILJS
// ------------------------------------------------------
document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    let output = document.querySelector("#formMsg");

    if (!params.name || !params.email || !params.message) {
        output.textContent = "Please fill out all fields!";
        output.style.color = "red";
        output.style.textShadow = "0 0 10px red";
        return;
    }

    emailjs.send("service_zdl4c6k", "template_7eeyqig", params)
        .then(() => {
            output.textContent = "Message sent successfully!";
            output.style.color = "#00ff99";
            output.style.textShadow = "0 0 10px #00ff99";
            e.target.reset();
        })
        .catch((err) => {
            console.error(err);
            output.textContent = "Failed to send message!";
            output.style.color = "red";
            output.style.textShadow = "0 0 10px red";
        });
});
