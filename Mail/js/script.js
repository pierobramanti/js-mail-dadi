// CREAZIONE ARRAY EMAIL//
const mailList =[ "alessandro.melillo@gmail.com", "andrea.gasperini@gmail.com", "arturo.agostinelli@gmail.com", "cecilia.angelotti@gmail.com", "claudia.pellegrino@gmail.com", "sara.melle@gmail.com"]
console.log(mailList)

// CREAZIONE VARIABILE USER E ASSEGNAZIONE VALORE  UGUALE A PROMPT//
let user = prompt("inserisci la tua email").toLowerCase()


for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === user) {
        authorization = true;
    }
}