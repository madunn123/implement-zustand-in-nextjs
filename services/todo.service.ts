import { Todo } from "@/store/useJokowiStore";

export async function getTodo() {
  const response = await fetch("http://localhost:1000/todos", {
    cache: "no-store",
  });

  return response.json();
}

export async function createTodo(payload: Todo) {
  const response = await fetch("http://localhost:1000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
}

export async function deleteTodo(id: number) {
  const response = await fetch(`http://localhost:1000/todos/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
