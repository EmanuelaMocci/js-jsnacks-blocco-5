// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

var parola = "ciao";

function contrario (parola){
    var parolaInversa = "";
    for (var i = parola.length -1; i >= 0; i--) {
        parolaInversa = parolaInversa + parola.charAt(i);                            
    }
    return parolaInversa;
}

var parolaInversa = contrario(parola); 

console.log(parolaInversa);

