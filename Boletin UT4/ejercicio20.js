var valores = new Array ();

do {
    datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento");
    datos=datos.split(",");
    valores.push(datos);
} while (datos!="");


document.write(valores);


