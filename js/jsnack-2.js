//Esercizio 2

var parola_1 = prompt("Inserisci la prima parola: ");
console.log(parola_1.length);
var parola_2 = prompt("Inserisci la seconda parola: ");
console.log(parola_2.length);

if (parola_1.length > parola_2.length) {
  console.log(parola_1);
  console.log(parola_2);
} else {
  console.log(parola_2);
  console.log(parola_1);
}
