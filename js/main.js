const hamburger = document.querySelector(".hamburgerCeo");
const liste = document.querySelector(".wrapper");
const hamLinije = document.querySelectorAll(".linija");
const footer = document.getElementsByTagName("footer");
const html = document.documentElement;
const body = document.getElementsByTagName("body")[0];

const fon = window.matchMedia("screen and (max-width: 500px)");
const tablet = window.matchMedia(
  "screen and (min-width: 500px) and (max-width: 1200px)"
);
const pc = window.matchMedia("screen and (min-width: 1200px)");

var stepen = 0;
var trenutnaLokacija;

var path = window.location.pathname;
console.log(path);
var page = path.split("/").pop();
console.log(page);

dalJeFon(fon);
fon.addListener(dalJeFon);
function dalJeFon(fon) {
  if (fon.matches) {
    liste.style.display = "none";
    for (var i = 0; i < hamLinije.length; i++) {
      hamLinije[i].style.display = "block";
      /*U slucaju povlacenja dok je selektovana lista sto
          dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
      hamLinije[i].style.width = "30px";
    }
    trenutnaLokacija = "mobile";
    console.log(trenutnaLokacija);
  }
}

dalJeTablet(tablet);
tablet.addListener(dalJeTablet);
function dalJeTablet(tablet) {
  if (tablet.matches) {
    liste.style.display = "none";
    for (var i = 0; i < hamLinije.length; i++) {
      hamLinije[i].style.display = "block";
      /*U slucaju povlacenja dok je selektovana lista sto
                dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
      hamLinije[i].style.width = "30px";
    }
    footer[0].style.display = "block";
    trenutnaLokacija = "tablet";
    console.log(trenutnaLokacija);
  }
}

dalJePc(pc);
pc.addListener(dalJePc);
function dalJePc(pc) {
  if (pc.matches) {
    // If media query matches
    liste.style.display = "block";
    stepen = 0;
    for (var i = 0; i < hamLinije.length; i++) {
      hamLinije[i].style.display = "none";
      /*Ovo radim kako mi se ne bi okretlo ko lud hamburger prilikom resize-a   */
      hamLinije[i].style.webkitTransform = "rotate(" + stepen + "deg)";
      hamLinije[i].style.transition = "none";
    }
    footer[0].style.display = "block";

    trenutnaLokacija = "desktop";
    console.log(trenutnaLokacija);
  }
}

hamburger.addEventListener("click", (e) => {
  if (liste.style.display == "none") {
    /*Aktiv*/

    liste.style.display = "block";
    stepen += 360;

    if (page == "forum.html") {
      console.log("tu si");
    } else {
      console.log("nisi tu ");
    }

    for (var i = 0; i < hamLinije.length; i++) {
      hamLinije[i].style.webkitTransform = "rotate(" + stepen + "deg)";
      if (i == 1) {
        hamLinije[i].style.width = "45px";
      }
    }
    hamLinije[0].style.transition = "all 0.3s ease-out";
    hamLinije[1].style.transition = "all 0.4s ease-out";
    hamLinije[2].style.transition = "all 0.3s ease-out";

    if (trenutnaLokacija == "mobile") {
      /*Da footer ne vidimo*/
      footer[0].style.display = "none";
    }
  } else {
    hamLinije[1].style.width = "30px";
    hamLinije[1].style.transition = "all 0.2s ease-out";
    liste.style.display = "none";
    footer[0].style.display = "block";
  }
});

// const hamburger = document.querySelector(".hamburgerCeo");
// const liste = document.querySelector(".wrapper");
// const hamLinije = document.querySelectorAll(".linija");
// const footer = document.getElementsByTagName("footer");
// const html = document.documentElement;
// const body = document.getElementsByTagName("body")[0];

// const fon = window.matchMedia("screen and (max-width: 600px)");
// const tablet = window.matchMedia(
//   "screen and (min-width: 600px) and (max-width: 1422px)"
// );
// const pc = window.matchMedia("screen and (min-width: 1422px)");

// var stepen = 0;
// var trenutnaLokacija;

// dalJeFon(fon);
// fon.addListener(dalJeFon);
// function dalJeFon(fon) {
//   if (fon.matches) {
//     liste.style.display = "none";
//     for (var i = 0; i < hamLinije.length; i++) {
//       hamLinije[i].style.display = "block";
//       /*U slucaju povlacenja dok je selektovana lista sto
//           dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
//       hamLinije[i].style.width = "30px";
//     }
//     /*otkljucava scroll ekrana*/
//     html.style.overflowY = "visible";
//     body.style.overflowY = "visible";
//     trenutnaLokacija = "mobile";
//     console.log(trenutnaLokacija);
//   }
// }

// dalJeTablet(tablet);
// tablet.addListener(dalJeTablet);
// function dalJeTablet(tablet) {
//   if (tablet.matches) {
//     liste.style.display = "none";
//     for (var i = 0; i < hamLinije.length; i++) {
//       hamLinije[i].style.display = "block";
//       /*U slucaju povlacenja dok je selektovana lista sto
//                 dovodi do promene ekrana i loseg aktiv stanja hamburgera*/
//       hamLinije[i].style.width = "30px";
//     }
//     footer[0].style.display = "block";
//     html.style.overflowY = "visible";
//     body.style.overflowY = "visible";

//     trenutnaLokacija = "tablet";
//     console.log(trenutnaLokacija);
//   }
// }

// dalJePc(pc);
// pc.addListener(dalJePc);
// function dalJePc(pc) {
//   if (pc.matches) {
//     // If media query matches
//     liste.style.display = "block";
//     stepen = 0;
//     for (var i = 0; i < hamLinije.length; i++) {
//       hamLinije[i].style.display = "none";
//       /*Ovo radim kako mi se ne bi okretlo ko lud hamburger prilikom resize-a   */
//       hamLinije[i].style.webkitTransform = "rotate(" + stepen + "deg)";
//       hamLinije[i].style.transition = "none";
//     }
//     footer[0].style.display = "block";
//     html.style.overflowY = "visible";
//     body.style.overflowY = "visible";

//     trenutnaLokacija = "desktop";
//     console.log(trenutnaLokacija);
//   }
// }

// hamburger.addEventListener("click", (e) => {
//   if (liste.style.display == "none") {
//     /*Aktiv*/

//     liste.style.display = "block";
//     stepen += 360;
//     for (var i = 0; i < hamLinije.length; i++) {
//       hamLinije[i].style.webkitTransform = "rotate(" + stepen + "deg)";
//       if (i == 1) {
//         hamLinije[i].style.width = "45px";
//       }
//     }
//     hamLinije[0].style.transition = "all 0.3s ease-out";
//     hamLinije[1].style.transition = "all 0.4s ease-out";
//     hamLinije[2].style.transition = "all 0.3s ease-out";

//     if (trenutnaLokacija == "mobile") {
//       /*Da footer ne vidimo*/
//       footer[0].style.display = "none";
//       /*zakljucava dropdown u mestu*/
//       html.style.overflowY = "hidden";
//       body.style.overflowY = "hidden";
//     }
//   } else {
//     hamLinije[1].style.width = "30px";
//     hamLinije[1].style.transition = "all 0.2s ease-out";
//     liste.style.display = "none";
//     footer[0].style.display = "block";

//     html.style.overflowY = "visible";
//     body.style.overflowY = "visible";
//   }
// });
