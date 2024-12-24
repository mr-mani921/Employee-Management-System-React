import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

//component that will display all the tasks of all the employees in the admin dashboard.

const AllTask = () => {
  const userData = useContext(AuthContext);
  return (
    <div className="w-full mt-4 rounded-lg p-6 border-gray-600 border-2 font-bold text-lg flex flex-col overflow-y-auto gap-2">
      <div className="flex justify-between items-center flex-shrink-0 w-full h-10 bg-red-600 px-4 rounded-md">
        <p className="w-1/5  flex justify-center">Name</p>
        <p className="w-1/5  flex justify-center">New Tasks</p>
        <p className="w-1/5  flex justify-center ">Active Tasks</p>
        <p className="w-1/5  flex justify-center ">Cmpleted Tasks</p>
        <p className="w-1/5  flex justify-center ">Failed Tasks</p>
      </div>
      {userData.employees.map((e) => (
        <div
          key={e.id}
          className="flex justify-between items-center flex-shrink-0 font-medium text-lg w-full h-10  px-4 border-emerald-500 border-2 rounded-md"
        >
          <p className="w-1/5 text-zinc-400 flex justify-center">{e.name}</p>
          <p className="w-1/5 text-green-500 flex justify-center">{e.taskCounts.new}</p>
          <p className="w-1/5 text-yellow-500 flex justify-center ">{e.taskCounts.active}</p>
          <p className="w-1/5 text-blue-500 flex justify-center ">{e.taskCounts.completed}</p>
          <p className="w-1/5 text-red-500 flex justify-center ">{e.taskCounts.failed}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
