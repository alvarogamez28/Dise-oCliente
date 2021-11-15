class Alumno extends Persona {
    constructor(nombre, apellido, dni, fechaNacimiento, curso, notaPorModulo){
        super(nombre, apellido, dni, fechaNacimiento);
        this.curso=curso;
        this.notaPorModulo=notaPorModulo;
    }
    info = ()=>{
        this.informacion();
        for(const [clave, valor] of this.notaPorModulo){
            document.write("<br>");
            document.write(clave + " = " + valor);
        }
        
    }

    mediaNotas = ()=>{
        var valores= this.notaPorModulo.values();
        var suma = 0;
        for (const i of valores){
            suma = suma + valores;
        }
        media=suma / this.notaPorModulo;
    }

    maximaNota(){
        const mejorNota = new Map();
        var valores = this.notas.values();
        var mayorNota = Math.max(...valores);
        for (let [clave,valor] of this.notas) {
            if(valor == mayorNota){
                maximaNota.set(clave,valor);
            }
        }
        return maximaNota;
    }
}