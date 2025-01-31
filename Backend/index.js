// const addToCart = require("./addCartModule");  // default import
//  If you want to import the multiple function fron the single file you need to use the named import.
// const {addToCart, number} = require("./addCartModule");

// console.log("Hello Jaiswal.")

// let arr = [10,20,30,40,50];
// arr.forEach((value, index) => {
//     // console.log(value, index);
// });
// console.log("Nodemon activated.")

// // call the module
// addToCart();
// console.log(number());

// Create the node  server---------------
let http = require('http');
let server = http.createServer((req, res) => {
    res.end("Hi There....");
});
server.listen("8000");  // http//localhost:8000