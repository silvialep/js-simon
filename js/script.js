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



userInput.style.display = 'none';

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
        newDiv.classList.add('view-numbers');
        newDiv.innerText = array[i];
        containerEl.append(newDiv);
    }
}

viewNumbers(numbers);

let timeStart = 2;


// creo la timing function per il countdown
let counterVariable = setInterval(countDown, 1000);


// creo funzione per countdown
function countDown() {
    counterEl.innerText = `Countdown: ${timeStart}`;
    if(timeStart <= 0) {
        headerEl.style.display = 'none';
        counterEl.style.display = 'none';
        userInput.style.display = 'block';
        clearInterval(counterVariable);
        document.querySelectorAll('.input-form').value = '';
    }
    timeStart--;
}



// creo evento al click del bottone che controlla se i numeri digitati dall'utente 
// erano presenti nell'array iniziale di numeri casuali
userButton.addEventListener('click', function() {
    let inputForms = document.querySelectorAll('.input-form');
    for (i = 0; i < inputForms.length; i++) {
        console.log(inputForms[i].value);
        if (numbers.includes(Number(inputForms[i].value))) {
            console.log(`Il numero ${inputForms[i].value} era incluso nell'elenco`);
        }

        inputForms[i].value = '';
    }
});