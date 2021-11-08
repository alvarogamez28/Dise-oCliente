var txt="alvaro";
bar = (...num)=>{
    for(let i in num){ 
        txt += num[i];
        } 
    return txt;
}
/*function bar(){ 
    let txt = 'pppp'; 
    for(let i in arguments){ 
    txt += arguments[i];
    } 
    return txt;
}*/
console.log(bar);