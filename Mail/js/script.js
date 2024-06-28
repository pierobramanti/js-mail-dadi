// CREAZIONE ARRAY EMAIL//
const mailList =[ "alessandro.melillo@gmail.com", "andrea.gasperini@gmail.com", "arturo.agostinelli@gmail.com", "cecilia.angelotti@gmail.com", "claudia.pellegrino@gmail.com", "sara.melle@gmail.com"]

// CREAZIONE INPUT PER INSERIMENTO EMAIL//
let userInput = document.querySelector(".mail-input").toLowerCase()
console.log(userInput)


// DICHIARO COSTANTE CONTAINER E BTN //
const container = document.querySelector(".container");

const btn = document.querySelector(".input-button");


//
let authorization = false;

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userInput) {
        authorization = true;
    }
}