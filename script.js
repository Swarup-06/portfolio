
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill all fields!";
    }
    else {
        msg.style.color = "green";
        msg.textContent = "Message sent successfully!";
        this.reset();
    }
});