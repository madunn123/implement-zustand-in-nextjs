"use client";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/store/useTodoStore";

export default function ListTodo() {
  const { todos } = useTodoStore();
  console.log("todos", todos);

  return (
    <ul className="flex flex-col gap-2.5">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-col flex-wrap gap-4 border border-slate-400 rounded-xl p-4"
        >
          <div className="flex flex-col gap-1">
            <h6 className="text-lg font-bold">{todo?.title}</h6>
            <p className="text-sm text-slate-500">{todo?.author}</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Button
              type="button"
              variant="default"
              className="bg-yellow-600 text-white text-xs uppercase cursor-pointer"
            >
              edit
            </Button>
            <Button
              type="button"
              variant="default"
              className="bg-red-600 text-white text-xs uppercase cursor-pointer"
            >
              Remove
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
