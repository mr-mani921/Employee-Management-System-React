import React, { useState } from "react";
import Header from "../other/Header";
import TasksOvervies from "../other/TasksOvervies";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({ userData }) => {
  const [status, setStatus] = useState("all"); // Default to show all tasks

  return (
    <div className="bg-[#1c1c1c] w-full min-h-screen p-10 text-white">
      <Header userData={userData} />
      <TasksOvervies userData={userData} setStatus={setStatus} />
      <TaskList tasks={userData.tasks} status={status} />
    </div>
  );
};

export default EmployeeDashboard;
