import { Metadata } from "next";
import { Nav } from "@/components/nav";
import FormInput from "./formInput";
import ListTodo from "./listTodo";
import { Suspense } from "react";
import { useTodoStore } from "@/store/useTodoStore";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
//   useTodoStore().fetchAll();

  return (
    <main className="w-100 mx-auto flex flex-col gap-8">
      <Nav />
      <FormInput />

      <Suspense fallback={<p>Loading...</p>}>
        <ListTodo />
      </Suspense>
    </main>
  );
}
