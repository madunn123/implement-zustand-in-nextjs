"use client";

import { Button } from "@/components/ui/button";
import { useJokowiStore } from "@/store/useJokowiStore";

export function ButtonComponent({ id }: { id: string }) {
  const deleteTodo = useJokowiStore((state) => state.deleteTodo);

  return (
    <div className="flex flex-row justify-end gap-2 mt-2">
      <Button
        variant="outline"
        className="capitalize bg-yellow-500 text-white cursor-pointer"
      >
        edit
      </Button>
      <Button
        variant="outline"
        className="capitalize bg-red-500 text-white cursor-pointer"
        onClick={() => deleteTodo(id)}
      >
        delete
      </Button>
    </div>
  );
}
