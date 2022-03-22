//CALCULO DE IMC

function calculoPeso (altura, peso) { //Funcion para calcular imc y retornar el resultado
    let calculo = (peso / (Math.pow(altura, 2))).toFixed(2);
    let imc = "";
    if (calculo < 18.5) {
        imc = "Su IMC es de " + calculo + " - Usted tiene bajo peso";
    } else if (calculo > 18.4 && calculo < 25) {
        imc = "Su IMC es de " + calculo + " - Usted tiene peso normal";
    } else if (calculo > 24.9 && calculo < 30) {
        imc = "Su IMC es de " + calculo + " - Usted tiene sobrepeso";
    } else if (calculo > 29.9){
        imc = "Su IMC es de " + calculo + " - Usted tiene obesidad";
    }
    return imc;
}

let ciclo = true; //Variable de control del ciclo

do { //Ciclo do while el cual es un bucle que no finaliza hasta que se ingresen datos validos
    let alturaUsuario = prompt("Ingrese su altura en metros:");
    let pesoUsuario = prompt("Ingrese su peso en kilogramos:");
    if (isNaN(alturaUsuario) || isNaN(pesoUsuario)) {
        alert("Ingrese un valor valido");
    } else {
        alert(calculoPeso(alturaUsuario, pesoUsuario));
        ciclo = false;
    }
} while (ciclo === true);



