function Noeud(nom, rep, fils)
{
    this.reponsePrec = rep;
    this.nom = nom;
    this.fils = fils;
}

var answers = document.querySelectorAll(".messageChoixReponse");


//let choix000 = new Noeud("", "", []);


let choix020 = new Noeud("Perte de confiance en moi", "Va voir des psy", []);
let choix021 = new Noeud("Je n'ai plus de soutien familial", "Tourne toi vers tes amis", []);
let choix022 = new Noeud("Je me sens seul", "Netflix and chill", []);


let choix0110 = new Noeud("CAF", "La Caisse des Allocations Familiales permettent d'obtenir de l'argent.", []);
let choix0111 = new Noeud("Mutuelle étudiante", "C'est une assurance maladie à laquelle les étudiants doivent souscrire", []);
let choix0112 = new Noeud("Autre", "Contacte nous dans l'onglet contact", []);


let choix0100 = new Noeud("Quittance de loyer", "Demandez à votre propriétaire", []);
let choix0101 = new Noeud("Justificatif de domicile", "Demandez à votre propriétaire", []);
let choix0102 = new Noeud("Fiche de salaire", "Demandez à votre employer", []);


let choix010 = new Noeud("Je n'arrive pas à me fournir un document", "Quel document ?", [choix0100,choix0101]);
let choix011 = new Noeud("Je n'arrive pas à contacter un service", "Quel service ?", [choix0110,choix0111,choix0112]);


let choix0030 = new Noeud("Bus", "Consultez le site des bus", []);
let choix0031 = new Noeud("Train", "Consultez le site des trains", []);

let choix002020 = new Noeud("Eau", "A voir avec votre propriétaire", []);
let choix002021 = new Noeud("Electricité", "A voir avec votre propriétaire", []);

let choix00200 = new Noeud("Je souhaite quitter mon logement", "Cela dépend de votre logement : en moyenne, un préavis de 1 mois est nécessaire pour les non-meublés et 3 mois pour les meublés. Cela peut changer en fonction des propriétés", []);
let choix00201 = new Noeud("Fonctionnement des assurances", "Consultez le site de votre assureur", []);
let choix00202 = new Noeud("Charges", "Quelle charge vous pose problème", [choix002020,choix002021]);

let choix00210 = new Noeud("Par particulier", "Se renseigner sur des sites tels que leboncoin", []);
let choix00211 = new Noeud("Résidences universitaires", "Contactez votre université pour obtenir ces renseignements", []);

let choix0020 = new Noeud("J'ai déjà un logement", "Quel est votre questionnement ?", [choix00200,choix00201,choix00202]);
let choix0021 = new Noeud("Je suis à la recherche d'un logement", "Quel est votre problématique ?", [choix00210,choix00211]);

let choix00100 = new Noeud("Groupes de soutien moral", "Il existe des groupes de soutien moraux, n'hésitez pas à vous renseigner auprès de votre université", []);
let choix00101 = new Noeud("Encadrement addictions", "Il existe des protocoles mis en place pour vous aider.", []);

let choix0010 = new Noeud("Aides disponibles", "Quels sont les aides qui vous intéressent ?", [choix00100,choix00101]);
let choix0011 = new Noeud("Mutuelle étudiante", "Veuillez vous référez à votre assureur.", []);


let choix0000 = new Noeud("Aides alimentaires", "Il existe des associations d'aide pour l'alimentation", []);
let choix0001 = new Noeud("APL", "Les APL sont des aides pour payer les loyers. Faites une simulation sur le site ...", []);
let choix0002 = new Noeud("Bourses", "Les bourses dépendent des revenus de vos parents : faites une simulation sur le site ...", []);

let choix000 = new Noeud("Financier", "Quel aspect financier ?", [choix0000,choix0001,choix0002]);
let choix001 = new Noeud("Santé", "Quel aspect de la santé ?", [choix0010,choix0011]);
let choix002 = new Noeud("Logement", "Quel aspect du logement ?", [choix0020,choix0021]);
let choix003 = new Noeud("Transports", "Quel aspect du transport", [choix0030,choix0031]);
let choix00 = new Noeud("Je ne connais pas les démarches disponibles", "Dans quel genre de démarche voulez-vous vous renseigner ?", [choix000,choix001,choix002,choix003]);
let choix01 = new Noeud("J'ai déjà fait des démarches mais j'ai un souci", "Dans quel genre de démarche voulez-vous vous de l'aide ?", [choix010,choix011]);
let choix02 = new Noeud("Autre problème", "Quel genre de problème rencontrez-vous ?", [choix020,choix021,choix022]);

let choix0 = new Noeud("J'ai un problème", "Quel est le type de votre problème ?" , [choix00, choix01, choix02]); 
let choix1 = new Noeud("Je veux aider", "Il suffit de vous rediriger vers cette partie du site : ...", []);
let state = new Noeud("", "start", [choix0,choix1]);

for(let i = 0; i < answers.length;i++)
{
    answers[i].addEventListener("click", function(){traiter(i, answers)});
}

function traiter(indice, nodes)
{
    
    let conteneur = document.getElementById("myPopup");
    let newElem = document.createElement("p");
    newElem.className = "messageClient";
    newElem.innerText = state.fils[indice].nom;    
    conteneur.appendChild(newElem);

    state = state.fils[indice];
    for(let i = 0; i < nodes.length;i++)
    {
        nodes[i].parentElement.removeChild(nodes[i]);
    }

    let reponseBot = document.createElement("p");
    reponseBot.className = "messageBot";
    reponseBot.innerText = state.reponsePrec;    
    conteneur.appendChild(reponseBot);

    for(let i = 0; i < state.fils.length;i++)
    {
        let reponse = document.createElement("p");
        reponse.className = "messageChoixReponse";
        reponse.innerText = state.fils[i].nom;    
        conteneur.appendChild(reponse);
    }

    var answers = document.querySelectorAll(".messageChoixReponse");
    for(let i = 0; i < answers.length;i++)
    {
        answers[i].addEventListener("click", function(){traiter(i, answers)});
    }

}
