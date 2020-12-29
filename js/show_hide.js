

let button_tel = document.getElementById("button_tel");
let button_mail = document.getElementById("button_mail");
let numero_tel = document.getElementById("numero_tel");
let mail = document.getElementById("mail");
let hamburger = document.getElementById("hamburger");
let menu_mobile = document.getElementById("menu_mobile");

button_tel.addEventListener("click", () => {
    if (getComputedStyle(numero_tel).display != "none") {
        $("#numero_tel").slideUp(300);
    } else {
        $("#numero_tel").slideDown(300);
    }
})

button_mail.addEventListener("click", () => {
    if (getComputedStyle(mail).display != "none") {
        $("#mail").slideUp(300);
    } else {
        $("#mail").slideDown(300);
    }
})