var listaDispari = [];

for (var i = 0; i < 5; i++) {
  var numero_utente = parseInt(prompt("Inserisci un numero: "));
  var resto = numero_utente % 2;
  console.log(resto);
  if (resto) {
    listaDispari.push(numero_utente);
    console.log(listaDispari);
  }
}

console.log("lista definitiva: ", listaDispari);
