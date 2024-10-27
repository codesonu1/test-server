const {
  getAllTask,
  addTask,
  updateTask,
  deleteTask,
  updateStatus,
} = require("../controller/task.controller");

const Router = require("express").Router();

Router.get("/", getAllTask)
  .post("/", addTask)
  .put("/", updateTask)
  .patch("/", updateStatus)
  .delete("/", deleteTask);
module.exports = Router;
