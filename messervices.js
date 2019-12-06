var bourse = document.getElementById("bourse");
bourse.addEventListener("click", afficheBourse);

var apl = document.getElementById("apl");
apl.addEventListener("click", afficheAPL);

var services = document.getElementById("Services");
services.addEventListener("click", afficheService);

var prets = document.getElementById("prets");
prets.addEventListener("click",affichePrets)

var mutuelle = document.getElementById("Mutuelle");
mutuelle.addEventListener("click",afficheMutuelle);

var sncf = document.getElementById("SNCF");
sncf.addEventListener("click",afficheSNCF);

var loca = document.getElementById("loca");
loca.addEventListener("click",afficheLoca);

var examen = document.getElementById("examen");
examen.addEventListener("click",afficheExamen);

var listBourseInfo = document.getElementById("bourseInfo");
var t = document.getElementById("aplInfo");
var s = document.getElementById("serviceInfo");
var p = document.getElementById("pretInfo");
var m = document.getElementById("mutuelleInfo");
var c = document.getElementById("sncfInfo");
var l = document.getElementById("locaInfo");
var e = document.getElementById("examenInfo");

var afficheBourse = function()
{  
    if(listBourseInfo.style.display == "block")
        {listBourseInfo.style.display = "none";}
    else
        {listBourseInfo.style.display = "block";}
}

var afficheAPL = function()
{
    if(t.style.display == "block")
        {t.style.display = "none";}
    else
        {t.style.display = "block";}
}

var afficheService = function()
{
    if(s.style.display == "block")
        {s.style.display = "none";}
    else
        {s.style.display = "block";}
}

var affichePrets = function()
{  
    if(p.style.display == "block")
        {p.style.display = "none";}
    else
        {p.style.display = "block";}
}

var afficheMutuelle = function()
{
    if(m.style.display == "block")
        {m.style.display = "none";}
    else
        {m.style.display = "block";}
}

var afficheSNCF = function()
{
    if(c.style.display == "block")
        {c.style.display = "none";}
    else
        {c.style.display = "block";}
}

var afficheLoca = function()
{
    if(l.style.display == "block")
        {l.style.display = "none";}
    else
        {l.style.display = "block";}
}

var afficheExamen = function()
{
    if(e.style.display == "block")
        {e.style.display = "none";}
    else
        {e.style.display = "block";}
}


let popup = document.getElementById("myPopup");
myPopup.addEventListener("click",showPopup);
var showPopup = function()
{
    popup.classList.toggle("show");
}
