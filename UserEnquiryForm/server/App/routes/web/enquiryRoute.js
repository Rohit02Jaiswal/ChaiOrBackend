const express = require('express');
const { enqInsert, enqList, deleteEnq, fetchUpdate } = require('../../controllers/web/enquiryController');
const enquiryRouter = express.Router();

enquiryRouter.post('/insert', enqInsert);
enquiryRouter.get('/view', enqList);
enquiryRouter.delete('/delete/:id', deleteEnq);
enquiryRouter.get('/fetch/:id', fetchUpdate);

module.exports = enquiryRouter;