// Declaración de la variables
let numFactorial = document.getElementById('factorial');
let numParImpar = document.getElementById('imparPar');
let numPrimo = document.getElementById('primo');
let numero = 0;

function funcionPreguntar() {
    do {
        numero = prompt("Ingrese aquí el número");
    } while (numero > 100 || numero < 1 || isNaN(numero));

    //***************************Metodo para saber si la función es factorial***************
    let NumFactorial = function (numero) {
        let Facto = 1;
        // Se empieza desde 0 para que empiece a multiplicar de ese mismo hasta el número digitado
        for (i = 1; i <= numero; i++) {
            Facto = Facto * i;
        }
        return Facto;
    }
    // LLama a la función   
    window.totalFacto = NumFactorial(numero);


    //****************************Metodo para saber si la función es par o impar*************
    window.resultadoPI = "";

    // Si el número es divisible entre 2 y el residuo es 0 entonces se establece el resultado de "1"
    let parOimpar = new Function("numero", "return numero = numero % 2 == 0 ? 1 : 0")
    // % es para saber el residuo de una división, devuelve el entero
    let resultado = parOimpar(numero);

    // Si resultado2 tiene un 1 es par, de lo contrario es impar
    if (resultado == 1) {

        resultadoPI = "Par"

    } else {

        resultadoPI = "Impar";

    }

    //*************************************Metodo para saber si un número es primo**************
    window.esPrimo = "";
    if (numero == 0 || numero == 1 || numero == 4) window.esPrimo = "NO";
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i == 0) {
            window.esPrimo = "NO";
        } else {
            // Si no se pudo dividir por ninguno de los de arriba, sí es primo
            window.esPrimo = "SI";
        }

    }

    //*********************************Metodo para saber si es primo o no***********************
    let esPrimo = (function () {

        if (numero == 0 || numero == 1 || numero == 4)

            return "NO";

        for (let i = 2; i < numero / 2; i++) {

            if (numero % i == 0)

                return "NO";
        }
        // Sino entro en las condiciones de antes es primo
        return "SI";

    }());

    window.resultadoPrimo = esPrimo;

}


// PARA LOS NÚMEROS FACTORIALES
// Si se colocan los () vacios al llamar una función fallará el eventListener
numFactorial.addEventListener("mouseleave", cambiarEstilos);
numFactorial.addEventListener("mouseleave", ingresarFactorial);

//PARA LOS NÚMEROS PARES O IMPARES
imparPar.addEventListener("mouseenter", cambiarEstilos);
imparPar.addEventListener("mouseleave", ingresarParImpar);

// PARA LOS NÚMEROS PRIMOS
numPrimo.addEventListener("mouseenter", cambiarEstilos);
numPrimo.addEventListener("mouseleave", ingresarPrimo);


// Esta función ingresa el resultado del factorial
function ingresarFactorial(params) {
    document.getElementById('numFact').innerHTML = totalFacto;
}

function ingresarParImpar() {
    document.getElementById('numParImp').innerHTML = resultadoPI;
}

function ingresarPrimo() {
    document.getElementById('numPrimo').innerHTML = resultadoPrimo;
}


// Al pasar el mouser se llama a esta función
function cambiarEstilos() {
    numFactorial.setAttribute("class", "estilosAdicionales");
    // numFactorial.className +=  "estilosAdicionales";
    numParImpar.setAttribute("class", "estilosAdicionales");
    numPrimo.setAttribute("class", "estilosAdicionales");
}