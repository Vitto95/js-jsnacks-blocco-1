//Esercizio 4
var ilTuoNome = "Enrico";
var invitati = ["Luca", "Filippo", "Alessandro", "Marco", "Francesco"];
var inLista = false;

for (var i = 0; i < invitati.length; i++) {
  var nomeLista = invitati[i];
  if (ilTuoNome === nomeLista) {
    inLista = true;
    break;
  }
}

if (inLista) {
  console.log("Nominativo trovato. Benvenuto!");
} else {
  console.log("Siamo spiacenti. Il suo nome non è in lista.");
}
