import { create } from "zustand";
import { TodoTypes } from "../types/todoTypes";
import { getTodos } from "../app/api/todos/route";

interface TodoStore {
  todos: TodoTypes[];

  fetchAll: () => Promise<void>;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  fetchAll: async () => {
    try {
      const todos = await getTodos();
      console.log(todos, "todos store");
      set({ todos });
    } catch (error) {
      console.log(error);
    }
  },
}));
