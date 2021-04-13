var number_4 = prompt("Inserisci un numero con 4 cifre: ");
var sum = 0;

if (number_4.length == 4) {
  parseInt(number_4);
  while (number_4) {
    console.log("Numero inserito: " + number_4);
    sum += number_4 % 10;
    number_4 = Math.floor(number_4 / 10);
    console.log("Somma numeri: ", sum);
  }
} else {
  var wrong_digits = number_4.length;
  console.log(
    `ATTENZIONE! Il numero inserito ha ${wrong_digits}, non 4 cifre!`
  );
}
