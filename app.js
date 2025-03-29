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
