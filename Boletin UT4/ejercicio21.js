var valores = new Array ();

/*function buscaApellido() {
    apellido=datos[1];
    return apellido;
}*/

do {
    datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento");
    datos=datos.split(",");
    valores.push(datos);
} while (datos!="");


function buscaDNI(){
     valores.filter((valor) => valor[0] == "4");
}
document.write(buscaDNI(valores));



