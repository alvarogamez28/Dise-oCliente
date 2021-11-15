class Persona {
    constructor(nombre, apellido, dni, fechaNacimiento){
        this.nombre = nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fechaNacimiento=fechaNacimiento;

    }
    
    informacion = ()=>{
        document.write("Soy " + this.nombre + " " + " DNI " + this.dni + " fecha de nacimiento " + this.fechaNacimiento);
    }
}