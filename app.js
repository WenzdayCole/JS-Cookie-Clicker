console.log("connection successfull...")

let cookieCount = 0;
let cookiesPerSecond = 1;

// 1 second increment
setInterval(function () {
cookieCount = cookieCount + cookiesPerSecond;
console.log(cookieCount);
}, 1000);

