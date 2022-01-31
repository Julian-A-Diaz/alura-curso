var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",buscarPaciente);

function buscarPaciente(event){
    //console.log("Buscando paciente");

    //este objeto se usa para hacer requisiciones HTTP  para intercambiar datos con un servidor
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){

        var errorAjax = document.querySelector("#error-ajax");


      if (xhr.status == 200)  {
          errorAjax.classList.add("invisible");
        var respuesta = xhr.responseText;
        // console.log(respuesta);
        //console.log(typeof respuesta);

        var pacientes = JSON.parse(respuesta);
        //console.log(pacientes);
        //console.log(typeof pacientes);

        pacientes.forEach(function(paciente){
            adicionarPacienteExterno(paciente);
            console.log(paciente);
        });
      }
      else{
          console.log(xhr.status);
          console.log(xhr.responseText);
          errorAjax.classList.remove("invisible");
      }
        
    });
    xhr.send();
}