//Esercizio 4
var ilTuoNome = prompt("Buonasera. Il suo nome?");
var invitati = ["Luca", "Filippo", "Alessandro", "Marco", "Francesco"];
var inLista = false;
var risultato = "";

for (var i = 0; i < invitati.length; i++) {
  var nomeLista = invitati[i];
  console.log(nomeLista);
  if (ilTuoNome === nomeLista) {
    inLista = true;
    break;
  }
}

if (inLista) {
  console.log("Nominativo trovato. Benvenuto!");
  risultato = "Nominativo trovato. Benvenuto!";
} else {
  console.log("Siamo spiacenti. Il suo nome non è in lista.");
  risultato = "Siamo spiacenti. Il suo nome non è in lista.";
}

document.getElementById("nome").innerHTML = "Il tuo nome: " + ilTuoNome;
document.getElementById("risultato").innerHTML = risultato;
