window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("msj-secreto").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    });
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("msj-secreto").value;
        let desplazamiento = document.getElementById("clave").value;
        document.getElementById("msj-encriptado").value = cifrar(texto, desplazamiento);
        document.getElementById("msj-secreto").value = "";
    });

    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("msj-secreto").value;
        let desplazamiento = document.getElementById("clave").value;
        document.getElementById("msj-encriptado").value = descifrar(texto, clave);
        document.getElementById("msj-secreto").value = "";
    });
}

function cifrar(texto, desplazamiento) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ"
    let vocales = "ÁÉÍÓÚ"
    let numeros = "0123456789";
    let otros = `!¡¿?()=-+`

    const caracteres = letras + vocales + numeros + otros;

    desplazamiento = (desplazamiento % caracteres.length + caracteres.length) % caracteres.length;
    console.log(caracteres);
    console.log(texto);

    for (let i = 0; i < texto.length; i++) {
        if (caracteres.indexOf(texto[i]) != -1) {
            let posicion = ((caracteres.indexOf(texto[i]) + desplazamiento) % caracteres.length);
            resultado += caracteres[posicion];
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}

function descifrar(texto, desplazamiento) {

    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
    let vocales = "ÁÉÍÓÚ"
    let numeros = "0123456789";
    let otros = `!¡¿?()=-+`

    const caracteres = letras + vocales + numeros + otros;
    //  Esto es por si la clave es negativa
    //desplazamiento = (desplazamiento % 26 - 26) % 26;
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

const inputNumber = document.querySelector(".card input");

const addValue = () => {
    inputNumber.value = Number(inputNumber.value) + 1;
};

const subtractValue = () => {
    if (inputNumber.value > 0) {
        inputNumber.value = Number(inputNumber.value) - 1;
    }
};