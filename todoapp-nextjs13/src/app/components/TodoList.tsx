import { Todo } from '@/types'
import React from 'react'

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
        <span>散歩</span>
        <div>
          <button className='text-green-500 mr-3 font-semibold'>edit</button>
          <button className='text-red-500 font-semibold'>Delete</button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList