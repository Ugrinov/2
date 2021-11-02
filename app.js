const openNav = document.querySelector('.hamburger');
const closeNav = document.querySelector('.nav__close');
const nav = document.querySelector('.nav__list');

openNav.addEventListener('click', () => {
    console.log("123123");
    const navLeft = nav.getBoundingClientRect().left
    if(navLeft < 0){
        nav.style.left = 0;
        document.body.classList.add('active');
    }
})


closeNav.addEventListener('click', () => {
    const navLeft = nav.getBoundingClientRect().left
    if(navLeft == 0){
        nav.style.left = "-40rem";
        document.body.classList.remove('active');
    }
});

// Smooth Scroll

const scrollLink = [...document.querySelectorAll(".scroll-link")]

scrollLink.forEach(link => {
    link.addEventListener("click", e=> {
        const id = e.target.getAttribute("href").slice(1)
        const element = document.getElementById(id);
        const position = element.offsetTop;
        console.log(position);
        window.scrollTo( {
            left: 0,
            top: position,
        });
        nav.style.left = "-40rem";
        document.body.classList.remove("active");
    })
})