"use strict";
var forma = document.getElementById("forma"),
        salida = document.getElementById("salida");
forma.addEventListener("submit",Registro , false);
function Registro (){
    var nombre = forma["nombre"].value.trim(), 
       apellidopaterno= forma ["apellidopaterno"].value.trim(),
       apellidomaterno = forma ["apellidomaterno"].value.trim(),
       curp = forma ["curp"].value.trim(),
       edad = forma ["edad"].value.trim(),
       telefono = forma ["telefono"].value.trim(),
       direccion = forma ["direccion"].value.trim(),
       pregunta1 = forma ["pregunta1"].value.trim(),
       pregunta2= forma ["pregunta2"].value.trim(),
       pregunta3 = forma ["pregunta3"].value.trim(),
       matricula= forma["matricula"]. value.trim();
       
       salida.textContent = 
       "Nombre: " + nombre
       + "/Apellido Paterno: " + apellidopaterno 
       + "/Apellido Materno: " + apellidomaterno 
       + "/ Curp: " + curp 
       + "/ Edad: " + edad 
       + "/ Telefono: " + telefono 
       + "/ Dirección: " + direccion 
       + "/ Univerdidad: " + pregunta3
       + "/ Matricula: " + matricula 
       + "/ Alergias: " + pregunta1
       + "/ Infectado: " + pregunta2 ;
}