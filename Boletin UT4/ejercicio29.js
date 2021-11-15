var misNotas = new Map();
misNotas.set("DWS",10);
misNotas.set("DWC",9);
misNotas.set("Despliege",8);
misNotas.set("DIW",6);

var yo = new Alumno ("Álvaro","Gamez","47514591H","28/10/1998", "2ºDAW", misNotas);
yo.info();
document.write(yo.mediaNotas())

for (const[clave, valor] of yo.maximaNota()){
    document.write(clave + " " + valor);
}