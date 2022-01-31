var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input",function(){
   // console.log("ingresaron un valor en el campo");
    //console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    //console.log(pacientes);

    if(this.value.length > 0)
    {
        for (ind = 0; ind< pacientes.length;ind++){
            var paciente = pacientes[ind];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;

            //Se usan las expresiones regulares para hacer busquedas de texto o parte de un texto
            //el parametro "i" indica que no hace distincion de mayusculas
            var expresion = new RegExp(this.value, "i");
       
            if (!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }
            else{
                paciente.classList.remove("invisible");
            }    
        }
    }
    else{
        for (ind = 0; ind < pacientes.length; ind++){
            var paciente = pacientes[ind];
            paciente.classList.remove("invisible");
        }         
    }
});
