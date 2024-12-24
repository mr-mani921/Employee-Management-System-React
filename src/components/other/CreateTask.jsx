import React, { useState } from "react";

const CreateTask = ({setUserData}) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    date: "",
    category: "",
    description: "",
    style: "",
  });
  //Form's submit handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      title: "",
      date: "",
      category: "",
      description: "",
      style: "",
    });
    //Fetched and stored the all present employees data in the local storage.
    const empData = JSON.parse(localStorage.getItem("employees"));

    //Found the targeted employee to whom the task is gonna assign by comparing his/her name with the stored employees.
    const targetedEmployee = empData.find((e)=>(e.name==formData.name));
    

    const index = empData.findIndex((item)=> targetedEmployee.id == item.id);
    
    //stored new task in the variable to push it in the respective employee data
    const newTask = {id: targetedEmployee.tasks.length+1, title: formData.title, description: formData.description, date: formData.date, category: formData.category, active:false,new:true,completed: false, failed: false,style:formData.style}
    targetedEmployee.taskCounts.new += 1;
    targetedEmployee.tasks.push(newTask)
    
    let newEmpData;
    //A security check that if the employee's id is found or not.
    if(index !== -1){
      //Created a new employee data with all the previous data except the data of the employee to whom the task is assigned this will update the employees data while mantaining the previous data.
      newEmpData = [
        ...empData.slice(0,index),targetedEmployee, ...empData.slice(index+1)
      ] 
    }    

    //in last set the update employees in the localstorage.
    localStorage.setItem('employees',JSON.stringify(newEmpData))
  };

  //input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full mt-4 rounded-lg p-6 border-gray-600 border-2">
      <form onSubmit={handleSubmit} className="flex justify-between w-full">
        <div className="first w-1/2">
          <div className="">
            <p>Task Title</p>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              placeholder="Creating UI for e-commerce...etc"
              className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400"
            />
          </div>
          <div className="mt-2">
            <p>Date</p>
            <input
              name="date"
              type="date"
              onChange={handleChange}
              value={formData.date}
              className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400"
            />
          </div>
          <div className="mt-2">
            <p>Assign to</p>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="employee name"
              className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400"
            />
          </div>
          <div className="mt-2">
            <p>Category</p>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              value={formData.category}
              placeholder="design,dev etc."
              className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="second w-1/2 flex flex-col items-end">
          <p className="w-[80%]">Card Background Color</p>
          <input
              type="text"
              name="style"
              onChange={handleChange}
              value={formData.style}
              placeholder="bg-blue-500 etc."
              className="bg-transparent w-[80%] outline-none border-gray-500 border-2 rounded-lg px-3 py-2  placeholder:text-gray-400"
            />          <p className="w-[80%]">Description</p>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="w-[80%] h-[60%] resize-none bg-transparent border-gray-600 border-2 rounded-lg"
          ></textarea>
          <button className="w-[80%] mt-2 py-2 bg-green-500 rounded-md">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
