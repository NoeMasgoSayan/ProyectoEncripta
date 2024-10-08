window.addEventListener('load', inicio);

function inicio() {
  // Mensaje secreto
  document.getElementById("msj-secreto").addEventListener("keyup", function() {
    this.value = this.value.toUpperCase();
  });
  // Botón de cifrar
  document.getElementById("cifrar").addEventListener("click", function() {
    let texto = document.getElementById("msj-secreto").value;
    let desplazamiento = document.getElementById("clave").value;
    document.getElementById("msj-encriptado").value = cifrar(texto, desplazamiento);
    document.getElementById("msj-secreto").value = "";
    //this.hidden = true;
  });
  // Botón de descifrar
  document.getElementById("descifrar").addEventListener("click", function() {
    let texto = document.getElementById("msj-secreto").value;
    let desplazamiento = document.getElementById("clave").value;
    document.getElementById("msj-encriptado").value = descifrar(texto, desplazamiento);
    document.getElementById("msj-secreto").value = "";
    //this.hidden = true;
  });
}

function cifrar(texto, desplazamiento) {
  let resultado = "";
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ"
  let vocales = "ÁÉÍÓÚ"
  let numeros = "0123456789";
  let otros = `!¡¿?()=-+`

  const caracteres = letras + vocales + numeros + otros;
  // Asegura que el desplazamiento esté dentro del rango de los índices de la cadena, siempre positivo
  //desplazamiento = (desplazamiento % 26 + 26) % 26;
  desplazamiento = (desplazamiento % caracteres.length + caracteres.length) % caracteres.length;
  
  for (let i = 0; i < texto.length; i++) {
    if (caracteres.indexOf(texto[i]) != -1) {
      let position = ((caracteres.indexOf(texto[i]) + desplazamiento) % caracteres.length);
      resultado += caracteres[position];
    } else {
      resultado += texto[i];
    }
  }
  return resultado;
}

function descifrar (texto, desplazamiento) {

  let resultado = "";
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
  let vocales = "ÁÉÍÓÚ"; 
  let numeros = "0123456789";
  let otros = `!¡¿?()=-+`

  const caracteres = letras + vocales + numeros + otros;
  // Asegura que el desplazamiento esté dentro del rango de los índices de la cadena, siempre positivo
  // desplazamiento = (desplazamiento % 26 - 26) % 26;
  desplazamiento = (desplazamiento % caracteres.length - caracteres.length) % caracteres.length;
  for (let i = 0; i < texto.length; i++) {
    if (caracteres.indexOf(texto[i]) != -1) {
      let position = ((caracteres.indexOf(texto[i]) - desplazamiento) % caracteres.length);
      resultado += caracteres[position];
    } else {
      resultado += texto[i];
    }
  } 
  return resultado;
}

// Input number

const inputNumber = document.querySelector(".card input");

const addValue = () => {
    inputNumber.value = Number(inputNumber.value) + 1;
};

const subtractValue = () => {
    if (inputNumber.value > 0) {
        inputNumber.value = Number(inputNumber.value) - 1;
    }
};