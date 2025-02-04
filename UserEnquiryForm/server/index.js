const express = require('express');
const connectDB = require('./connectDb');
const enquiryRouter = require('./App/routes/web/enquiryRoute');
const cors = require('cors');
const app = express();

require("dotenv").config();
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/web/enquiry', enquiryRouter);

app.listen(process.env.PORT);