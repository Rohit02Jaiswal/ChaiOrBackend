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

let enqList = async (req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({status: 1, enquiryList: enquiry});
}

let deleteEnq = async (req, res) => {
    let enqId = req.params.id;
    console.log(enqId)
    let enq = await enquiryModel.deleteOne({_id: enqId});
    res.send({status: 1, message: "Data deleted Successfully!", enq});
}

let fetchUpdate = async (req, res) => {
    let updateId = req.params.id;
    let updateView = await enquiryModel.findOne({_id: updateId});
    res.send({status: 1, message: "Updated Successfull!", updateView});
}

module.exports = {enqInsert, enqList, deleteEnq, fetchUpdate};