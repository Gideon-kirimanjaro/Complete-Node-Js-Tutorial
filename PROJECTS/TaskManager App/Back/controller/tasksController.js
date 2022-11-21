const { tasks } = require("../database/tasks");
const getTasks = (req, res) => {
  res.json(tasks);
};
const postTasks = (req, res) => {
  tasks.push(req.body);
  res.status(200).json(tasks);
};
const getTask = (req, res) => {
  const { key } = req.params;
  tasks.find((item) => {
    if (item.id === Number(key)) {
      return res.json(item);
    } else {
      return res.send("Key does not exist");
    }
  });
};
const updateTask = (req, res) => {
  const { key } = req.params;
  const { itemName, itemTime } = req.body;
  tasks.find((item) => {
    if (item.id === Number(key)) {
      item.taskName = itemName;
      item.taskTime = itemTime;
      res.json(tasks);
    } else {
      res.json("Item does not exist");
    }
  });
};
const deleteTask = (req, res) => {
  const { key } = req.params;
  const exists = tasks.find((item) => {
    return item.id === Number(key);
  });
  if (exists) {
    const newTasks = tasks.filter((item) => {
      return item.id !== Number(key);
    });
    return res.json(newTasks);
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
