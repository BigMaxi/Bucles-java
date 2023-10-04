const numero = prompt("Ingrese un número impar:");

if (numero % 2 === 0) {
    alert("El número ingresado no es impar. Por favor, intente nuevamente.");
} 
else {
    console.log("El número ingresado es impar.");
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
      }
    
}