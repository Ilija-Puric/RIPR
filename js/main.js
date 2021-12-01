
const hamburger = document.querySelector(".hamburgerCeo");
const liste = document.querySelector(".wrapper");
const hamLinije = document.querySelectorAll(".linija");


hamburger.addEventListener("click", e => {

    /*Popravlja ne registrovanje na prvi klik*/
    //Ne treba mi ipak
    // if (liste.style.display == "") {
    //     liste.style.display = "block";
    // }

    if (liste.style.display == "none") {
        liste.style.display = "block";
        /*Aktiv*/
        
        for (var i = 0; i < hamLinije.length; i++) {

            // hamLinije[i].style.webkitTransform = 'rotate(' + 360 + 'deg)';

            if (i == 1) {
                hamLinije[i].style.width = "45px";
            }
        }
            hamLinije[0].style.transition = "all 0.3s ease-out";
            hamLinije[1].style.transition = "all 0.4s ease-out";
            hamLinije[2].style.transition = "all 0.3s ease-out";
        
    }
    else {
      
        for (var i = 0; i < hamLinije.length; i++) {
            // hamLinije[i].style.webkitTransform = 'rotate(' + 0 + 'deg)';

            hamLinije[i].style.width = "35px";
        }

        hamLinije[0].style.transition = "all 0.2s ease-out";
        hamLinije[1].style.transition = "all 0.2s ease-out";
        hamLinije[2].style.transition = "all 0.2s ease-out";
        liste.style.display = "none";
    }
});

function proveriEkran(x) {
    if (x.matches) { // If media query matches
        liste.style.display = "block";

        for (var i = 0; i < hamLinije.length; i++) {
            hamLinije[i].style.display = "none";
        }
    }
    else {
        liste.style.display = "none";
        for (var i = 0; i < hamLinije.length; i++) {
            hamLinije[i].style.display = "block";

            /*U slucaju povlacenja dok je selektovana lista sto 
            dovodi do promene ekrana i loseg aktiv stanja buttona*/
            hamLinije[i].style.width = "30px";
        }
    }
}

var x = window.matchMedia("(min-width: 1182px)")
proveriEkran(x) // Call listener function at run time
x.addListener(proveriEkran) // Attach listener function on state changes


