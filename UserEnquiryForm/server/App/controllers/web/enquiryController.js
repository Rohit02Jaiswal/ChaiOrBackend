const enquiryModel = require("../../models/userEnquiry.model");

let enqInsert = (req, res) => {
    let {name, email, phone, message} = req.body;
    let enquiry = new enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
    enquiry.save().then(() => {
        res.send({status: 1, msg: "Data saved successfully!"});
    }).catch((err) => {
        res.send({status: 0, msg: "Error while saving enquiry!", error: err});
    })
}

module.exports = {enqInsert};