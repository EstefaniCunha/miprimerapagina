//alert("Hola este es mi Javascript");

// CONDICIONALES

let nombre = "Acerca de mi";
console.log (nombre);

//SELECCIONAR ELEMENTOS
let contenidoTitulo = "Nombre";
let titulo = document.querySelector (".acerca-de h2");
if (titulo) {
titulo.innerHTML = contenidoTitulo;
};

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log (textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
} else {
    console.log ("No se cumple");
};

//FUNCIONES

let nombre1 = "Maria";
let ciudad = "Caneones";
let gusto = "chocolates";

let parrafo = document.querySelector (".parrafo2");

function cambiarTexto (nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre1}, soy de ${ciudad}, Uruguay. Me gustan los ${gusto} y mi color favorito es el rosado. Me emociona aprender programación porque puedo combinar mis dos pasiones, el diseño y la tecnología.`;

    return contenido;
}

parrafo.innerText = cambiarTexto (nombre1, ciudad, gusto);



const form = document.getElementById("form");
const nombre2 = document.getElementById("nombre2");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});