{
    const welcome = () => {
        console.log("Witam wszystkich!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const buttonText = document.querySelector(".js-buttonText");

        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            buttonText.innerText = "jasny";
        } else {
            buttonText.innerText = "ciemny";
        }
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}