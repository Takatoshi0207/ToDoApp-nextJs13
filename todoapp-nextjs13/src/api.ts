// apiを全て取得する関数を作成
import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    cache: "no-store", //SSR
  });
  const todos = res.json();

  return todos;
};
