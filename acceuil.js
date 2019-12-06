


function afficherNouveauPostit(){
    document.getElementById('Synopsis').innerHTML =   "Aides demandées: \n - Bourse Etudiante CROUS \n - Aide au logement \n Mutuelle Etudiante ";
}

function afficherNouveauPostit1(){
    document.getElementById('Synopsis1').innerHTML =  "Aides demandées: \n - Bourse au mérite \n -  carte de réduction SNCF";
}

function afficherNouveauPostit2(){
    document.getElementById('Synopsis2').innerHTML = "Laura n'avait que 16 ans lorsqu'elle a accouché de son premier enfant. \n";
}

let popup = document.getElementById("myPopup");
myPopup.addEventListener("click",showPopup);
var showPopup = function()
{
    popup.classList.toggle("show");
}
