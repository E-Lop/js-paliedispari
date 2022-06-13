/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// chiedere una parola all'utente
const userInputWord = prompt('Scrivi una parola');

// variabile flag per salvare la parola scritta al contrario
let backwardUserWord = '';

// ciclo for per fare lo spelling dall'ultima lettera alla prima
for (let i = userInputWord.length - 1; i >= 0; i--) {
  backwardUserWord += userInputWord[i];
  console.log(userInputWord[i]);
}

// se la parola inserita è palindroma
if (isPalindrome(userInputWord, backwardUserWord)) {
  alert('La parola inserita è palindroma');
} else {
  alert('La parola inserita non è palindroma');
}

// funzione di verifica palindromia
// input --> prima parola, seconda parola
// output --> booleano true se palindromo, altrimenti false
function isPalindrome(word1, word2) {
  let palindromeCheck = false;
  if (word1 === word2) {
    palindromeCheck = true;
  }
  return palindromeCheck;
}
