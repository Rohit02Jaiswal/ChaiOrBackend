const express = require('express');
const { enqInsert } = require('../../controllers/web/enquiryController');
const enquiryRouter = express.Router();

enquiryRouter.post('/insert', enqInsert);

module.exports = enquiryRouter;