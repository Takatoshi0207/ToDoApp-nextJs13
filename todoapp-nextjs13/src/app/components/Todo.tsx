'use client';

import { Task } from '@/types';
import React, { useState } from 'react'

interface TodoProps {
  todo: Task;
}

function Todo({ todo }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.title);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
  };

  return (
    <li
      key={todo.id}
      className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>

      {isEditing ? (
        <input
          type="text"
          className='border-gray-400 border rounded mr-2 py-1 px-2'
          value={editedTaskTitle}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div>
        {isEditing ? (
          <button className='text-blue-500 mr-3 font-semibold'
            onClick={handleSave}>
            save
          </button>
        ) : (
          <button className='text-green-500 mr-3 font-semibold'
            onClick={handleEdit}>
            edit
          </button>
        )}
        <button className='text-red-500 font-semibold'>Delete</button>
      </div>
    </li>
  )
}

export default Todo