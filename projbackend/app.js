require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require('cors');


const app = express();
//DB connection
mongoose.connect(process.env.DB, 
{ useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true
}).then(() => {console.log("DB CONNECTED");})
.catch(console.log("DB got OOPSS"));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes

//Port
const port =process.env.Port || 8000;
//Starting  a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});