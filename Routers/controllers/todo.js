const todoModel = require("../../db/models/toDosSchema");

const getAllToDos = (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addToDo = (req, res) => {
  const { task } = req.body;
  const added = new todoModel({ task });

  added
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });

  //   todoModel.push({ name: req.body, isCompleted: false, isDeleted: false });
  //   res.status(201).json({ name, isCompleted, isDeleted });
};

module.exports = { getAllToDos, addToDo };
