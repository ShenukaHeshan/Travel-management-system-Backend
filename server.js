const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
 require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!");
})

const paymentRouter = require("./routes/payments.js");

http://localhost:8070/payment

app.use("/payment",paymentRouter);

app.listen(PORT, () =>{
    console.log(`The port is : ${PORT}`);
})