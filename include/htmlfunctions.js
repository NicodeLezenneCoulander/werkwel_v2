/**
 * JS functions
 */
function afterload() {
	// afterload wordt gebruikt om bepaalde div's bij te werken:
	// De juiste begroeting, afhankelijk van de tijd
    var d = new Date();
    var h = d.getHours();
    var stext = "Goede";
    if (h < 12) { stext += "morgen"; }
    if ((h > 11) && (h < 18)) { stext += "middag"; }
    if (h > 17) { stext += "avond"; }
    document.getElementById("greeting").innerHTML = stext + " bezoeker";

    // Een manier om een eventhandler aan het DOM-document te koppelen
    if (document.addEventListener) 
        document.addEventListener("DOMContentLoaded", autorun(1), false);
    else if (document.attachEvent) 
        document.attachEvent("onreadystatechange", autorun(2));

    // In de CSS staat opacity op 0, nu op 1 zetten, de pagina wordt dan (langzaam) zichtbaar
    document.body.style.opacity = "1";
}

function autorun(nummer) {
	// Wordt gebruikt door de eventhandler om een div te vullen
    document.getElementById("autorun").innerHTML = "function autorun with parameter " + nummer.toString()
}
