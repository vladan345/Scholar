var telo = document.getElementsByTagName("BODY")[0];
var navigacija = document.getElementsByTagName("NAV")[0];
var linkovi = document.getElementsByClassName("nav-sakrivaj");
var prijava = document.getElementsByClassName("prijava")[0];
var logovanje = document.getElementsByClassName("logovanje")[0];
var iks = document.getElementsByClassName("iks")[0];
var prijaviSe = document.getElementById("prijavi-se");
var ulogujSe = document.getElementById("uloguj-se");

prijaviSe.addEventListener("click", prijavaKlik, false);
ulogujSe.addEventListener("click", logovanjeKlik, false);
iks.addEventListener("click", iksKlik, false);
function prijavaKlik() {
    linkovi[0].classList.toggle("hidden");
    linkovi[1].style.display= "none";
    telo.classList.toggle("overflow");
    navigacija.classList.toggle("nav-exp");
    iks.classList.toggle("hidden");
    prijava.classList.toggle("hidden");
}
function logovanjeKlik() {
    linkovi[0].classList.toggle("hidden");
    linkovi[1].style.display= "none";
    telo.classList.toggle("overflow");
    navigacija.classList.toggle("nav-exp");
    iks.classList.toggle("hidden");
    logovanje.classList.toggle("hidden");
}
function iksKlik() {
    linkovi[0].classList.toggle("hidden");
    linkovi[1].style.display= "block";
    telo.classList.toggle("overflow");
    navigacija.classList.toggle("nav-exp");
    iks.classList.toggle("hidden");
    prijava.classList.add("hidden");
    logovanje.classList.add("hidden");
}