//Validador de tarjetas bancarias
// Dato: La mayoria de tarjetas tienen 16 digitos ...
function validarTarjeta() {
  // Nos aseguramos que la alerta no sea visible antes de una nueva validación
  let alerta = document.getElementById("alerta");
  // Limpiamos el contenido
  alerta.innerText ="";
  // Limpiamos la clase
  alerta.className="";
  
  let msj = document.getElementById("msj-secreto");
  // Obtenemos el valor del input de la tarjeta
  let digitosTC = msj.value;
  
  // Validamos que el campo no esté vacio
  if (digitosTC.length == 0) {
    // Damos el estilo y contenido de inválido a la alerta
    alerta.innerText = "tarjeta inválida";
    alerta.className = "alerta-error";
  
    // Retornamos false porque no sería válido
    return false;
  }

  // Paso 1: Almacenar los dígitos en orden inverso
  // Almacenamos cada caracter de una string, como elemento de un array
  let arrTC = Array.from(digitosTC);
  // Invertimos el orden de los elementos del array
  let arrInverso = arrTC.reverse();
  
  // Paso 2: Multiplicar por 2 los dígitos en posición par (contados desde 1, no desde 0)
  // Declaramos nuestra variable auxiliar
  let digitoPar;
  
  // Recorremos el array inverso
  for (let i = 1; i <= arrInverso.length; i += 2) {
    // Covertimos el elemento (string) a number, para poder operarlo  
    digitoPar = parseInt(arrInverso[i]);
    // Duplicamos el número
    digitoPar *= 2;

    // Si el número es mayor o igual a 10, sumamos los dígitos
    if(digitoPar >= 10){
      // Para sumar los dígitos, convertimos el número a string
      digitoPar = digitoPar.toString();
      // Sumamos los dígitos indexando la string y convirtiendo a number
      digitoPar = parseInt(digitoPar[0]) + parseInt(digitoPar[1]);
    }

    // Ahora reemplazamos el número en la posición correspondiente
    arrInverso[i] = digitoPar.toString();
  }

  // Paso 3: Sumar todos los dígitos obtenidos en el paso anterior
  // Inicialiazamos la suma en 0 (operador neutro)
  let suma = 0;

  // Recorremos el array inverso y sumamos cada elemento
  for (let i = 0; i < arrInverso.length; i++) {
    // Sumamos el elemento convertido a number
    suma += parseInt(arrInverso[i]);
  }
      
  // Paso 4: Validar si el número es múltiplo de 10
  if(suma % 10 == 0) {
    // Damos el estilo y contenido de válido a la alerta
    alerta.innerText = "Tarjeta Válida";
    alerta.className = "alerta-valida";

    // Retornamos true porque sería válido
    return true;
  } else {
    // Damos el estilo y contenido de inválido a la alerta
    alerta.innerText = "Tarjeta inválida";
    alerta.className = "alerta-error";

    // Retornamos false porque no sería válido
    return false;
  }
}

// Enmascarar dígitos
// Ocultaremos todos los dígitos de la tarjeta, excepto los últimos 4
function enmascarar() {
  let numero = document.getElementById ("numero-tarjeta")
  // Obtenemos el valor del input de la tarjeta
  let digitosTC = numero.value;
  let cantidadDigitos = digitosTC.length;

  if (cantidadDigitos > 4) {
    let digitosEnmascarar = cantidadDigitos - 4;

    for (let i = 0; i < digitosEnmascarar; i++) {
      // Reemplazamos cada dígito por un asterisco
      digitosTC = digitosTC.replace(digitosTC[i], "*");
    }
  }

  document.getElementById("svgnumber").innerHTML = digitosTC;
}

// Vinculamos la función
document.getElementById("btn-validar").addEventListener("click", function () {
  // Validamos la tarjeta
  let valida = validarTarjeta();

  // Si es válida, enmascaramos los dígitos
  if (valida) {
    enmascarar();
    // Limpiamos el input
    document.getElementById("numero-tarjeta").value = "";
    // Ocultamos el botón
    this.hidden = true;
  }
});