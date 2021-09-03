// Feature Variables

let mobile = document.querySelector(".mobile2__container");
let shop = document.querySelector(".features__container__shop");
let message = document.querySelector(".features__container__message");
let paint = document.querySelector(".features__container__paint");
let phone = document.querySelector(".features__container__phone");

// About Variables

let aboutBox = document.querySelectorAll(".about_1__wrapper__right__box");

// Feature Transitions

window.onscroll = function () {
    if (this.scrollY >= 1000) {
        mobile.classList.add("f");
        shop.classList.add("shopm");
        message.classList.add("messagem");
        paint.classList.add("paintm");
        phone.classList.add("phonem");
    } else {
        mobile.classList.remove("f");
        shop.classList.remove("shopm");
        message.classList.remove("messagem");
        paint.classList.remove("paintm");
        phone.classList.remove("phonem");
    }
};
phone.addEventListener;

// About Box Click

aboutBox.forEach(function (el) {
    el.onclick = function () {
        aboutBox.forEach(function (el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
    };
});
