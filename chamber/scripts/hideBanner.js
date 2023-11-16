const banner = document.querySelector("#banner");
const hideButton = document.querySelector("#banner-button");

hideButton.addEventListener('click', () => {
    banner.classList.toggle("hide");
    hideButton.classList.toggle("hide");
});