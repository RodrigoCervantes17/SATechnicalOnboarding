var palabra = "SEÑORA";
var letras = [];
var palabraOculta = "";
var intentos = 6;

// Obtener el elemento del mensaje de consola
var mensajeConsolaElemento = document.getElementById("mensaje-consola");

// Obtener el elemento del botón de adivinar
var adivinarElemento = document.getElementById("adivinar");

// Obtener el elemento del input de letra
var letraElemento = document.getElementById("letra");

// Obtener el elemento de la palabra oculta
var palabraOcultaElemento = document.getElementById("palabra-oculta");

// Mostrar la palabra oculta inicial
for (var i = 0; i < palabra.length; i++) {
  if (palabra[i] === " ") {
    palabraOculta += " ";
  } else {
    palabraOculta += "_ ";
  }
}
palabraOcultaElemento.innerHTML = palabraOculta;

// Función para actualizar la palabra oculta con la letra ingresada
function actualizarPalabraOculta(letra) {
  letras.push(letra.toUpperCase());
  var palabraOcultaNueva = "";
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i].toUpperCase() === letra.toUpperCase()) {
      palabraOcultaNueva += letra.toUpperCase() + " ";
    } else if (palabraOculta[i*2] !== "_") {
      palabraOcultaNueva += palabraOculta[i*2] + " ";
    } else {
      palabraOcultaNueva += "_ ";
    }
  }
  palabraOculta = palabraOcultaNueva;
  palabraOcultaElemento.innerHTML = palabraOculta;
}

// Función para verificar si se ha completado la palabra
function verificarPalabraCompleta() {
  return palabraOculta.replace(/ /g,"") === palabra.toUpperCase();
}

// Función para mostrar el mensaje de éxito
function mostrarExito() {
  var exitoElemento = document.querySelector(".exito");
  exitoElemento.style.display = "block";
}

// Función para manejar el botón de adivinar
adivinarElemento.addEventListener("click", function() {
  var letra = letraElemento.value;
  if (letra && letra.length === 1) {
    if (letras.includes(letra.toUpperCase())) {
      mensajeConsolaElemento.innerHTML = "Ya ingresaste esa letra antes.";
    } else if (palabra.toUpperCase().includes(letra.toUpperCase())) {
      actualizarPalabraOculta(letra);
      if (verificarPalabraCompleta()) {
        mensajeConsolaElemento.innerHTML = "Introduce la palabra en la consola.";
      }
    } else {
      intentos--;
      if (intentos > 0) {
        mensajeConsolaElemento.innerHTML = "La letra no está en la palabra. Te quedan " + intentos + " intentos.";
      } else {
        mensajeConsolaElemento.innerHTML = "Ya no tienes intentos. La palabra era " + palabra.toUpperCase() + ".";
        mostrarExito();
      }
    }
  } else {
    mensajeConsolaElemento.innerHTML = "Ingresa una sola letra.";
  }
  letraElemento.value = "";
});

// Función para manejar la consola de JavaScript
console.log("Ingresa la palabra " + palabra + " en la consola para responder a la pregunta.");

// Manejar la respuesta de la consola
var respuestaConsola = function(respuesta) {
    if (respuesta.toUpperCase() === palabra.toUpperCase()) {
      console.log("¿Quieres ser mi novia? En caso de que sí, estaré abajo esperando una respuesta.");
    } else {
      console.log("La respuesta no es correcta.");
    }
  };
  
  // Agregar un listener para la respuesta de la consola
  window.addEventListener("message", function(event) {
    if (event.data && event.data.command === "secreto") {
      respuestaConsola(event.data.value);
    }
  });
