let mobile = document.querySelector(".mobile2__container");
let shop = document.querySelector(".features__container__shop");
let message = document.querySelector(".features__container__message");
let paint = document.querySelector(".features__container__paint");
let phone = document.querySelector(".features__container__phone");
window.onscroll = function () {
    console.log(this.scrollY);
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
