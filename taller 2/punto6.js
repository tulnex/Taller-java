// Función para generar una opción aleatoria para la computadora
function generarOpcionAleatoria() {
    let opciones = ["piedra", "papel", "tijera"];
    let opcionAleatoria = opciones[Math.floor(Math.random() * opciones.length)];
    return opcionAleatoria;
    }
  // Función para determinar el resultado del juego
    function determinarResultado(usuario, computadora) {
    if (usuario === computadora) {
    return "Empataste";
    } else if (usuario === "piedra" && computadora === "tijera" ||
            usuario === "papel" && computadora === "piedra" ||
            usuario === "tijera" && computadora === "papel") {
    return "Ganaste";
    } else {
    return "Perdiste";
    }
}
  // Pedimos al usuario que ingrese su opción
    let opcionUsuario = prompt("Ingresa piedra, papel o tijera:");
  // Generamos la opción aleatoria de la computadora
    let opcionComputadora = generarOpcionAleatoria();
  // Determinamos el resultado del juego
    let resultado = determinarResultado(opcionUsuario, opcionComputadora);
  // Mostramos el resultado en la consola
    console.log(`Usuario: ${opcionUsuario}`);
    console.log(`Computadora: ${opcionComputadora}`);
    console.log(`Resultado: ${resultado}`);
