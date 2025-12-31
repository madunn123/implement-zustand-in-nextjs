import { create } from "zustand";
import { TodoTypes } from "../types/todoTypes";
import { getTodos, createTodo } from "@/lib/fetchData";

interface TodoStore {
  todos: TodoTypes[];
  loading: boolean;
  error: string | null;
  
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Omit<TodoTypes, 'id'>) => Promise<void>;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  loading: false,
  error: null,
  
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const todos = await getTodos();
      console.log("Todos fetched:", todos);
      set({ todos, loading: false });
    } catch (error) {
      console.error("Error fetching todos:", error);
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch todos',
        loading: false 
      });
    }
  },
  
  addTodo: async (todoData) => {
    set({ loading: true });
    try {
      const newTodo = await createTodo(todoData);
      set((state) => ({
        todos: [...state.todos, newTodo],
        loading: false
      }));
    } catch (error) {
      console.error("Error adding todo:", error);
      set({ loading: false });
    }
  },
  
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  }
}));