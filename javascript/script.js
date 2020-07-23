var btnContact = document.querySelector(".contact");
var modalBg = document.querySelector(".modal-form");
var close = document.querySelector(".close");

btnContact.addEventListener('click', function () {
    modalBg.classList.add("active");
});

close.addEventListener('click', function () {
    modalBg.classList.remove("active");
});