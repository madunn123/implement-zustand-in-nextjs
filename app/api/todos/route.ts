import { fetchData } from "@/lib/fetchData";
import { TodoTypes } from "@/types/todoTypes";

const API_URL = "http://localhost:3001";

export async function getTodos(): Promise<TodoTypes[]> {
  const res = await fetchData(`${API_URL}/todos`);
  return res;
}
