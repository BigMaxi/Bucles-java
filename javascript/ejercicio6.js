let resultado = 0;
let operacion = 'suma';

while (true) {
  const entrada = prompt("Ingrese un número o 'suma', 'resta', 'multiplicación', 'división', o '=' para obtener el resultado:");

  if (entrada === "=") {
    console.log(`El resultado final es: ${resultado}`);
    break;
  }

  const numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    if (operacion === 'suma') {
      resultado += numero;
    } else if (operacion === 'resta') {
      resultado -= numero;
    } else if (operacion === 'multiplicación') {
      resultado *= numero;
    } else if (operacion === 'división') {
      if (numero !== 0) {
        resultado /= numero;
      } else {
        console.log("No se puede dividir por cero.");
      }
    }
  } else if (['suma', 'resta', 'multiplicación', 'división'].includes(entrada)) {
    operacion = entrada;
  } else {
    console.log("Entrada no válida. Ingrese un número o una operación válida.");
  }
}
