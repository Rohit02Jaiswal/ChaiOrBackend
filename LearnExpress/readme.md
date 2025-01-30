Node Vs Express: Node is the main thing. Express ke code se ham server ka code likh pate hai and server kaisa react karega wo v ham express ki help se likhte hai.

What is Express Js ? : Package, Routing, Framework 

Why Express Js ? : http is difficult to use, express makes this easier.

Routing : Routes banane ke process ko hm routing kahte hai.
/profile
/user
/profile/sgdhu/gd7hd

middleware : middleware ek aisa function hota hai jo har route se pahle chalta hai. Iska matlab saare routes me koi v chale usse pahle middleware chalta hai and usme likha code pahle execute hota hai.

Node ke sath ek dikkat hai ki agar controll ek bar v kisi middleware pe gya to controll khud se agle route/middleware pe nhi jayega, usse agle par le jane ke liye push karna hoga aur ye push kahlayega next ko chalana

Request and Response : req me aane wala user ki taraf se saara data hota hai, jaise ki user location, device info and other things. res me controls hote h jiske basis pe ham server se response bhej paate hai

Route parameters(params): Dynamic Routing -- aisa koi v route jiska koi hissa baar baar same rahta hai and kuchh hissa baar baar change hota hai iske liye ham dynamic route banate hai. (/profile/:username)

Template engines: ejs setup karne ke liye ----
1) ejs install --
npm i ejs

2) configure ejs --
app.set("view engine", "ejs");

3) ek views folder banao --
4) ussme ejs files banao --
5) send ki jagah render karo -- render karte waqk aap views wale folder ke under wale file ka hi name likhe aur usme .ejs mention na kare.

Static files: images, css, and front end js setup karna.
static file setup krne ke liye -----
1) create a folder called public
2) create three folders inside it: images, stylesheets and javascripts
3) configure the express static in script.js file
4) understand the path

http methods: get, post --

Error handling: 