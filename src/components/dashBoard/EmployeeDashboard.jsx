import React, { useEffect } from "react";
import Header from "../other/Header";
import TasksOvervies from "../other/TasksOvervies";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({ userData }) => {
  return (
    <div className="bg-[#1c1c1c] w-full h-screen p-10 text-white">
      <Header userData={userData} />
      <TasksOvervies userData={userData} />
      <TaskList userData={userData} />
    </div>
  );
};

export default EmployeeDashboard;
