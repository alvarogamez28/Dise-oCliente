var modulo = new Map();
modulo.set('DWECL', ['Desarrollo Web en Entorno Cliente','420',25]);
modulo.set('DWESE', ['Desarrollo Web en Entorno Cliente','380',25]);
modulo.set('DIW', ['Diseño de Interfaces Web','260',25]);
modulo.set('DAW', ['Despliegue de Aplicaciones Web','70',25]);

//Aqui guardo los modulos que tengo
var modulos = modulo.keys();
for (let result of modulos){
    document.write('<br />' + result);
}
document.write ("<br>");
for (var [key, value] of modulo) {
    document.write ("<br>");
    document.write(key + " = " + value);
  }