/// Переключение меню бургера и блокировка скролла
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");

let toggle = false;

headerBurger.addEventListener("click", () => {
    if (toggle == false) {
        headerBurger.classList.add("active");
        headerMenu.classList.add("active");
        document.body.classList.add("lock");
        toggle = !toggle;
    } else {
        headerBurger.classList.remove("active");
        headerMenu.classList.remove("active");
        document.body.classList.remove("lock");
        toggle = !toggle;
    }
});
