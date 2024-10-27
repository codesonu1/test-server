const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

exports.taskModel = new model("tasks", taskSchema);
