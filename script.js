// SMOOTH REVEAL ON SCROLL
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// FORM INTERACTION
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    btn.textContent = "SENDING PROTOCOL...";
    
    setTimeout(() => {
        btn.style.background = "#3498db";
        btn.textContent = "INQUIRY RECEIVED";
    }, 1500);
});
