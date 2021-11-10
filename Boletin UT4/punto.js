function Punto(x,y){
    this.x=x;
    this.y=y;
    this.cuadrantes = function cuadrantes(){
        var cuadrante;
        if (this.x > 0 && this.y > 0) {
            cuadrante=1;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante=2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante=3;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante=4;
        }
        else {
            cuadrante=0;
        }
        return cuadrante;
    }
    document.write("Punto x: " + this.x + "<br>");
    document.write("Punto y: " + this.y + "<br>");
    document.write("cuadrante: " + cuadrantes() + "<br>");
}