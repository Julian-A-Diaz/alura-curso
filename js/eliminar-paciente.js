
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    //setTimeout se usa para crear un efecto de retardo en el borrado del registro
    setTimeout(function(){
        event.target.parentNode.remove();
    },200)    
});

/*
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("hizo doble click sobre el paciente");    
        //la palabra reservada "this" hace referencia al elemento que esta activo en este momento, en este caso el registro de tr de un paciente en especifico
        //la instruccion remove eliminar el registro en el cual se hizo doble click (donde se capturó el evento)
        this.remove(); 
    });
});
*/
