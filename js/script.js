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
// let mailButton = document.getElementById('mailTool');
// mailButton.addEventListener('click', function(){
//     let mailapp = document.getElementById('mailapp').classList;
//     mailapp.className('d-none')

// })
let checkMailButton = document.getElementById('checkMail')
checkMailButton.addEventListener('click', function() {
    let elEmailInput = document.getElementById('emailInput');
    let emailInput = elEmailInput.value;
    let elMessage = document.getElementById('message');
    let message = '';
        console.log(emailInput);
    for (let i = 0; i < addresses.length; i++){
        console.log(addresses)
        if (emailInput === addresses[i]){
            console.log('ok')
            message = `<div>Login effettuato</div>`
        } else{
            message = `<div>E-mail errata</div>`
        }
        elMessage.innerHTML = message;
    } 
})

    

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// let playerDice = Math.floor((Math.random() * 6) + 1 ) ;
// console.log(playerDice);
// let pcDice = Math.floor((Math.random() * 6) + 1 ) ;
// console.log(pcDice);



// for (let i = 1; i <= numbers.length; i++) {
    
    let playerDice = Math.floor((Math.random() * 6) + 1 ) ;
    console.log(playerDice);
    let pcDice = Math.floor((Math.random() * 6) + 1 ) ;
    console.log(pcDice);

    let dice1 = document.getElementById('img1');
    dice1.setAttribute('src',`img/dices/${[pcDice]}.svg`)
    let dice2 = document.getElementById('img2');
    dice2.setAttribute('src',`img/dices/${[playerDice]}.svg`)
    
    let elResult = document.getElementById('result');
    let tmpHtml = '';
    if (pcDice === playerDice){
        console.log('PAREGGIO')
        tmpHtml = `<h1>Pareggio</h1>`
    } else if (pcDice < playerDice) {
        console.log('IL PC HA VINTO')
        tmpHtml = `<h1>Il pc ha vinto</h1>`
    } else{
        console.log('L\'UTENTE HA VINTO')
        tmpHtml = `<h1>l'utente ha vinto</h1>`
    }
    elResult.innerHTML = tmpHtml;
// }