/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando 
una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando 
una funzione)
Dichiariamo chi ha vinto. */

// variabile che salva scelta utente tra pari e dispari
const userBet = prompt('Scegli: pari o dispari?');

// variabile che salva il numero da 1 a 5 giocato dall'utente
const userNumber = parseInt(prompt('Scrivi un numero da 1 a 5'));

// todo test
console.log('scelta utente:', userBet);
console.log('numero utente:', userNumber);

// numero random per computer da 1 a 5
let computerNumber = Math.floor(Math.random() * 5) + 1;

// todo test
console.log('numero computer:', computerNumber);

const sumOfNumbers = userNumber + computerNumber;

// todo test
console.log('somma dei due numeri', sumOfNumbers);

// funzione che stabilisce se un numero è pari o dispari
// input: numero, somma di numero utente e numero computer
// output: pari se somma pari, dispari se somma dispari
function isOddOrEven(number) {
  let evenOrOdd;
  // se il number % 2 da resto 0 -> evenOrOdd = 'pari'
  // altrimenti evenOrOdd = 'dispari'
  if (number % 2 === 0) {
    evenOrOdd = 'pari';
  } else {
    evenOrOdd = 'dispari';
  }

  return evenOrOdd;
}

// todo test
console.log('Risultato somma pari o dispari:', isOddOrEven(sumOfNumbers));

// se la scelta dell'utente coincide con l'output della funzione
// con la somma dei numeri l'utente ha vinto,
// altrimenti ha perso
if (userBet === isOddOrEven(sumOfNumbers)) {
  alert('Hai vinto!');
} else {
  alert('Hai perso');
}
