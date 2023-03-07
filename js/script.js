/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
numeri da indovinare sono stati individuati.


Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/



// creo le variabili degli elementi HTML che mi serve manipolare
const containerEl = document.getElementById('container');


// creo array per i numeri
const numbers = [];


// creo funzione per generare numeri casuali
function generateNumbers(min, max) {
    let digit = Math.floor(Math.random() * (max - min) + 1);
    return digit;
}

// creo funzione per generare 5 numeri casuali e aggiungerli all'array
function generateFive(array) {
    let i = 1;
    while (array.length < 5) {
        i = generateNumbers(1, 100);
        array.push(i);
    }
    return array;
}


console.log(generateFive(numbers));


// creo funzione per visualizzare in pagina i 5 numeri aggiunti nell'array
function viewNumbers(array) {
    for(i = 0; i < array.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerText = array[i];
        containerEl.append(newDiv);
    }
}

viewNumbers(numbers);