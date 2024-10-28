import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../taskList/AllTask'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] w-full h-screen text-white p-6'>
      <Header />
      <CreateTask />
      <AllTask />
      
    </div>
  )
}

export default AdminDashboard
