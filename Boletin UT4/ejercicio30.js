var misNotas = new Map();
misNotas.set("DWS",10);
misNotas.set("DWC",9);
misNotas.set("Despliege",8);
misNotas.set("DIW",6);

var arrayAlumnos = new Array();
var alumno1 = new Alumno("Álvaro", "Gámez", "47514591H", "28/10/1998", misNotas);
var alumno2 = new Alumno("Pepe", "Leon", "1114591H", "28/10/2004", misNotas);

var arrayAlumnos=[alumno1,alumno2];

var aula = new Aula(arrayAlumnos);






for (let valor of arrayAlumnos){
    valor.info();
}


var result = aula.buscaDni(dni);
result.info();