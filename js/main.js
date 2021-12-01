// hamburger.addEventListener("click", e => {
//     if (liste.style.display == "none") {
//         /*Aktiv*/
//         liste.style.display = "block";
//         stepen += 360;
//         for (var i = 0; i < hamLinije.length; i++) {
//             hamLinije[i].style.webkitTransform = 'rotate(' + stepen + 'deg)';
//             if (i == 1) {
//                 hamLinije[i].style.width = "45px";
//             }
//         }
//         hamLinije[0].style.transition = "all 0.3s ease-out";
//         hamLinije[1].style.transition = "all 0.4s ease-out";
//         hamLinije[2].style.transition = "all 0.3s ease-out";

//     }
//     else {
//         for (var i = 0; i < hamLinije.length; i++) {
//             // hamLinije[i].style.webkitTransform = 'rotate(' + 0 + 'deg)';
//             hamLinije[i].style.width = "35px";
//         }
//         hamLinije[0].style.transition = "all 0.2s ease-out";
//         hamLinije[1].style.transition = "all 0.2s ease-out";
//         hamLinije[2].style.transition = "all 0.2s ease-out";
//         liste.style.display = "none";
//     }
// });
// function proveriEkran(x) {
//     if (x.matches) { // If media query matches
//         liste.style.display = "block";

//         stepen = 0;
//         for (var i = 0; i < hamLinije.length; i++) {
//             hamLinije[i].style.display = "none";
//             /*Ovo radim kako mi se ne bi okretlo ko lud hamburger prilikom resize-a   */
//             hamLinije[i].style.webkitTransform = 'rotate(' + stepen + 'deg)';
//             hamLinije[i].style.transition = "none";
//         }
//     }
//     else {
//         liste.style.display = "none";
//         for (var i = 0; i < hamLinije.length; i++) {
//             hamLinije[i].style.display = "block";
//             /*U slucaju povlacenja dok je selektovana lista sto 
//         dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
//             hamLinije[i].style.width = "30px";
//         }
//     }
// }

// var x =window.matchMedia("(min-width: 1182px)");
// proveriEkran(x); // Call listener function at run time
// x.addListener(proveriEkran); // Attach listener function on state changes

const hamburger = document.querySelector(".hamburgerCeo");
const liste = document.querySelector(".wrapper");
const hamLinije = document.querySelectorAll(".linija");

var stepen = 0;

desktop();
tablet();
mobile();

hamburger.addEventListener("click", e => {
    if (liste.style.display == "none") {
        /*Aktiv*/
        liste.style.display = "block";
        stepen += 360;
        for (var i = 0; i < hamLinije.length; i++) {
            hamLinije[i].style.webkitTransform = 'rotate(' + stepen + 'deg)';
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

function mobile() {
    const mql = window.matchMedia('screen and (max-width: 600px)');
    checkMedia(mql);
    mql.addListener(checkMedia);
    function checkMedia(mql) {
        if (mql.matches) {
            liste.style.display = "none";
            for (var i = 0; i < hamLinije.length; i++) {
                hamLinije[i].style.display = "block";
                /*U slucaju povlacenja dok je selektovana lista sto 
            dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
                hamLinije[i].style.width = "30px";
            }
            console.log('Mobile');
        }
    }
}

function tablet() {
    const mql = window.matchMedia('screen and (min-width: 600px) and (max-width: 1182px)');
    checkMedia(mql);
    mql.addListener(checkMedia);
    function checkMedia(mql) {
        if (mql.matches) {
            liste.style.display = "none";
            for (var i = 0; i < hamLinije.length; i++) {
                hamLinije[i].style.display = "block";
                /*U slucaju povlacenja dok je selektovana lista sto 
                dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
                hamLinije[i].style.width = "30px";
            }
            console.log('tablet');
        }
    }
}
function desktop() {
    const mql = window.matchMedia("screen and (min-width: 1182px)");
    checkMedia(mql);
    mql.addListener(checkMedia);
    function checkMedia(mql) {
        if (mql.matches) { // If media query matches
            liste.style.display = "block";
            stepen = 0;
            for (var i = 0; i < hamLinije.length; i++) {
                hamLinije[i].style.display = "none";
                /*Ovo radim kako mi se ne bi okretlo ko lud hamburger prilikom resize-a   */
                hamLinije[i].style.webkitTransform = 'rotate(' + stepen + 'deg)';
                hamLinije[i].style.transition = "none";
            }
            console.log('desktop');
        }
    }
}
