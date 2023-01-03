// Put your application javascript here
if(window.innerWidth <= 980){
    let navbar_tablet = document.getElementsByClassName("account-cart-links");
    let img = "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png";

    navbar_tablet.removeChild(navbar_tablet.firstChild);
    navbar_tablet.appendChild(img);
}