var yourNumber = prompt("Inserisci un numero: ");
var somma_cubo = 0;

for (var i = 1; i <= yourNumber; i++) {
  var currentNumber = i;
  somma_cubo += currentNumber ** 3;
  console.log(somma_cubo);
}
