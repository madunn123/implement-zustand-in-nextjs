"use client";

import { useJokowiStore } from "@/store/useJokowiStore";
import type { Todo } from "@/store/useJokowiStore";
import { use, useEffect } from "react";
import { ButtonComponent } from "./button";

export function ListTodo({ promiseTodo }: { promiseTodo: Promise<Todo[]> }) {
  const fetchTodo = use(promiseTodo);

  const todos = useJokowiStore((state) => state.todos);
  console.log(todos);

  const setInitialTodos = useJokowiStore((state) => state.setInitialTodos);

  useEffect(() => {
    setInitialTodos(fetchTodo);
  }, [fetchTodo, setInitialTodos]);

  return (
    <>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border border-slate-300 p-4 flex flex-col gap-2"
        >
          <h6 className="font-medium">{todo.title}</h6>
          <p className="text-sm text-black/80">{todo.description}</p>

          <ButtonComponent id={todo.id!} />
        </div>
      ))}
    </>
  );
}
