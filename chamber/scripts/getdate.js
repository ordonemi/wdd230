let hambutton = document.querySelector("#menu");
let navigation = document.querySelector(".navigation");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
})

let today = new Date();
document.querySelector("#currentYear").textContent=today.getFullYear();
document.querySelector("#lastModified").textContent=document.lastModified;

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});