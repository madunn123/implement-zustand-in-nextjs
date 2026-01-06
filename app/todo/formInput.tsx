"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useJokowiStore } from "@/store/useJokowiStore";
import { useForm } from "react-hook-form";

export function FormInput() {
  const onSubmit = useJokowiStore((state) => state.onSubmit);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <form
      className="border border-slate-300 p-6 flex flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <Input placeholder="Title" {...register("title")} />
      <Input placeholder="Description" {...register("description")} />

      <Button
        type="submit"
        variant="default"
        className="uppercase mt-2 cursor-pointer"
      >
        Add Todo
      </Button>
    </form>
  );
}
