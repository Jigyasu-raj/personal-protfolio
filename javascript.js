
const sideIcon = document.querySelector("#side-icon");
const navBar = document.querySelector(".navbar")
const delbtn = document.querySelector(".navbar>i");
const inputboxs = document.querySelectorAll('input[type="range"]')
const scrollBar = document.querySelector(".scrollbar")
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBar.classList.add('show');
    }
    else {
        scrollBar.classList.remove('show');
    }
});

// inputboxs.forEach(function (values) {
//     values.addEventListener("input", function (event) {
//         const result = values.nextElementSibling;
//         result.innerHTML = values.value + "%"
//         navBar.addEventListener("click", function (event) {
//             event.stopPropagation();
//         });


//     })
// })
sideIcon.addEventListener("click", function (event) {
    if (window.innerWidth <= 768) {
        navBar.style.top = "0";
        navBar.style.transition = "all 1s"
        event.stopPropagation();
    }
});
delbtn.addEventListener("click", function (event) {
    if (window.innerWidth <= 768) {
        navBar.style.top = "-400px";
        navBar.style.transition = "all 1s"
        event.stopPropagation();
    }
});
const body = document.querySelector("body")
body.addEventListener("click", function (event) {
    navBar.style.top = "-400px";
    navBar.style.transition = "all 1s"

})


