import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[40vh] w-full mt-12 flex gap-3 overflow-x-auto'>
      <div className='task h-full w-[26vw] bg-green-400 p-6 flex flex-col flex-shrink-0 items-start rounded-xl'>
        <div className='head w-full flex justify-between'>
            <p className='bg-red-500 px-3 py-1 rounded-md'>High</p>
            <p className="date mt-1">27 Nov 2024</p>
        </div>
        <div className="main mt-4 flex flex-col gap-1 items-start">
            <p className='title text-2xl font-bold'>Do Projects</p>
            <p className="descp text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet impedit cumque ullam blanditiis ipsa.</p>
        </div>
      </div>
      <div className='task h-full w-[26vw] bg-blue-400 p-6 flex flex-col flex-shrink-0 items-start rounded-xl'>
        <div className='head w-full flex justify-between'>
            <p className='bg-red-500 px-3 py-1 rounded-md'>High</p>
            <p className="date mt-1">27 Nov 2024</p>
        </div>
        <div className="main mt-4 flex flex-col gap-1 items-start">
            <p className='title text-2xl font-bold'>Do Projects</p>
            <p className="descp text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet impedit cumque ullam blanditiis ipsa.</p>
        </div>
      </div>
      <div className='task h-full w-[26vw] bg-red-400 p-6 flex flex-col flex-shrink-0 items-start rounded-xl'>
        <div className='head w-full flex justify-between'>
            <p className='bg-red-500 px-3 py-1 rounded-md'>High</p>
            <p className="date mt-1">27 Nov 2024</p>
        </div>
        <div className="main mt-4 flex flex-col gap-1 items-start">
            <p className='title text-2xl font-bold'>Do Projects</p>
            <p className="descp text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet impedit cumque ullam blanditiis ipsa.</p>
        </div>
      </div>
      <div className='task h-full w-[26vw] bg-yellow-400 p-6 flex flex-col flex-shrink-0 items-start rounded-xl'>
        <div className='head w-full flex justify-between'>
            <p className='bg-red-500 px-3 py-1 rounded-md'>High</p>
            <p className="date mt-1">27 Nov 2024</p>
        </div>
        <div className="main mt-4 flex flex-col gap-1 items-start">
            <p className='title text-2xl font-bold'>Do Projects</p>
            <p className="descp text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet impedit cumque ullam blanditiis ipsa.</p>
        </div>
      </div>
    </div>
  )
}

export default TaskList
