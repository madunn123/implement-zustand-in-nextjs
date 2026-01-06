import { FormInput } from "./formInput";
import { ListTodo } from "./listTodo";
import { getTodo } from "@/services/todo.service";

export default async function TodoPage() {
  const todos = getTodo();

  return (
    <div className="flex flex-col gap-4 w-150 mx-auto p-10 h-dvh">
      <FormInput />

      <div className="flex flex-col gap-y-4">
        <ListTodo promiseTodo={todos} />
      </div>
    </div>
  );
}
