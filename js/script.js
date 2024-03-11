// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const addresses = [
    "cvrcek@verizon.net",
    "larry@aol.com", 
    "cgcra@verizon.net",
    "hakim@yahoo.ca",
    "wkrebs@icloud.com",
    "nazario.zaccagnino@gmail.com",
    "cameron@yahoo.com",
    "thaljef@live.com",
    "hedwig@mac.com",
    "twoflower@me.com",
    "punkis@comcast.net"
 ];
let mailButton = document.getElementById('mailTool');
// mailButton.addEventListener('click', function(){)




let checkMailButton = document.getElementById('checkMail')
checkMailButton.addEventListener('click', function() {
    let elEmailInput = document.getElementById('emailInput');
        let emailInput = elEmailInput.value;
        console.log(emailInput);
    for (let i = 0; i < addresses.value; i++){
        
    } 
})

    

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?