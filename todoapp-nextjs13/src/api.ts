// apiを全て取得する関数を作成
import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    cache: "no-store", //SSR
  });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};
