var x = window.prompt("Indica los datos de la cordenada X: ");
var y = window.prompt("Indica los datos de la cordenada Y: ");

function Punto(x,y){
    this.x=x;
    this.y=y;
    this.cuadrante = function cuadrante(){
        var a;
        if (this.x > 0 && this.y > 0) {
            a=1;
        }
        else if (this.x > 0 && this.y < 0) {
            a=2;
        }
        else if (this.x < 0 && this.y < 0) {
            a=3;
        }
        else if (this.x < 0 && this.y > 0) {
            a=4;
        }
        else {
            a=0;
        }
        return a;
    }
    document.write("Punto x: " + this.x + "<br>");
    document.write("Punto y: " + this.y + "<br>");
    document.write("Cuadrante: " + cuadrante() + "<br>");
}
Punto(x,y);