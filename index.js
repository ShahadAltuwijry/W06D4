//first import the packages you need
const express = require("express");
const dotenv = require("dotenv");

//instantiate express
const app = express();

app.use(express.json());

//load enviroment variables
dotenv.config();

//defining port from env
const PORT = process.env.PORT;

//at the end adding app listener
app.listen(PORT, () => {
  console.log(`the server is on and running on ${PORT}`);
});
