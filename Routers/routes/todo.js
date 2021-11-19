const express = require("express");
const { getAllToDos, addToDo } = require("./../controllers/todo");

const toDoRouter = express.Router();

toDoRouter.get("/todos", getAllToDos);
toDoRouter.post("/todos", addToDo);

module.exports = toDoRouter;
