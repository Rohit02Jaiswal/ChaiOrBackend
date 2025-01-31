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
// let http = require('http');
// let server = http.createServer((req, res) => { // http//localhost:8000/about
//     if (req.url == '/about') {
//         res.end("About");
//     }
//     if (req.url == '/profile') { // http//localhost:8000/profile
//         let obj = {
//             status: 1,
//             data: [
//                 {
//                     name: "Rohit Jaiswal",
//                     age: 22,
//                     city: "Motihari",
//                 },
//                 {
//                     name: "Sakshi Sharma",
//                     age: 23,
//                     city: "Bhagalpur",
//                 }
//             ],
//         }
//         res.end(JSON.stringify(obj));
//     }
//     if (req.url == '/') { // http//localhost:8000
//         res.end("Hi There....");
//     }
// });
// server.listen("8000");  // http//localhost:8000


/* Server Setup with Express framework */
const express = require('express');
const app = express();

app.use(express.json()); // it is mandatory if app use any type of json request.

app.get('/', (req, res) => {
    res.send("Express server done.");
})

app.post('/profile', (req, res) => { // post not supported on browser thats why we use postman/thunder-client
    // Creating an object 
    let profile = {
        id: 1,
        data: [
            {
                name: "Rohit Jaiswal",
                village: "Sirauna",
            },
            {
                name: "Sumit Kumar",
                village: "Ramnagar",
            }
        ]
    }
    // console.log(profile);
    res.send({profileData: profile, bodyData: req.body, queryData: req.query});
    // console.log(req.body);  
    // res.send(req.body);
})

app.listen("8000");