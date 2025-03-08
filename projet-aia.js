const row = document.querySelector('.row');
let search = document.querySelector(".search")
let clear = document.querySelector(".clear")

row.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

search.onclick = function(){
    document.querySelector(".container").classList.toggle('active')
}

clear.onclick = function(){
    document.getElementById("search").value = "";
}
const menuHemberger = document.querySelector(".menu-hemberger");
const navLinks = document.querySelector(".nav-links");

menuHemberger.onclick = function(){
    document.querySelector(".nav-links").classList.toggle('mobile-menu')
}

var typed = new Typed('#element', {
    strings: ["Association Ivoirienne d'Astronomie.", " Un pont entre la Terre et l’Univers pour tous les passionnés d’astronomie.", "Rejoignez nous et partageons la magie du ciel."],
    typeSpeed: 50,
    backSpeed: 45,
    loop: true,
  });