import React from "react";

const TasksOvervies = ({ userData }) => {
  return (
    <div className="w-full h-[22vh] mt-4 flex gap-8">
      <div className="task w-full flex flex-col items-start bg-blue-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">{userData.taskCounts.new}</p>
        <p className="font-semibold text-2xl">New Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-red-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">
          {userData.taskCounts.completed}
        </p>
        <p className="font-semibold text-2xl">Completed Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-yellow-400 p-8 rounded-xl text-black">
        <p className="count font-bold text-4xl">{userData.taskCounts.active}</p>
        <p className="font-semibold text-2xl">Accepted Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-green-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">{userData.taskCounts.failed}</p>
        <p className="font-semibold text-2xl">Failed Task</p>
      </div>
    </div>
  );
};

export default TasksOvervies;
