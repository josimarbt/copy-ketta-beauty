// // Put your application javascript here
//this code is for hide the links for "login" and "register" on tablet size.
let tabletSize = window.matchMedia("(max-width: 970px)");

tabletSize.onchange = (e) => {
    let menuNavbarLinks = document.getElementById("menu_navbar_links");
    let navbarIconLinks = document.getElementById("navbar_icon_links");

    if(e.matches) {
        menuNavbarLinks.classList.add("hidden");
        navbarIconLinks.classList.remove("hidden");
    } else {
        menuNavbarLinks.classList.remove("hidden");
        navbarIconLinks.classList.add("hidden");
    };
};

