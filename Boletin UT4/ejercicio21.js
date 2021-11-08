var array = new Array ();
var arrayBidimensional = new Array();

do {
    var datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento");
    if (!datos==""){
        array=datos.split(",");
        arrayBidimensional.push(array);
    }
    
    
} while (datos!="");


document.write(arrayBidimensional);
document.write("<br>");
seleccion = prompt("¿Que dato deseas mostrar por separado?");

if (seleccion=="apellido"){
    pedirApellido=prompt("Introduce apellido");
    mostrarApellido(arrayBidimensional,pedirApellido);

}else if (seleccion=="dni"){
    pedirDni=prompt("Introduce dni");
    mostrarDni(arrayBidimensional,pedirDni);

}else if (seleccion=="edad"){
    pedirEdad=prompt("Introduce edad");
    mostrarEdad(arrayBidimensional,pedirEdad);

}else{
    document.write("Debe de ser apellido, dni o edad");
}


function mostrarApellido(arrayBidimensional,pedirApellido){
    for (let item of arrayBidimensional) {
        if (item[1].indexOf(pedirApellido)!=-1) {
            document.write(item + "<br>");
        }
    }

}

function mostrarDni(arrayBidimensional,pedirDni){
    for (let item of arrayBidimensional) {
        if (item[2].indexOf(pedirDni)!=-1) {
            document.write(item + "<br>");
        }
    }

}

function mostrarEdad(arrayBidimensional,pedirEdad){
    for (let item of arrayBidimensional) {
        if (item[3].indexOf(pedirEdad)!=-1) {
            document.write(item + "<br>");
        }
    }

}

//alvaro,gamez,47514591H,28/10/1998





