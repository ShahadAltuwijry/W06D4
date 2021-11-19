//first import the packages you need
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db/db");
const toDoRouter = require("./Routers/routes/todo");

//instantiate express
const app = express();

app.use(express.json());
app.use(cors());
app.use("/todos", toDoRouter);

//load enviroment variables
dotenv.config();

//defining port from env
const PORT = process.env.PORT;

//at the end adding app listener
app.listen(PORT, () => {
  console.log(`the server is on and running on ${PORT}`);
});
