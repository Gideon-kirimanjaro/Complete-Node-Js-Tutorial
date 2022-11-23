const crypto = require("crypto");
const { tasks } = require("../database/tasks");
const Tasks = require("../model/tasks");
const getTasks = async (req, res) => {
  try {
    const allTasks = await Tasks.find({});
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(501).json({
      msg: error,
    });
  }
};
const postTasks = async (req, res) => {
  try {
    const postedTask = await Tasks.create(req.body);
    res.status(201).json(postedTask);
  } catch (error) {
    res.status(501).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  const { key } = req.params;
  try {
    const oneTask = await Tasks.findOne({ _id: key });
    if (!oneTask) {
      return res
        .status(404)
        .json({ msg: `Item with id ${key} does not exist` });
    }
    return res.status(200).json(oneTask);
  } catch (error) {
    res.json({
      msg: error,
    });
  }
};
const updateTask = async (req, res) => {
  const { key } = req.params;
  const { taskName, taskTime, completed } = req.body;
  try {
    await Tasks.updateOne({
      taskName: taskName,
      taskTime: taskTime,
      completed: completed,
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
};
const deleteTask = (req, res) => {
  const { key } = req.params;
  const exists = tasks.find((item) => {
    return item.id === key;
  });
  if (exists) {
    const newTasks = tasks.map((item) => {
      if (item.id === key) {
        const index = tasks.indexOf(item.id);
        tasks.splice(index, 1);
        return res.json(tasks);
      }
    });
  } else {
    return res.send("Key does not exist");
  }
};
module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  postTasks,
};
