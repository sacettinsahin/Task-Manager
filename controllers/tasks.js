const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); // --> Boş gönderdiğim için hepsini getirecek!
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// const getTaskByName = async (req, res) => {
//   try {
//     const taskName = req.params.name;
//     console.log(taskName);
//     const task = await Task.findOne({ name: taskName });
//     if (!task) {
//       return res
//         .status(404)
//         .json({ message: `No task with name: ${taskName}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // getTaskByName,
};
