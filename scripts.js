var nr = 1
function changeImg(x) {
    nr=nr + x;
    console.log(nr)
    next = "url('../scroller/imagine_" + nr + ".jpg')"
    document.getElementById("Img").style.backgroundImage = next;
}
