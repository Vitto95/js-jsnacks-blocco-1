var yourNumber = parseInt(prompt("Inserisci un numero: "));
var somma_cubo = 0;

for (var i = 1; i <= yourNumber; i++) {
  var currentNumber = i;
  somma_cubo += currentNumber ** 3;
  document.getElementById("somma-cubo-parziale").innerHTML +=
    "<li>" +
    `Somma cubo parziale fino a ${currentNumber}: ` +
    somma_cubo +
    "</li>";
  console.log(somma_cubo);
}

document.getElementById("your-number-cubo").innerHTML =
  "Il tuo numero: " + yourNumber;
document.getElementById("somma-cubo").innerHTML =
  `Somma dei cubi fino a ${yourNumber}: ` + somma_cubo;
