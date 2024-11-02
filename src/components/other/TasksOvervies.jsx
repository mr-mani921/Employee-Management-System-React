import React from "react";

const TasksOvervies = ({ userData, setStatus, taskCounts }) => {
  return (
    <div className="w-full h-[34vh] mt-4 flex gap-8">
      <div className="task w-full h-full flex flex-col justify-between items-start bg-blue-400 p-8 rounded-xl">
        <div>
          <p className="count font-bold text-4xl">{taskCounts?.new}</p>
          <p className="font-semibold text-2xl">New Task</p>
        </div>
        <button
          onClick={() => setStatus("new")}
          className="mt-4 w-full font-bold text-xl bg-yellow-400 text-black rounded-md"
        >
          Show
        </button>
      </div>
      <div className="task w-full h-full flex flex-col justify-between items-start bg-red-400 p-8 rounded-xl">
        <div>
          <p className="count font-bold text-4xl">
            {taskCounts?.completed}
          </p>
          <p className="font-semibold text-2xl">Completed Task</p>
        </div>
        <button
          onClick={() => setStatus("completed")}
          className="mt-4 w-full font-bold text-xl bg-green-400 text-black rounded-md"
        >
          Show
        </button>
      </div>
      <div className="task w-full h-full flex flex-col justify-between items-start bg-yellow-400 p-8 rounded-xl text-black">
        <div>
          <p className="count font-bold text-4xl">
            {taskCounts?.active}
          </p>
          <p className="font-semibold text-2xl">Active Task</p>
        </div>
        <button
          onClick={() => setStatus("active")}
          className="mt-4 w-full font-bold text-xl bg-blue-400 text-black rounded-md"
        >
          Show
        </button>
      </div>
      <div className="task w-full h-full flex flex-col justify-between items-start bg-green-400 p-8 rounded-xl">
        <div>
          <p className="count font-bold text-4xl">
            {taskCounts?.failed}
          </p>
          <p className="font-semibold text-2xl">Failed Task</p>
        </div>
        <button
          onClick={() => setStatus("failed")}
          className="mt-4 w-full font-bold text-xl bg-red-400 text-black rounded-md"
        >
          Show
        </button>
      </div>
      <div className="task w-full h-full flex flex-col justify-between items-start bg-zinc-800 p-8 rounded-xl">
        <div>
          <p className="count font-bold text-4xl">{userData.tasks.length}</p>
          <p className="font-semibold text-2xl">Total Tasks</p>
        </div>
        <button
          onClick={() => setStatus("all")}
          className="mt-4 w-full font-bold text-xl bg-yellow-400 text-black rounded-md"
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default TasksOvervies;
