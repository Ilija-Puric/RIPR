// const hamburger = document.querySelector(".hamburgerIkona");
// const listaNav = document.querySelectorAll(".preHamburger");
// var kliknuto = false;

// console.log("Begin " + kliknuto);
// if (kliknuto == false)
//     hamburger.addEventListener("click", e => {
//         if (!kliknuto) {
//             console.log("unutra 1 pre " + kliknuto);

//             const nav = document.getElementById("navBar");
//             nav.style.flexDirection = "column ";


//             const ulList = document.querySelector(".listeFlex");
//             ulList.style.flexDirection = "column";
//             ulList.style.gap = "20px";

//             const listItems = document.getElementsByClassName("preHamburger");
//             for (var i = 0; i < listItems.length; i++) {
//                 listItems[i].style.display = "block";
//             }

//             hamburger.style.paddingLeft = "50px";

//             kliknuto = true;
//             console.log("unutra 1 " + kliknuto);
//             if (kliknuto == true)
//                 hamburger.addEventListener("click", e => {
//                     if (kliknuto) {

//                         for (var i = 0; i < listItems.length; i++) {
//                             listItems[i].style.display = "none";
//                         }

//                         nav.style.flexDirection = "row";

//                         console.log("unutra 2 "+ kliknuto);
//                         kliknuto = false;
//                         console.log("unutra 2 end "+ kliknuto);
//                         console.log("----");
//                     }
//                 });
//         }
//     });






// const hamburger = document.querySelector(".hamburgerIkona");
// const listaNav = document.querySelector("#data");


// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//         listaNav.style.display = "none";
//     }
//     else {
//         listaNav.style.display = "flex";
//     }
// }

// var x = window.matchMedia("(max-width: 1182px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


// hamburger.addEventListener("click", e => {
//     if (listaNav.style.display == "none") {

//         const nav = document.getElementById("navBar");
//         nav.style.flexDirection = "column ";

//         listaNav.style.display = "flex";
//         listaNav.style.flexDirection = "column ";
//         listaNav.style.gap = "40px ";

//         for (let i = 0; i < listaNav.children.length; i++) {
//             listaNav.children[i].style.display = "block";
//             console.log(listaNav.children[i].style.display);
//         }


//         hamburger.style.paddingLeft = "50px";
//         hamburger.style.paddingTop = "20px";
//     }
//     else {
//         listaNav.style.display = "none";
   
                       
//         }
//     });

