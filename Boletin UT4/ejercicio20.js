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


