const express = require("express");
const { createUser, getAllUsers } = require("./../controllers/user");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
