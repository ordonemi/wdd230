let url = new URL(window.location);
let params = url.searchParams;

document.querySelector('#yourname').textContent = params.get("name");
document.querySelector('#yourfood').textContent = params.get("food");
document.querySelector('#yourgender').textContent = params.get("gender");