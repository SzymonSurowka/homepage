console.log("Witam wszystkich!");

let button = document.querySelector(".button");
let buttonText = document.querySelector(".js-buttonText");
let body = document.querySelector(".js-body");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        buttonText.innerText = "jasny";
    } else {
        buttonText.innerText = "ciemny";
    }

});