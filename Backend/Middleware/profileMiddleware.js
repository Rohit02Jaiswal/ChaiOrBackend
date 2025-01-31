const profileToken = (req, res, next) => {
    let myPass = "rohit@123";
    if (req.query.pass == "" || req.query.pass == undefined) {
        return res.send({
            status: 404,
            msg: "Password is empty!",
        })
    }
    if (req.query.pass != myPass) {
        return res.send({
            status: 0,
            msg: "Wrong Password!",
        })
    }
    next();
}

module.exports = {profileToken}