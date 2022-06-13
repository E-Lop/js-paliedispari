/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando 
una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando 
una funzione)
Dichiariamo chi ha vinto. */

// variabile che salva scelta utente tra pari e dispari
const userBet = prompt('Scegli: pari o dispari?');

// variabile che salva il numero giocato dall'utente
const userNumber = parseInt(prompt('Scrivi un numero da 1 a 5'));

// todo test
console.log('scelta utente:', userBet);
console.log('numero utente:', userNumber);

// numero random per computer
let computerNumber = Math.floor(Math.random() * 5) + 1;

// todo test
console.log('numero computer:', computerNumber);
