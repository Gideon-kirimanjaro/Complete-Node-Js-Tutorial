import axios from "axios";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import TaskComponent from "./TaskComponent";
import TaskForm from "./TaskForm";
import CustomModal from "./Ui/Modal/CustomModal";

const Home = (props) => {
  const { data } = props;
  const deleteTaskHandler = (id) => {
    alert("Are you sure you want to delete?");
    axios.delete(`http://localhost:4500/api/tasks/${id}`);
    props.deleteRender(id);
  };

  return (
    <div>
      <TaskForm
        updateRender={(data) => {
          props.postRender(data);
        }}
      />
      <TaskComponent>
        {data &&
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td></td>
                <td>{item.taskName}</td>
                <td>{item.taskTime}</td>
                <td>
                  {/* <CustomModal
                    task={item.taskName}
                    time={item.taskTime}
                    id={item.id}
                  /> */}
                  <Link to={`/task/${item.id}`}>Edit</Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteTaskHandler(item.id);
                    }}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </TaskComponent>
    </div>
  );
};

export default Home;