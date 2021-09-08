// Crea 10 oggetti che rappresentano una zucchina.

var zucchine = [
    {
        'varietà': '1',
        'peso': 100,
        'lunghezza': 10 
    },
    {
        'varietà': '2',
        'peso': 150,
        'lunghezza': 14 
    },
    {
        'varietà': '3',
        'peso': 200,
        'lunghezza': 15 
    },
    {
        'varietà': '4',
        'peso': 50,
        'lunghezza': 12 
    },
    {
        'varietà': '5',
        'peso': 150,
        'lunghezza': 13 
    },
    {
        'varietà': '6',
        'peso': 50,
        'lunghezza': 30 
    },
    {
        'varietà': '7',
        'peso': 60,
        'lunghezza': 40 
    },
    {
        'varietà': '8',
        'peso': 80,
        'lunghezza': 55 
    },
    {
        'varietà': '9',
        'peso': 250,
        'lunghezza': 32 
    },
    {
        'varietà': '10',
        'peso': 60,
        'lunghezza': 45 
    }
];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var over15 = [];
var under15 = [];
var sommaOver15 = 0;
var sommaUnder15 = 0;

for (var i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza < 15){
        under15.push(zucchine[i]);
        sommaUnder15 += zucchine[i].peso;
    } else {
        (over15.push(zucchine[i]));
        sommaOver15 += zucchine[i].peso;
    }
}
console.log(`Il peso delle zucchine lunghe è ${sommaOver15} gr.`);
console.log(`Il peso delle zucchine corte è ${sommaUnder15} gr.`);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


// for (var i = 0; i < over15.length; i++){
//     sommaOver15 += over15[i].peso;
// }
// console.log(sommaOver15);

// for (var i = 0; i < under15.length; i++){
//     sommaUnder15 += under15[i].peso;
// }
// console.log(sommaUnder15);