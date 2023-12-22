import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Todo = () => {
    const [isCompleteScreen, setIsCompleteScreen] = useState(true)
  return (
    <div className='w-2/3 mt-20 m-auto space-y-6'>
        <div className='flex gap-5'>
        <div className='flex flex-col'>
            <label >Title:</label>
            <input className='border w-72 p-2' type="text" placeholder='Whats the task title?' />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Description:</label> 
            <input className='border w-72 p-2' type="text" placeholder='Whats the task description?' />
        </div>
        </div>
        <div>
            <button type='button' className='btn bg-slate-400 w-72'>Add</button>
        </div>

        <div className='flex'>
            <button className={`p-3 bg-gray-400 ${isCompleteScreen === false && 'active:bg-green-600'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
            <button className={`p-3 bg-gray-400 ${isCompleteScreen === true && 'active:bg-green-600'}`} onClick={() => setIsCompleteScreen(true)}>Ongoing</button>
            <button className={`p-3 bg-gray-400 ${isCompleteScreen === true && 'active:bg-green-600'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='flex justify-between p-6 bg-slate-300'>
            <div className='flex flex-col '>
                <h3>Task 1</h3>
                <p>Description</p>
            </div>
            <div className='flex justify-between'>
            <MdDeleteForever />
            <FaCheck />
            </div>
        </div>
    </div>
  )
}

export default Todo