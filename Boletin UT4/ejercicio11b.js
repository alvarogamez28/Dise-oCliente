/*function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}*/

var doubleOddNumbers = (...arr)=>arr.filter(val=>val % 2 !==0).map(val=>val*2);