var pow_2 = 0;
var i = 0;

while (pow_2 < 1000) {
  pow_2 = Math.pow(2, i);
  if (pow_2 < 1000) {
    console.log("Indice: " + i);
    console.log("Potenza di 2: " + pow_2);
    console.log("***************************");
    i++;
  }
}
