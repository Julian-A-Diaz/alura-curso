
var titulo = document.querySelector(".titulo"); // capturo el componente HTML desde JS
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Buena vida Nutrición"; // puedo modificar el contenido del H1 desde JS

//capturar el formulario del HTML en JS, en este caso captura el tr con clase ".paciente"
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
/*
console.log(tdpeso);
console.log(peso);
console.log(altura);
console.log(imc)
*/

for (ind = 0; ind < pacientes.length; ind++){

    var tdpeso = pacientes[ind].querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var tdaltura = pacientes[ind].querySelector(".info-altura");
    var altura = tdaltura.textContent;
    var tdimc = pacientes[ind].querySelector(".info-imc");
    
    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);

    if (!pesoValido){        
        //pesoValido = false;
        //el siguiente codigo es para agregar desde JS una clase css que fue previamente definida en el archivo index.css
        pacientes[ind].classList.add("paciente-incorrecto");
    }
    
    if (!alturaValida) {
        //alturaValida = false;
        pacientes[ind].classList.add("paciente-incorrecto");
    }    
    
    //Calculo de IMC   imd = peso / (altura * altura)
    if (pesoValido &&  alturaValida){
        //var imc = (peso / (altura * altura));
        tdimc.textContent =  calcularIMC(peso, altura) //imc.toFixed(2);
    }
    else{
        tdimc.textContent = "Valores de peso y/o altura fuera de los parametros";
    }
}

function calcularIMC(vpeso, valtura){
    var imc =  (vpeso / (valtura * valtura));
    return imc.toFixed(2);
}

function validarPeso(peso){
    if (peso >= 0 && peso <= 200){
        return true;
    }
    else{
        return false;
    }
}

function validarAltura(altura){
    if (altura >= 0 && altura <= 2.20){
        return true;
    }
    else{
        return false;
    }
}


