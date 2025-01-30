const express = require('express')
const app = express()

// app.use(function (req, res, next){
    // console.log("middleware");
    // next();
// });

// app.get('/', function (req, res) {
//   res.send('Hello World');
// })

// app.get('/profile', function (req, res){
//     res.send("My name is Jaiswal.");
// })

// app.get('/profile/:username', function (req, res) {
//     res.send(`My name is ${req.params.username}`);
// })

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render("index");
})

app.listen(3000)