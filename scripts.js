var nr = 1;
var nrmax = 29;
function changeImg(x) {
    nr=nr + x;
    if (nr > nrmax){nr = 1;}
    if (1 > nr){nr = nrmax;}
    next = "url('../scroller/imagine_" + nr + ".jpg')";
    document.getElementById("Img").style.backgroundImage = next;
}
