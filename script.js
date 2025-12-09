// Typing Effect
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

// Smooth Scroll
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Active Nav on Scroll
window.addEventListener("scroll", () => {
    let pos = window.scrollY + 150;
    document.querySelectorAll("section").forEach(sec => {
        if (pos > sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active-link"));
            document.querySelector(`.nav-link[href='#${sec.id}']`).classList.add("active-link");
        }
    });
});

// Scroll Reveal
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();

// Back to Top
const backTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 400 ? "block" : "none";
});
backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Validation
document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value,
        email = document.querySelector("#email").value,
        msg = document.querySelector("#message").value,
        output = document.querySelector("#formMsg");

    if (!name || !email || !msg) {
        output.textContent = "Please fill out all fields.";
        output.style.color = "red";
        return;
    }

    output.textContent = "Message sent successfully!";
    output.style.color = "#00ff99";
    e.target.reset();
});

// Subscribe Popup
document.querySelector(".neon-btn.ms-3").addEventListener("click", () => {
    document.getElementById("subscribeBox").style.display = "block";
});

function sendSubscribe() {
    let email = document.getElementById("subEmail").value;

    if (!email) {
        alert("Please enter your email!");
        return;
    }

    alert("Subscribed successfully!");
    document.getElementById("subscribeBox").style.display = "none";
}
