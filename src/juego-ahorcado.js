// Palabras disponibles para adivinar
var palabras = ["amor", "corazón", "romance", "beso", "compromiso", "novia"];

// Selecciona una palabra aleatoria de la lista
var palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Crea una cadena con guiones bajos para representar la palabra oculta
var palabraOculta = "_".repeat(palabraSeleccionada.length);

// Crea una variable para contar los intentos fallidos
var intentosFallidos = 0;

// Función para adivinar una letra
function adivinar(letra) {
  var letraEncontrada = false;
  for (var i = 0; i < palabraSeleccionada.length; i++) {
    if (palabraSeleccionada[i] === letra) {
      palabraOculta = palabraOculta.substr(0, i) + letra + palabraOculta.substr(i + 1);
      letraEncontrada = true;
    }
  }
  if (!letraEncontrada) {
    intentosFallidos++;
  }
  console.log(palabraOculta);
  if (palabraOculta === palabraSeleccionada) {
    console.log("Escribe la variable quieresSerMiNovia en la consola.");
  }
}

// Ejemplo de uso
adivinar("a"); // Debería mostrar "_ _ _ _"
adivinar("o"); // Debería mostrar "_ o _ _"
adivinar("r"); // Debería mostrar "_ o r _"
adivinar("m"); // Debería mostrar "m o r _"
adivinar("e"); // Debería mostrar "m o r e"
// Si tu novia escribe "quieresSerMiNovia" en la consola, se mostrará el mensaje "¡Sí quiero ser tu novia!" en la página web.