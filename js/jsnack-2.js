//Esercizio 2

var parola_1 = prompt("Inserisci la prima parola: ");
console.log(parola_1.length);
var parola_2 = prompt("Inserisci la seconda parola: ");
console.log(parola_2.length);

if (parola_1.length > parola_2.length) {
  console.log(parola_1);
  console.log(parola_2);
} else if (parola_1.length < parola_2.length) {
  console.log(parola_2);
  console.log(parola_1);
} else {
  alert("le parole hanno stessa lunghezza.");
}

//Esercizio 3

var somma = 0;
var number;
for (var i = 1; i <= 10; i++) {
  number = parseInt(prompt("Inserisci un numero: "));
  somma += number;
  console.log(somma);
}

console.log("Ecco la somma: ", somma);
