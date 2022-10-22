const hamburger = document.querySelector('.navbar__hamburger')
const links = document.querySelector('.navbar__links')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open')
    links.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    links.classList.toggle("active");
    overlay.classList.toggle("active");
});