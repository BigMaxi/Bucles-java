function obtenerNumero() {
    const numero = prompt("Ingrese un número o el símbolo '=' para finalizar:");
  
    // Devolver el número ingresado
    return numero;
  }
  
  function calcularSuma(numeros) {
    let suma = 0;
  
    for (const numero of numeros) {
      if (numero === "=") {
        return suma;
      }
  
      suma += Number(numero);
    }
  
    return suma;
  }
  
  function mostrarSuma(suma) {
    console.log(`La suma de los números ingresados es: ${suma}`);
  }
  
  const numeros = [];
  let numero = obtenerNumero();
  
  while (numero !== "=") {
    numeros.push(numero);
    numero = obtenerNumero();
  }
  
  const suma = calcularSuma(numeros);
  
  mostrarSuma(suma);