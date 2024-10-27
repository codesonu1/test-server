const { taskModel } = require("../model/task.model");

exports.addTask = async (req, res) => {
  //   const { tittle, description, status } = req.body;
  console.log(req.body);
  try {
    const data = await taskModel.create({ ...req.body });
    res.send({
      status: 201,
      msg: "Task Added Successfully!",
      data: await taskModel.find({}),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllTask = async (req, res) => {
  try {
    res.send({
      status: 200,
      msg: "Fetch all task",
      data: await taskModel.find({}),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id, tittle, description } = req.body;
    const isTask = await taskModel.findOne({ _id: id });
    if (isTask) {
      await taskModel.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            tittle: tittle,
            description: description,
          },
        },
        {
          new: true,
        }
      );
      res.send({
        status: 200,
        msg: "Update Successfully",
        data: await taskModel.find({}),
      });
    } else {
      res.send("Id Not Found");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.body;
  console.log(id, req.body);
  try {
    if (id) {
      await taskModel.findOneAndDelete({ _id: id });
      res.send({
        status: 200,
        msg: "Delete Successfully",
        data: await taskModel.find({}),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.body;

  try {
    const isTask = await taskModel.findOne({ _id: id });
    if (isTask) {
      await taskModel.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            status: true,
          },
        },
        {
          new: true,
        }
      );
      res.send({
        status: 200,
        msg: "Status Update Successfully",
        data: await taskModel.find({}),
      });
    } else {
      res.send("Id Not Found");
    }
  } catch (error) {}
};
