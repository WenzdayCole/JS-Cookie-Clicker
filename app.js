console.log("connection successfull...")

let cookieCount = 0;
let cookiesPerSecond = 1;

// 1 second increment
setInterval(function () {
cookieCount = cookieCount + cookiesPerSecond;
totalPokemon.textContent = `Total Pokemon: ${cookieCount}`;
console.log(cookieCount);
}, 1000);

// render the change on screen
const totalPokemon = document.getElementById("totalpokemon")

// button click increment +1
const button = document.getElementById("cookie-increment-button")
button.addEventListener("click", function () {
    cookieCount = cookieCount + 1;
    totalPokemon.textContent = `Total Pokemon: ${cookieCount}`;
});
