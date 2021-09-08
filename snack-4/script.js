// Scrivi una funzione che fonda due array (aventi lo stesso numero dielementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arr1 = ["a","b","c"];
var arr2 = [1,2,3];

function array(arr1, arr2){
    var arrCompleto = [];
    for(i = 0; i < arr1.length; i++){
        arrCompleto.push(arr1[i]);
        arrCompleto.push(arr2[i]);
    }
    return arrCompleto;
}

console.log(array(arr1, arr2));

