const crypto = require("crypto");
const { tasks } = require("../database/tasks");
const getTasks = (req, res) => {
  res.json(tasks);
};
const postTasks = (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  tasks.push({ ...req.body, id: id });
  res.status(200).json(tasks);
};
const getTask = (req, res) => {
  const { key } = req.params;
  const exists = tasks.find((item) => {
    return item.id === key;
  });
  if (exists) {
    const task = tasks.filter((item) => {
      return item.id === key;
    });
    return res.json(task);
  } else {
    res.json("Item does not exist");
  }

  // tasks.find((item) => {
  //   if (item.id === Number(key)) {
  //     res.json(item);
  //   } else if (item.id !== Number(key)) {
  //     res.send("Key does not exist");
  //   }
  // });
};
const updateTask = (req, res) => {
  const { key } = req.params;
  const { taskName, taskTime } = req.body;
  const exists = tasks.find((item) => {
    return item.id === key;
  });
  if (exists) {
    tasks.find((item) => {
      if (item.id === key) {
        item.taskName = taskName;
        item.taskTime = taskTime;
        return res.json(tasks);
      }
    });
  } else {
    res.json("Item does not exist");
  }

  tasks.find((item) => {
    if (item.id === key) {
      item.taskName = taskName;
      item.taskTime = taskTime;
      return res.json(tasks);
    } else {
      res.json("Item does not exist");
    }
  });
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
