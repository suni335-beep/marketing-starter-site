// dmk2.js

// Animate button on hover
const button = document.querySelector("button");
button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
    button.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
});
button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "none";
});

// Add simple fade-in effect to form on page load
window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.style.opacity = 0;
    form.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        form.style.opacity = 1;
    }, 300);
});

// Optional: Validate email field more strictly before submission
document.querySelector("form").addEventListener("submit", (e) => {
    const emailInput = document.querySelector("input[placeholder='enter your email id']");
    const email = emailInput.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        e.preventDefault(); // Prevent submission
    }
});
