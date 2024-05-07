console.log("Hola mundo")


function mostrar(valor = "[0-9]*"){
    document.getElementById("resultado_caja_basica").innerHTML=("Total a pagar es: $") + (valor * 400) + (" pesos");
}

function show(valor = "[0-9]*"){
    document.getElementById("resultado_caja_plus").innerHTML = ("Total a pagar es: $") + (valor * 750) + (" pesos");
}

function muestra(valor = "[0-9]*"){
    document.getElementById("resultado_caja_premium").innerHTML = ("Total a pagar es: $") + (valor * 1000) + (" pesos");
}

function enseña(valor = "[0-9]*") {
    document.getElementById("resultado_caja_lunch").innerHTML = ("Total a pagar es: $") + (valor * 450) + (" pesos");
}