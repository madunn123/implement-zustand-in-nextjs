import { Todo } from "@/store/useJokowiStore";
import { FormInput } from "./formInput";
import { getTodo } from "@/services/todo.service";
import { ButtonComponent } from "./button";

export default async function TodoPage() {
  const todos = await getTodo();

  return (
    <div className="flex flex-col gap-4 w-150 mx-auto p-10 h-dvh">
      <FormInput />

      <div className="flex flex-col gap-y-4">
        {todos.map((todo: Todo, index: number) => (
          <div
            key={index}
            className="border border-slate-300 p-4 flex flex-col gap-2"
          >
            <h6 className="font-medium">{todo.title}</h6>
            <p className="text-sm text-black/80">{todo.description}</p>

            <ButtonComponent id={todo.id!} />
          </div>
        ))}
      </div>
    </div>
  );
}
