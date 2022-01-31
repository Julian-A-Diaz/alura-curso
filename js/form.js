//ejemplo para crear un listener que capture un evento sobre un elemento HTML, en este caso
// sobre el boton que tiene como id "adicionar-paciente
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click",agregarPaciente);

function agregarPaciente(event){
    event.preventDefault(); //para que no se ejecute la recarga de la pagina por defecto al hacer click en el boton
    //console.log("Se disparo el evento click sobre el boton");

    //variables para capturar los valores ingresados en los campos del formulario
    var formulario = document.querySelector("#formAdicionar");

    //se llama a la funcion que captura los datos del paciente en un objeto a partir del formulario
    var paciente = capturaDatosPaciente(formulario);
    var pacienteTr = construirTr(paciente);
    
    var errores = validarPaciente(paciente);

    if (errores.length > 0){
        //console.log(errores);
        exhibirMensajesError(errores);
        return; //este return hace que se cancele la ejecucion del JS
    }

    var tabla = document.querySelector("#tabla-pacientes");
      //a la tabla tambien se le debe asignar  la fila (tr)
      tabla.appendChild(pacienteTr);

      //adicionar los pacientes capturados desde el archivo json externo
      //adicionarPacienteExterno(paciente); //xxxx
     // para limpiar los campos del formulario se hace un reset al final 
      formulario.reset();

      //el siguiente codigo limpia la lista ul donde se muestran los mensajes de error,
      //para que se borren de la pantalla despues de haber corregido los errores
      var mensajesErrores = document.querySelector("#mensajes-errores");  
      mensajesErrores.innerHTML = "";

      document.getElementById("nombre").focus();//para poner el foco nuevamente en el campo nombre del formulario
    }

    function adicionarPacienteExterno(paciente){
        var pacienteTr = construirTr(paciente);
        var tabla = document.querySelector("#tabla-pacientes");        
        tabla.appendChild(pacienteTr);  
    }

    //funcion para capturar los datos del paciente a partir del formulario que se pasa como parametro
    function capturaDatosPaciente(formulario){
        //se crea una variable tipo clase para almacenar los campos del paciente
        var  paciente = {
             nombre:  formulario.nombre.value,
             peso:  formulario.peso.value,
             altura: formulario.altura.value,
             gordura:  formulario.gordura.value,
             imc : calcularIMC(formulario.peso.value,formulario.altura.value)
        }
        return paciente;
    }

    function construirTr(paciente){
    /*ahora hay que crear nuevos elementos HTML de linea (tr)  y columna (td) para agregar la nueva informacion
      ingresada en el formulario*/
      var pacienteTr = document.createElement("tr");
      //a cada elemento tr y td se le asigna la clase para que en el HTML quede con la clase asociada
      pacienteTr.classList.add("paciente");
      
      var nombreTd = construirTd(paciente.nombre,"info-nombre");      
      var pesoTd = construirTd(paciente.peso,"info-peso");            
      var alturaTd = construirTd(paciente.altura,"info-altura");                  
      var gorduraTd = construirTd(paciente.gordura,"info-gordura");      
      var imcTd = construirTd(paciente.imc,"info-imc");
      
      //los elementos td se deben asociar al elemento tr padre
      pacienteTr.appendChild(nombreTd);
      pacienteTr.appendChild(pesoTd);
      pacienteTr.appendChild(alturaTd);
      pacienteTr.appendChild(gorduraTd);
      pacienteTr.appendChild(imcTd);

      return pacienteTr;        
    }

    //esta funcion crea el elemento td, recibe como parametro el dato y la clase que se les va a aplicar al td
    function construirTd(dato, clase){
        var td = document.createElement("td");
        //a cada elemento td se le asigna la clase para que en el HTML quede con la clase asociada            
        td.classList.add(clase);
        //se asocian los valores leidos en el formulario a las etiquetas td de HTML
        td.textContent = dato;
        return td;
    }

    function validarPaciente(paciente){
        var errores = [];

        if (paciente.nombre.length == 0){
            errores.push("Debe ingresar un nombre para el paciente");
        }

        if (paciente.peso.length == 0){
            errores.push("Debe ingresar un peso para el paciente");
        }

        if (paciente.altura.length == 0){
            errores.push("Debe ingresar una altura para el paciente");
        }

        if (paciente.gordura.length == 0){
            errores.push("Debe ingresar una gordura para el paciente");
        }

        if (!validarPeso(paciente.peso)){
            errores.push("El peso es incorrecto");
        }
        
        if (!validarAltura(paciente.altura)){
            errores.push("La altura es incorrecta");
        }
        return errores;     
    }

    function exhibirMensajesError(errores){
        var ul = document.querySelector("#mensajes-errores");

        //comando para dejar en blanco el contenido de la lista ul
        ul.innerHTML = "";

        errores.forEach(function(error){
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        })
    }