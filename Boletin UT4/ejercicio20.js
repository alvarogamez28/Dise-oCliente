var array = [];
    var arrayBidimensional = [];
    do{
        var datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separado por comas");
        if(!datos == ""){
            array = datos.split(",");
            arrayBidimensional.push(array);
        }
    }while(datos != "");
    console.log(arrayBidimensional);

