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

});