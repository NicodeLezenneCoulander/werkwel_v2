/**
 * JS functions
 */
function afterload() {
    var d = new Date();
    var h = d.getHours();
    var stext = "Goede";
    if (h < 12) { stext += "morgen"; }
    if ((h > 11) && (h < 18)) { stext += "middag"; }
    if (h > 17) { stext += "avond"; }
    document.getElementById("greeting").innerHTML = stext + " bezoeker";
    document.body.style.opacity = "1";

    if (document.addEventListener) 
        document.addEventListener("DOMContentLoaded", autorun(1), false);
    else if (document.attachEvent) 
        document.attachEvent("onreadystatechange", autorun(2));
}

function autorun(nummer) {
    document.getElementById("autorun").innerHTML = "function autorun with parameter " + nummer.toString()
}
