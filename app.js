console.log("connection successfull...")

let cookieCount = 0;
let cookiesPerSecond = 1;

//declare empty array for the api to use


// 1 second increment
setInterval(function () {
cookieCount = cookieCount + cookiesPerSecond;
totalPokemon.textContent = `Total Cookies: ${cookieCount}`;
console.log(cookieCount);
}, 1000);

// render the change on screen
const totalPokemon = document.getElementById("totalpokemon")

// button click increment +1
const button = document.getElementById("cookie-increment-button")
button.addEventListener("click", function () {
    cookieCount = cookieCount + 1;
    totalPokemon.textContent = `Total Cookies: ${cookieCount}`;
});
//render cookies per second
const currentpps = document.getElementById("current-pps")
currentpps.textContent = `Cookies Per Second: ${cookiesPerSecond}`;

//fetching from upgrades api
const upgradesbox = document.getElementById("upgrades-container")
const shopUpgradesArray = [];
async function getShopUpgrages() {
    const result = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const data = await result.json()
    console.log("api test", data);
    data.forEach(item => {
        shopUpgradesArray.push(item);
    });
    return data;
    
}


getShopUpgrages();