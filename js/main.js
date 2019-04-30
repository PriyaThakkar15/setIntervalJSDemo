var doc = document.getElementById("background");
var bgcolor = ["orange", "blue", "red", "green", "yellow"];
var i = 0;

var txt = document.getElementById("title");
var clr = ["black", "red", "green", "red", "blue"];
var j = 0;

function change() {
    doc.style.backgroundColor = bgcolor[i];
    i++;
    doc.style.color = clr[j];
    j++;


    if ((i > bgcolor.length - 1) && (j > clr.length - 1)) {
        i = 0;
        j = 0;
    }
}
setInterval(change, 1000);