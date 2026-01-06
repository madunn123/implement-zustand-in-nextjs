import { create } from "zustand";
import { toast } from "sonner";
import { createTodo, deleteTodo } from "@/services/todo.service";

export type Todo = {
  id?: string;
  title: string;
  description: string;
};

type JokowiStore = {
  onSubmit: (payload: Todo) => void;
  deleteTodo: (id: string) => void;
};

export const useJokowiStore = create<JokowiStore>(() => ({
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
          id: Date.now().toString(),
        };

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

  deleteTodo: async (id: string) => {
    const toastId = toast.loading("Menghapus data...");
    try {
      await deleteTodo(id);

      toast.success("berhasil dihapus", {
        duration: 1000,
        id: toastId,
      });
    } catch {
      toast.error("gagal", {
        duration: 1000,
        id: toastId,
      });
      return;
    }
  },
}));
