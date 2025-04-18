console.log("connection successfull...")

let cookieCount = 0;
let cookiesPerSecond = 1;

//declare empty array for the api to use
const shopUpgradesArray = [];

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
async function getShopUpgrades() {
    const result = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const data = await result.json()
    console.log("api test", data);
    data.forEach(item => {
        shopUpgradesArray.push(item);
        console.log(shopUpgradesArray)
    });
    return data;
    
}

getShopUpgrades();

//rendering the upgrades on the DOM
async function renderShopUpgrades() {
    const getShopItems = await getShopUpgrades();
    
getShopItems.forEach(function (upgrade, i){
    console.log(i, upgrade.name)
    for (let i = 0; i < shopUpgradesArray.length; i++)
        console.log(shopUpgradesArray, i);
    const upgradeName = document.createElement("h2")
    upgradeName.textContent = upgrade.name;
    const upgradeCost = document.createElement("h2")
    upgradeCost.textContent = `Cost: ${upgrade.cost}`;
    const upgradeCpsIncrease = document.createElement("h2");
    upgradeCpsIncrease.textContent = `CPS: ${upgrade.cpsIncrease}`;

    const container = document.getElementById("upgrades-container");
    if (!container) {
        console.error("Container with ID 'upgrades-container' not found");
        return;
    }

    container.appendChild(upgradeName);
    container.appendChild(upgradeCost);
    container.appendChild(upgradeCpsIncrease);

    document.body.appendChild(container);

});
}

renderShopUpgrades();