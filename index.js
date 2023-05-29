const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")
// app.post("/api/v1/tasks")
// app.get("/api/v1/tasks/:id")
// app.patch("/api/v1/tasks/:id")
// app.delete("/api/v1/tasks/:id")

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
