<script type="text/javascript">
    var cont=0;
    var estatura = prompt(" Indicame tu estatura: ");
    var peso = prompt(" Indicame tu peso: ");
    var edad = prompt(" Indicame tu edad: ");
    var masaC = (peso / Math.pow(estatura, 2));
    if (masaC < 22 && edad < 45) {
        document.write("Su riesgo es bajo");        
    }
    if (masaC<22 && edad > 45){
        document.write(" Su riesgo es medio");
    }
    if (masaC>22 && edad < 45){
        document.write(" Su riesgo es medio");
    }
    if (masaC>22 && edad > 45){
        document.write(" Su riesgo es ALTO");
    }
    var nuevaConsulta = prompt ("¿ Desea realizar una nueva consulta?");
    while (nuevaConsulta == "s") {
        var nuevaConsulta = prompt ("¿ Desea realizar una nueva consulta?");
        if (nuevaConsulta == "n") {
            continue;
        }
        var estatura = prompt("Indicame tu estatura: ");
        var peso = prompt("Indicame tu peso: ");
        var edad = prompt("Indicame tu edad: ");
        var masaC = (peso / Math.pow(estatura, 2));
        if (masaC < 22 && edad < 45) {
        document.write(" Su riesgo es bajo");        
        }
        if (masaC<22 && edad > 45){
            document.write(" Su riesgo es medio");
        }
        if (masaC>22 && edad < 45){
            document.write(" Su riesgo es medio");
        }
        if (masaC>22 && edad > 45){
            document.write(" Su riesgo es ALTO");
        }
    }
    </script>