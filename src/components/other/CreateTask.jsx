import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full mt-4 rounded-lg p-6 border-gray-600 border-2">
      <form className="flex justify-between w-full">
        <div className="first w-1/2">
          <div className="">
            <p>Task Title</p>
            <input className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400" type="text" placeholder="Creating UI for e-commerce...etc" />
          </div>
          <div className="mt-2">
            <p>Date</p>
            <input className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400" type="date" />
          </div>
          <div className="mt-2">
            <p>Assign to</p>
            <input className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400" type="text" placeholder="employee name" />
          </div>
          <div className="mt-2">
            <p>Category</p>
            <input className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400" type="text" placeholder="design,dev etc." />
          </div>
        </div>
        <div className="second w-1/2 flex flex-col items-end">
            <p className="w-[80%]">Description</p>
            <textarea className="w-[80%] h-[60%] resize-none bg-transparent border-gray-600 border-2 rounded-lg"></textarea>
            <button className="w-[80%] mt-2 py-2 bg-green-500 rounded-md">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
