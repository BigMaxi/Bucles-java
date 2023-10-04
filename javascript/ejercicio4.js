function cuentaRegresiva(numero) {

    if (numero % 5 !== 0) {
      console.log("El número ingresado no es múltiplo de 5");
      return;
    }

    let i = numero;
  

    do {

      console.log(i);
  

      i -= 1;
    } while (i >= 0);
  }
  

  const numero = prompt("Ingrese un número múltiplo de 5:");
  

  cuentaRegresiva(numero);