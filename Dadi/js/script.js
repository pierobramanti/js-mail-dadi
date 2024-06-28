//INSERISCO IL PULSANTE //
let play = document.getElementById("play")

// INSERISCO FUNZIONE
play.addEventListener("click", function() {
// DICHIARO VARIABILE
    let player = Math.floor(Math.random() * 6 + 1);
// DICHIARO VARIABILE PC
    let pcPlayer = Math.floor(Math.random() * 6 + 1);

// INSERISCO IF
if (player > pcPlayer) {
    console.log(`il giocatore 1 ha vinto con un lancio del valore di ${player}, battendo il lancio del valore di ${pcPlayer} del computer`)
}
// INSERISCO ELSE IF
else if (player === pcPlayer) {
    console.log(`Pareggio entrambi avete ottenuto un ${player}`)
}
// INSERISCO ELSE
else {
    console.log(`Il computer ha vinto con un lancio del valore di ${pcPlayer}, battendo il lancio ${player} del giocatore 1`)
}
})


