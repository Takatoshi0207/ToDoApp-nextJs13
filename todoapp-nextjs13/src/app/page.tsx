import AddTask from './components/AddTask'
import TodoList from './components/TodoList'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 ">
      <h1 >Next 13 Todo App</h1>
      <div>
        <div>
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  )
}
