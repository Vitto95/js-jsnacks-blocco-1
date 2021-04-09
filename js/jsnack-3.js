//Esercizio 3

var somma = 0;
var number;

for (var i = 1; i <= 10; i++) {
  number = parseInt(prompt("Inserisci un numero: "));
  somma += number;
  console.log(somma);
}

console.log("Ecco la somma: ", somma);

document.getElementById("somma").innerHTML = "Ecco la somma: " + somma;
