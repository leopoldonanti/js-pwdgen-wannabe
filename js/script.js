/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

var nomeUtente;
var cognomeUtente;
var colorePreferito;


nomeUtente = "nome"
cognomeUtente = "cognome"
colorePreferito = "colore"

nomeUtente = prompt("Hey biscottino come ti chiami?")
cognomeUtente = prompt ("Per caso hai anche un cognome?")
colorePreferito = prompt ("E il tuo colore super prefe?")

var password = nomeUtente + cognomeUtente + colorePreferito + 21;

document.getElementById('password').innerHTML = password;






