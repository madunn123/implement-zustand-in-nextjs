import { Metadata } from "next";
import { Nav } from "@/components/nav";
import FormInput from "./formInput";
import ListTodo from "./listTodo";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

async function getServerTodos() {
  try {
    const response = await fetch('http://localhost:3001/api/todos', {
      cache: 'no-store' // ini buat fetching data baru setiap saat
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Server fetch error:", error);
    return []; // Return empty array kalau error
  }
}

export default async function DashboardPage() {
  // Fetch data DI SERVER
  const serverTodos = await getServerTodos();
  console.log("Server todos:", serverTodos);

  return (
    <main className="w-100 mx-auto flex flex-col gap-8">
      <Nav />
      <FormInput />
      
      <ListTodo initialTodos={serverTodos} />
    </main>
  );
}

//=====================================//
//=========SUSPENSE AKU HAPUS==========//