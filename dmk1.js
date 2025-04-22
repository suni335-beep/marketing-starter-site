// Add simple scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("ol li");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        items.forEach((item, index) => {
            const top = item.getBoundingClientRect().top;
            if (top < windowHeight - 50) {
                item.style.transitionDelay = `${index * 0.1}s`;
                item.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// Add class to animate list items when visible
const style = document.createElement("style");
style.textContent = `
    ol li {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease-in-out;
    }
    ol li.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
