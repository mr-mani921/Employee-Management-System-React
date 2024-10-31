import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../taskList/AllTask";

const AdminDashboard = ({ userData }) => {
  return (
    <div className="bg-[#1c1c1c] w-full h-screen text-white p-6">
      <Header userData={userData} />
      <CreateTask userData={userData} />
      <AllTask userData={userData} />
    </div>
  );
};

export default AdminDashboard;
