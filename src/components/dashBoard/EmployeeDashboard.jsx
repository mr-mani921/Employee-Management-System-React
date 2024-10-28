import React from 'react'
import Header from '../other/Header'
import TasksOvervies from '../other/TasksOvervies'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] w-full h-screen p-10 text-white">
      <Header />
      <TasksOvervies />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
