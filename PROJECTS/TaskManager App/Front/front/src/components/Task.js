import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UpdateAlert from "./Ui/Update/Alert";
const Task = (props) => {
  const params = useParams();
  console.log("PARAMS", params.taskId);
  const [itemTask, setItemTask] = useState("");
  const [itemTime, setItemTime] = useState("");
  const [update, setupdate] = useState(false);
  const fetchTask = useCallback(() => {
    fetch(`http://localhost:4500/api/tasks/${params.taskId}`)
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          const { taskName, taskTime } = item;
          setItemTask(taskName);
          setItemTime(taskTime);
        });
      });
  }, [params.taskId]);
  useEffect(() => {
    fetchTask();
  }, [fetchTask]);
  const taskHandler = (e) => {
    setItemTask(e.target.value);
  };
  const timeHandler = (e) => {
    setItemTime(e.target.value);
  };
  const updateApi = async () => {
    await axios
      .put(`http://localhost:4500/api/tasks/${params.taskId}`, {
        taskName: itemTask,
        taskTime: itemTime,
      })
      .then(
        setTimeout(() => {
          setupdate(true);
        }, 100)
      )
      .then(setupdate(false));
  };
  const updateTask = () => {
    updateApi();
    props.liftState({ itemTask, itemTime });
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "auto",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Task id: {params.taskId}</Form.Label>
          <Form.Control
            type="text"
            value={itemTask}
            autoFocus
            onChange={taskHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="Number"
            value={itemTime}
            autoFocus
            onChange={timeHandler}
          />
        </Form.Group>
        <Button variant="warning" className="mx-2">
          <Link to="/home">Back to Tasks</Link>
        </Button>
        <Button
          disabled={itemTask.length < 1 || itemTime < 1}
          variant="primary"
          onClick={updateTask}
        >
          {" "}
          Update Task
        </Button>
      </Form>
      <div>{update ? <UpdateAlert /> : null}</div>
    </div>
  );
};

export default Task;
