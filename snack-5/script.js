// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b” ==== "bianco", "rosso", "arancione";

            // 0        1        2          3 
var arr1 = ["nero", "bianco", "rosso", "arancione"];
// “a” più piccolo di “b”
var var1 = 1; 
// “b” grande al massimo quanto il numero di elementi dell’array (4)
var var2 = 3;
// var colori = arr1.slice(1,2);

                //      1  3 
function funzione(arr1, a, b){
    var arrNuovo = [];

    for(var i = a; i <= b; i++){
        arrNuovo.push(arr1[i]);
    }
   return arrNuovo; 

} 
 console.log(funzione(arr1, var1, var2));


