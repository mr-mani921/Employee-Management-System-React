import React, { useEffect, useState } from "react";

// this component will display all the tasks of the respective logged in user.

const TaskList = ({ tasks, status,updateLocalStorage , loggedInUser}) => {
  
  //function for filtering task of specific category like active , failed and returning them
  const filterTasksByCategory = () => {
    if (!loggedInUser) return [];
    return loggedInUser.tasks.filter((task) => {
      if (status === "all") return true;
      return task[status];
    });
  };

  //storing the returned filterd task of the function filter by category into a variable
  const filteredTasks = filterTasksByCategory();

    //function for changing the task status to activate.
  const handleActivate = (taskId) => {
    const updatedTasks = loggedInUser.tasks.map((task) =>
      task.id === taskId
        ? { ...task, new: false, active: true, completed: false, failed: false }
        : task
    );
    //function for also changing the task counts when the task status is changed in the local storage for task overview and admin allTask sction
    const updatedTaskCounts = {
      ...loggedInUser.taskCounts,
      active: loggedInUser.taskCounts.active + 1,
      new: loggedInUser.taskCounts.new - 1,
    };
    updateLocalStorage({ ...loggedInUser, tasks: updatedTasks, taskCounts: updatedTaskCounts });
  };

    //function for changing the task status to completed.
  const handleComplete = (taskId) => {
    const updatedTasks = loggedInUser.tasks.map((task) =>
      task.id === taskId ? { ...task, active: false, completed: true } : task
    );
    const updatedTaskCounts = {
      ...loggedInUser.taskCounts,
      completed: loggedInUser.taskCounts.completed + 1,
      active: loggedInUser.taskCounts.active - 1,
    };
    updateLocalStorage({ ...loggedInUser, tasks: updatedTasks, taskCounts: updatedTaskCounts });
  };

    //function for changing the task status to failed.
  const handleFail = (taskId) => {
    const updatedTasks = loggedInUser.tasks.map((task) =>
      task.id === taskId ? { ...task, active: false, failed: true } : task
    );
    const updatedTaskCounts = {
      ...loggedInUser.taskCounts,
      failed: loggedInUser.taskCounts.failed + 1,
      active: loggedInUser.taskCounts.active - 1,
    };
    updateLocalStorage({ ...loggedInUser, tasks: updatedTasks, taskCounts: updatedTaskCounts });
  };

  return (
    <div>
      <h2 className="mt-8 mb-4 text-2xl">{status.toUpperCase()} TASKS</h2>
      <div id="taskList" className="task-list flex gap-4 overflow-y-auto">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task h-60 w-[26vw] ${task.style} p-6 flex flex-col flex-shrink-0 items-start justify-between rounded-xl`}
          >
            <div>
              <div className="head w-full flex justify-between">
                <p className="bg-red-500 px-3 py-1 rounded-md">{task.category}</p>
                <p className="date mt-1">{task.date}</p>
              </div>
              <div className="main mt-4 flex flex-col gap-1 items-start">
                <p className="title text-2xl font-bold">{task.title}</p>
                <p className="descp text-xl">{task.description}</p>
              </div>
            </div>
            <div>
              {task.new && !task.active && !task.completed && !task.failed ? (
                <button
                  onClick={() => handleActivate(task.id)}
                  className="bg-green-500 text-gray-900 font-bold text-lg px-4 py-1 rounded-md"
                >
                  Activate
                </button>
              ) : task.active ? (
                <div>
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="bg-green-500 text-gray-900 font-bold text-lg px-4 py-1 rounded-md"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleFail(task.id)}
                    className="bg-red-500 text-gray-900 font-bold text-lg px-4 py-1 rounded-md ml-16"
                  >
                    Failed
                  </button>
                </div>
              ) : task.completed ? (
                <p className="text-green-700 font-bold">Task Completed</p>
              ) : task.failed ? (
                <p className="text-red-700 font-bold">Task Failed</p>
              ) : (
                <p className="text-gray-500">Status Unknown</p>
              )}
            </div>
          </div>
        ))}
        {filteredTasks.length === 0 && <p>No tasks found for this category.</p>}
      </div>
    </div>
  );
};

export default TaskList;
