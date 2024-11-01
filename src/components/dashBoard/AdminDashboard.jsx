import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../taskList/AllTask";

const AdminDashboard = ({setUser, userData }) => {
  return (
    <div className="bg-[#1c1c1c] w-full min-h-screen text-white p-6">
      <Header setUser={setUser} userData={userData} />
      <CreateTask userData={userData} />
      <AllTask userData={userData} />
    </div>
  );
};

export default AdminDashboard;
