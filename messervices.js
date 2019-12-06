var bourse = document.getElementById("bourse");
bourse.addEventListener("click", afficheBourse);

var apl = document.getElementById("apl");
apl.addEventListener("click", afficheAPL);

var services = document.getElementById("Services");
services.addEventListener("click", afficheService);



var listBourseInfo = document.getElementById("bourseInfo");
var t = document.getElementById("aplInfo");
var s = document.getElementById("serviceInfo");

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



let popup = document.getElementById("myPopup");
myPopup.addEventListener("click",showPopup);
var showPopup = function()
{
    popup.classList.toggle("show");
}
