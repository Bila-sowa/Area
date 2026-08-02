const items = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
}, { threshold: 0.25 });

items.forEach(el => observer.observe(el));
