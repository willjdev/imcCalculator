//*********CALCULO DE IMC***********//

let nombreUsuario, edadUsuario, pesoUsuario, alturaUsuario, verificacion, usuario; //Declaramos las variables

let informacionUsuarios = []; //Inicializamos el arreglo que contendrá los objetos

let ciclo = true; //Variable de control del ciclo

class registroUsuarios { //Creamos el constructor de objetos, los cuales serán los usuarios
    constructor(nombre, edad, altura, peso, imc) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.imc = imc;
    }
}

do { //Ciclo do while que pone en funcionamiento las funciones construidas y agrega los objetos al arreglo
    verificarInformacion();
    if(verificacion) {
        let calculo = calculoPeso(alturaUsuario, pesoUsuario);
        alert(calculo);
        crearObjeto(nombreUsuario, edadUsuario, alturaUsuario, pesoUsuario, calculo);
        informacionUsuarios.push(usuario);
        ciclo = false;
        console.log(informacionUsuarios);
    }
} while (ciclo === true);

//FUNCIONES

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

function verificarInformacion () { //Función para verificar la validez de los datos suministrados
    nombreUsuario = prompt("Ingrese su nombre");
    edadUsuario = prompt("Ingrese su edad");
    pesoUsuario = prompt("Ingrese su peso en kilogramos");
    alturaUsuario = prompt("Ingrese su altura en metros");

    if (isNaN(edadUsuario) || isNaN(pesoUsuario) || isNaN(alturaUsuario)) {
        alert("Ingrese información valida");
        return verificacion = false;
    } else {
        verificacion = true;
        return nombreUsuario, edadUsuario, pesoUsuario, alturaUsuario, verificacion;
    }
}

function crearObjeto (nombre, edad, altura, peso, imc) { //Funcion instanciadora de objetos usuario
    usuario = new registroUsuarios(nombre, edad, altura, peso, imc);
    return usuario;
}












