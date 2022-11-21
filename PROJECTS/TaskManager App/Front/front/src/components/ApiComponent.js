import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    fetch("http://localhost:4500/api/tasks")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const fetchTime = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => {
      return fetchTime;
    };
  }, [fetchData]);
  console.log(">>>", data);
  return <div></div>;
};

export default ApiComponent;
