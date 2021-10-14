function funcionPreguntar() {
    let numero = 0;
    do {
        numero = prompt("Ingrese aquí el número");
    } while (numero > 100 || numero < 1);

    //Metodo para saber si la función es factorial
    window.totalFacto = 1;
    // Se empieza desde 0 para que empiece a multiplicar de ese mismo hasta el número digitado
    for (i = 1; i <= numero; i++) {
        window.totalFacto = window.totalFacto * i;
    }

    //Metodo para saber si la función es par o impar
    window.parOimpar = "";
    // % es para saber el residuo de una división, devuelve el entero
    if (numero % 2 == 0)
        window.parOimpar = "par";
    else
        window.parOimpar = "impar";

    // Metodo para saber si un número es primo
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
}

// Declaración de la variables
let numFactorial = document.getElementById('factorial');
let numParImpar = document.getElementById('imparPar');
let numPrimo = document.getElementById('primo');

// PARA LOS NÚMEROS FACTORIALES
// Si se colocan los () al llamar una función fallará el eventListener
numFactorial.addEventListener("mouseleave", cambiarEstilos);
numFactorial.addEventListener("mouseleave", mostrarFacto);

// Al pasar el mouser se llama a esta función
function cambiarEstilos() {
    numFactorial.setAttribute("class", "estilosAdicionales");
    // numFactorial.className +=  "estilosAdicionales";
    numParImpar.setAttribute("class", "estilosAdicionales");
    numPrimo.setAttribute("class", "estilosAdicionales");
}

function mostrarFacto() {
    document.getElementById('numFact').innerHTML = totalFacto
}

//PARA LOS NÚMEROS PARES O IMPARES
imparPar.addEventListener("mouseenter", cambiarEstilos);
imparPar.addEventListener("mouseleave", mostrarParImpar);

function mostrarParImpar() {
    document.getElementById('numParImp').innerHTML = parOimpar;
}

// PARA LOS NÚMEROS PRIMOS
numPrimo.addEventListener("mouseenter", cambiarEstilos);
numPrimo.addEventListener("mouseleave", mostrarPrimo);

function mostrarPrimo() {
    document.getElementById('numPrimo').innerHTML = esPrimo;
}