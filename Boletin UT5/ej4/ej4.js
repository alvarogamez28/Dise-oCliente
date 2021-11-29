window.onload = inicializar;
function inicializar(){
    var elementos=document.forms[0];
    for(var i=0;i<elementos.elements.length;i++){
        elementos.elements[i].addEventListener('click',corregir,false);
    }
}
function corregir(e){
    if(e.currentTarget.name=="dia"){
        divP1=document.getElementById("p1");
        
        if(e.currentTarget.value=="lunes"){
            divP1.innerHTML="Respuesta correcta";
        }else{
            divP1.innerHTML="Respuesta incorrecta.Correcta es: Lunes";
        }            
    }else if(e.currentTarget.name=="mes"){
        divP2=document.getElementById("p2");
        if(e.currentTarget.value=="noviembre"){
            divP2.innerHTML="Respuesta correcta";
        }else{
            divP2.innerHTML="Respuesta incorrecta. Correcta es noviembre";
        }
    }
}