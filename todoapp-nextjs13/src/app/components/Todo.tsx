import { Task } from '@/types';
import React from 'react'

interface TodoProps {
  todo: Task;
}

function Todo({ todo }: TodoProps) {
  return (
    <li
      key={todo.id}
      className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
      <span>{todo.title}</span>
      <div>
        <button className='text-green-500 mr-3 font-semibold'>edit</button>
        <button className='text-red-500 font-semibold'>Delete</button>
      </div>
    </li>
  )
}

export default Todo