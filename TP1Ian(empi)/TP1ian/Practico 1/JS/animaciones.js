document.addEventListener("DOMContentLoaded", () => {
    console.log("📦 animaciones.js cargado!");

    const elementos = document.querySelectorAll("nav, section, h1, p, img, footer");
    elementos.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(100px)";
        el.style.transition = "all 0.8s ease";

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 300);
    });

    // Animación para el menú desplegable
    const navLinks = document.getElementById("nav-links");
    const toggleBtn = document.getElementById("menu-toggle");

    if (navLinks && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                navLinks.style.opacity = 0;
                navLinks.style.transform = "translateY(-30px)";
                setTimeout(() => {
                    navLinks.style.transition = "all 0.5s ease";
                    navLinks.style.opacity = 1;
                    navLinks.style.transform = "translateY(0)";
                }, 100);
            }
        });
    }
});