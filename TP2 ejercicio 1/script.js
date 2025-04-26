let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Titulo cambiado con JavaScript";

let parrafos = document.getElementsByClassName("parrafo");
for (let p of parrafos) {
  p.style.color = "blue";
}

let elementosLi = document.querySelectorAll("#contenedor li");
elementosLi.forEach((li, index) => {
  li.textContent += " (modificado)";
});