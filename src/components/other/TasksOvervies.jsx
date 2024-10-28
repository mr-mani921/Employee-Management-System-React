import React from 'react'

const TasksOvervies = () => {
  return (
    <div className='w-full h-[22vh] mt-4 flex gap-8'>
      <div className="task w-full flex flex-col items-start bg-blue-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">0</p>
        <p className='font-semibold text-2xl'>New Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-red-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">1</p>
        <p className='font-semibold text-2xl'>New Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-yellow-400 p-8 rounded-xl text-black">
        <p className="count font-bold text-4xl">2</p>
        <p className='font-semibold text-2xl'>New Task</p>
      </div>
      <div className="task w-full flex flex-col items-start bg-green-400 p-8 rounded-xl">
        <p className="count font-bold text-4xl">4</p>
        <p className='font-semibold text-2xl'>New Task</p>
      </div>
    </div>
  )
}

export default TasksOvervies
