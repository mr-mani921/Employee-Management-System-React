import React from "react";

const TaskList = ({ tasks, status }) => {
  const filteredTasks = tasks.filter((task) => {
    if (status === "all") return true;
    return task[status];
  });

  return (
    <div>
      <h2 className=" mt-8 mb-4 text-2xl">{status.toUpperCase()} TASKS</h2>
      <div className="task-list flex gap-4 overflow-y-auto">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task h-60 w-[26vw] ${task.style} p-6 flex flex-col flex-shrink-0 items-start justify-between rounded-xl`}
          >
            <div>
              <div className="head w-full flex justify-between">
                <p className="bg-red-500 px-3 py-1 rounded-md">High</p>
                <p className="date mt-1">{task.date}</p>
              </div>
              <div className="main mt-4 flex flex-col gap-1 items-start">
                <p className="title text-2xl font-bold">{task.title}</p>
                <p className="descp text-xl">{task.description}</p>
              </div>
            </div>
            
          </div>
        ))}
        {filteredTasks.length === 0 && <p>No tasks found for this category.</p>}
      </div>
    </div>
  );
};

export default TaskList;
