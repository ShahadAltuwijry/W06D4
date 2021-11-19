const userModel = require("./../../db/models/userSchema");

const createUser = (req, res) => {
  const { userName, email, password } = req.body;

  const newUser = new userModel({
    userName,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createUser };
