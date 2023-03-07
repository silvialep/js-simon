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
const headerEl = document.getElementById('header');
const containerEl = document.getElementById('container');
const counterEl = document.getElementById('count-down');
const userInput = document.getElementById('user-input');
const userButton = document.getElementById('user-button');
const resultsEl = document.getElementById('results');
const userScore = document.getElementById('user-score');



userInput.style.display = 'none';
resultsEl.style.display = 'none';
userScore.style.display = 'none';

// creo array per i numeri
const numbers = [];

console.log(generateFive(numbers));

viewNumbers(numbers);

let timeStart = 10;


// creo la timing function per il countdown
let counterVariable = setInterval(countDown, 1000);

let correctNumbers = [];


// creo evento al click del bottone
userButton.addEventListener('click', function() {
    let inputForms = document.querySelectorAll('.input-form');
    controlNumbers(numbers, inputForms, correctNumbers);
    console.log(correctNumbers);

    // visualizzo in pagina i div con i risultati
    resultsEl.style.display = 'flex';
    recalledNumbers(correctNumbers, resultsEl);
    userScore.style.display = 'block';
    viewScore(correctNumbers);
});





// FUNZIONI___________

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
        if (!array.includes(i)) {
            array.push(i);
        }
    }
    return array;
}

// creo funzione per visualizzare in pagina i 5 numeri aggiunti nell'array
function viewNumbers(array) {
    for (i = 0; i < array.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('view-numbers');
        newDiv.innerText = array[i];
        containerEl.append(newDiv);
    }    
}    

// creo funzione per countdown
function countDown() {
    counterEl.innerText = `Countdown: ${timeStart}`;
    if (timeStart <= 0) {
        headerEl.style.display = 'none';
        counterEl.style.display = 'none';
        userInput.style.display = 'block';
        clearInterval(counterVariable);
        document.querySelectorAll('.input-form').value = '';
    }
    timeStart--;
}

// creo funzione per controllare se i numeri digitati dall'utente
// erano presenti nell'array iniziale di numeri casuali
function controlNumbers(array1, array2, array3) {
    for (i = 0; i < array2.length; i++) {
        let okNum = array2[i].value;
        if (array1.includes(Number(okNum))) {
            array3.push(array2[i].value);
        }
        array2[i].value = '';
    }
    return array3;
}


// creo funzione per visualizzare i numeri che l'utente ha ricordato
function recalledNumbers(array, container) {
    for (i = 0; i < array.length; i++) {
        let divNumber = document.createElement('div');
        divNumber.innerText = array[i];
        container.append(divNumber);
    }
}


// creo funzione per visualizzare il punteggio finale
function viewScore(array) {
    userScore.innerText = `Il tuo punteggio è: ${array.length}`;
}
