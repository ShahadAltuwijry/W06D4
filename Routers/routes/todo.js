const express = require("express");
const { getAllToDos, addToDo } = require("./../controllers/todo");

const toDoRouter = express.Router();

toDoRouter.get("/", getAllToDos);
toDoRouter.post("/", addToDo);

module.exports = toDoRouter;
