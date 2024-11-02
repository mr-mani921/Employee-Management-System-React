import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TasksOvervies from "../other/TasksOvervies";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({ setUser, userData }) => {
  const [status, setStatus] = useState("all"); // Default to show all tasks
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser && storedUser.data) {
      setLoggedInUser(storedUser.data);
    }
  }, []);


  const updateLocalStorage = (updatedUserData) => {
    const updatedLoggedInUser = {
      ...JSON.parse(localStorage.getItem("loggedInUser")),
      data: updatedUserData,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedLoggedInUser));
    setLoggedInUser(updatedUserData);
  };
  return (
    <div className="bg-[#1c1c1c] w-full min-h-screen p-10 text-white">
      <Header setUser={setUser} userData={userData} />
      {loggedInUser && (
        <TasksOvervies
          userData={userData}
          setStatus={setStatus}
          taskCounts={loggedInUser.taskCounts || { new: 0, completed: 0, active: 0, failed: 0 }}        />
      )}
      <TaskList
        tasks={userData.tasks}
        status={status}
        userData={userData}
        updateLocalStorage={updateLocalStorage}
        loggedInUser={loggedInUser}
      />
    </div>
  );
};

export default EmployeeDashboard;
