// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Cloud Engineer', 'DevOps Engineer', 'CI/CD Engineer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});






    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });
// EmailJS Contact Form
emailjs.init("W3dTCDnVjZicTDJW2");

document.getElementById("contact-submit").addEventListener("click", function () {
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  const status = document.getElementById("contact-status");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return;
  }

  status.style.color = "white";
  status.textContent = "Sending...";

  emailjs.send("service_5dlukkf", "template_q5p977j", {
    from_name: name,
    from_email: email,
    message: message,
  })
  .then(function () {
    status.style.color = "#00D1FF";
    status.textContent = "Message sent! I'll get back to you soon.";
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-message").value = "";
  })
  .catch(function () {
    status.style.color = "red";
    status.textContent = "Something went wrong. Email me directly.";
  });
});





