/*window.addEventListener('load', inicio, true);

function inicio() {
  // Mensaje secreto
  document.getElementById("msj-secreto").addEventListener("keyup", function() {
    this.value = this.value.toLowerCase();
  }, true);
  // Botón de cifrar
  document.getElementById("cifrar").addEventListener("click", function() {
    let texto = document.getElementById("msj-secreto").value;
    let desplazamiento = document.getElementById("clave").value;
    document.getElementById("msj-encriptado").value = cifrar(texto, desplazamiento);
  }, true);
  // Botón de descifrar
  document.getElementById("descifrar").addEventListener("click", function() {
    let texto = document.getElementById("msj-secreto").value;
    let desplazamiento = document.getElementById("clave").value;
    document.getElementById("msj-encriptado").value = descifrar(texto, desplazamiento);
  }, true);
}
*/

function cifrar(texto, desplazamiento) {
  let resultado = "";
  let letras = "abcdefghijklmnopqrstuvwxyz";
  //  Esto es por si la clave es negativa
  desplazamiento = (desplazamiento % 26 + 26) % 26;

  for (let i = 0; i < texto.length; i++) {
    if (letras.indexOf(texto[i]) != -1) {
      let position = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
      resultado += letras[position];
    } else {
      resultado += texto[i];
    }
  } 
  return resultado;
}

function descifrar (texto, desplazamiento) {
  let resultado = "";
  let letras = "abcdefghijklmnopqrstuvwxyz";
  //  Esto es por si la clave es negativa
  desplazamiento = (desplazamiento % 26 - 26) % 26;

  for (let i = 0; i < texto.length; i++) {
    if (letras.indexOf(texto[i]) != -1) {
      let position = ((letras.indexOf(texto[i]) - desplazamiento) % 26);
      resultado += letras[position];
    } else {
      resultado += texto[i];
    }
  } 
  return resultado;
}

document.getElementById("cifrar").addEventListener("click", function() {
  let mensaje = document.getElementById("msj-secreto").value;
  let desplazamiento = parseInt(document.getElementById("clave").value);
  let texto = mensaje.toLowerCase();
  document.getElementById("msj-encriptado").value = cifrar(texto, desplazamiento);
});

document.getElementById("descifrar").addEventListener("click", function() {
  let mensaje = document.getElementById("msj-secreto").value;
  let desplazamiento = parseInt(document.getElementById("clave").value);
  let texto = mensaje.toLowerCase();
  document.getElementById("msj-encriptado").value = descifrar(texto, desplazamiento);
});