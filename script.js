const nom = "Chalumet";
let âge = 18;
console.log(âge);
//nom = "Salmon"
console.log(nom);

const age = 13;
console.log(age);
if (age < 13) {
    console.log("Accès interdit au moins de 13 ans");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}

for (let i = 1; i < 11; i++) {
   console.log("7*" + i + "=" + 7*i)
}

const saluer = (prenom) => {
    return "Bonjour," + prenom+ "! Comment vas-tu ?" ;
};
console.log(saluer("Eliott"))