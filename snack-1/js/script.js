// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.

var zucchine = [
    {
        'varietà': '1',
        'peso': 100,
        'lunghezza': 30 
    },
    {
        'varietà': '2',
        'peso': 150,
        'lunghezza': 40 
    },
    {
        'varietà': '3',
        'peso': 200,
        'lunghezza': 50 
    },
    {
        'varietà': '4',
        'peso': 50,
        'lunghezza': 30 
    },
    {
        'varietà': '5',
        'peso': 150,
        'lunghezza': 35 
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
]
// Calcola quanto pesano tutte le zucchine.

var somma = 0;

for (var i = 0; i < zucchine.length; i++){
    somma += zucchine[i].peso;
} 
console.log(somma);