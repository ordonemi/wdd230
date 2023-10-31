const message = document.querySelector("#lastVisit");
const msToDays = 84600000;
const todayDate = new Date();

if (localStorage.getItem("lastVisit"))
{

}
else
{
    localStorage.setItem("lastVisit",todayDate.getTime());
}
