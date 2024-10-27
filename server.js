const express = require("express");
const mongodb = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
//api handeling
app.get("/api/v1", async (req, res) => res.send("Hello World From Server"));
app.use("/api/v1/tasks", require("./src/routes/task.route"));

//mongodb connection
mongodb
  .connect(process.env.MONGODB_URI)
  .then((res = console.log(`Mongodb Connected successfully`)));

//Server Listen
app.listen(process.env.LOCAL, () =>
  console.log(`the app is running on server ${process.env.LOCAL}`)
);
