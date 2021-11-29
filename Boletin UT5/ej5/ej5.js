function countChars(obj){
    var maxLength = 145;
    var longitudCadena = obj.value.length;
    var restante = (maxLength - longitudCadena);
    
    if(restante < 0){
        document.getElementById("numCaracteres").innerHTML = '<span style="color: red;">Has pasado el limite , es '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("numCaracteres").innerHTML = restante+' caracteres restantes';
    }
}