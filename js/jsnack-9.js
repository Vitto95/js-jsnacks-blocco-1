//Metodo 1 (No array)

var sum = 0;

//calcolo la media dei primi 10 numeri interi

for (var i = 1; i <= 10; i++) {
  var number = parseInt(prompt(`Inserisci il ${i}° numero: `));
  if (!isNaN(number)) {
    console.log(`${i}° numero:` + number);
    sum += number;
  } else {
    console.log("ATTENZIONE: non ha inserito un valore numerico.");
    break;
  }
}

console.log("Somma dei 10 numeri: " + sum);

var avg = (sum / 10).toFixed(2);
console.log("Ecco la media: " + avg);
