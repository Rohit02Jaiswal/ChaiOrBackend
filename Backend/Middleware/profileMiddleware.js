require("dotenv").config();
// console.log(process.env.myToken);
const profileToken = (req, res, next) => {
    if (req.query.pass == "" || req.query.pass == undefined) {
        return res.send({
            status: 404,
            msg: "Password is empty!",
        })
    }
    if (req.query.pass != process.env.myToken) {
        return res.send({
            status: 0,
            msg: "Wrong Password!",
        })
    }
    next();
}

module.exports = {profileToken}