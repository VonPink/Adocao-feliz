const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelectorAll(".has-submenu > a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const parent = link.parentElement;
        const submenu = parent.querySelector(".submenu");
        document.querySelectorAll(".submenu").forEach(s => {
            if (s !== submenu) s.classList.remove("show-submenu");
        });
        submenu.classList.toggle("show-submenu");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        arrows: true,
        pagination: true,
        speed: 700,
    }).mount();
});