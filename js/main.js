const hamburger = document.querySelector(".hamburgerIkona");
const listaNav = document.querySelectorAll(".preHamburger");
var kliknuto = false;

console.log("Begin " + kliknuto);
if (kliknuto == false)
    hamburger.addEventListener("click", e => {
        if (!kliknuto) {
            console.log("unutra 1 pre " + kliknuto);

            const nav = document.getElementById("navBar");
            nav.style.flexDirection = "column ";


            const ulList = document.querySelector(".listeFlex");
            ulList.style.flexDirection = "column";
            ulList.style.gap = "20px";

            const listItems = document.getElementsByClassName("preHamburger");
            for (var i = 0; i < listItems.length; i++) {
                listItems[i].style.display = "block";
            }

            hamburger.style.paddingLeft = "50px";

            kliknuto = true;
            console.log("unutra 1 " + kliknuto);
            if (kliknuto == true)
                hamburger.addEventListener("click", e => {
                    if (kliknuto) {

                        for (var i = 0; i < listItems.length; i++) {
                            listItems[i].style.display = "none";
                        }
                       
                        nav.style.flexDirection = "row";

                        console.log("unutra 2 "+ kliknuto);
                        kliknuto = false;
                        console.log("unutra 2 end "+ kliknuto);
                        console.log("----");
                    }
                });
        }
    });






