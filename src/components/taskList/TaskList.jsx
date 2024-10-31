import React from "react";

const TaskList = ({ userData }) => {
  return (
    <div
      id="taskList"
      className="h-[40vh] w-full mt-12 flex gap-3 overflow-x-auto"
    >
      {userData.tasks.map((e) => (
        <div key={e.id}
          className={`task h-full w-[26vw] ${e.style} p-6 flex flex-col flex-shrink-0 items-start rounded-xl`}
        >
          <div className="head w-full flex justify-between">
            <p className="bg-red-500 px-3 py-1 rounded-md">High</p>
            <p className="date mt-1">{e.date}</p>
          </div>
          <div className="main mt-4 flex flex-col gap-1 items-start">
            <p className="title text-2xl font-bold">{e.title}</p>
            <p className="descp text-xl">{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
