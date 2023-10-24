let temp = document.querySelector("#temperature").textContent;
let windSpeed = document.querySelector("#windspeed").textContent;
let windChill;

if (temp <= 50 && windSpeed > 3)
{
    windChill = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16));
    document.querySelector("#windchill").textContent=windChill.toFixed(0);
}
else
{
    document.querySelector("#windchill").textContent="N/A"
}