
const modulo = new Map();
modulo.set("DWECL","Desarrollo Web en Entorno Cliente");
modulo.set("DWES","Desarrollo Web en Entorno Cliente");
modulo.set("DIW","Diseño de Interfaces Web");
modulo.set("DAW","Despliegue de Aplicaciones Web");
modulo.set("EIE","Empresa e Iniciativa Emprendedora");

document.write("Hay " + modulo.size + " módulos almacenados");
//Esto me devuelve las claves y valores del map
for (var [key, value] of modulo) {
    document.write ("<br>");
    document.write(key + " = " + value);
  }

//Esto me devuelve las keys del map.
document.write("<br>");
  for (let claves of modulo.keys()) {
    document.write("<br>");
    document.write(claves);
  }
//Esto me devuelve los valores del map.
document.write("<br>");
  for (let claves of modulo.values()) {
    document.write("<br>");
    document.write(claves);
  }
document.write("<br>");
//Devuelve si está un modulo (key)
document.write(modulo.has("DAW"));
document.write("<br>");
//Eliminando modulo (key)
document.write(modulo.delete("DAW"));
//Para ordenar
document.write("<br>");
/*
var mapOrdenado = new Map([...modulo].sort());
document.write(mapOrdenado);*/
const mapSort1 = new Map([...modulo.entries()].sort());
document.write(mapSort1);