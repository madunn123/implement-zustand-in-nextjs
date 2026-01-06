import { create } from "zustand";
import { toast } from "sonner";
import { createTodo } from "@/services/todo.service";

export type Todo = {
  id?: number;
  title: string;
  description: string;
};

type JokowiStore = {
  todos: Todo[];

  setInitialTodos: (todos: Todo[]) => void;

  addTodo: (payload: Todo) => void;
  onSubmit: (payload: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const useJokowiStore = create<JokowiStore>((set, _, store) => ({
  todos: [],

  setInitialTodos: (payload: Todo[]) => {
    set({ todos: payload });
  },

  addTodo: (payload: Todo) => {
    set((state) => ({
      todos: [...state.todos, payload],
    }));
  },

  onSubmit: async (payload) => {
    const toastId = toast.loading("Menyimpan data...");

    try {
      if (!payload?.title || !payload?.description) {
        toast.error("harap lengkapi form", {
          duration: 1000,
        });
        return;
      }

      if (payload?.title && payload?.description) {
        const payloads = {
          ...payload,
          id: Date.now(),
        };

        store.getState().addTodo(payloads);

        await createTodo(payloads);

        toast.success("berhasil", {
          duration: 1000,
          id: toastId,
        });
      }
    } catch {
      toast.error("gagal", {
        duration: 1000,
        id: toastId,
      });
    }
  },

  deleteTodo: (id: number) => {
    const toastId = toast.loading("Menghapus data...");
    
    set((state) => {
      toast.success("berhasil dihapus", {
        duration: 1000,
        id: toastId,
      });
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    });
  },
}));
