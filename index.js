const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

// middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();

app.listen(port, console.log(`server is listening on ${port}...`));
