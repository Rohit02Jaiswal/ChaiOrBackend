const express = require('express');
const mongoose = require('mongoose');

let userEnquirySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    }
});

let enquiryModel = mongoose.model("enquiry", userEnquirySchema);
module.exports = enquiryModel;