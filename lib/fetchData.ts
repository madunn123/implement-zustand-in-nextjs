// ============== Ini aku ubah ke yg lebih general ============== //
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const fetchData = async (endpoint: string, options: RequestInit = {}) => {
  const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// ============= fungsi buat fecth todos ============= //

export const getTodos = async () => {
  return fetchData('/api/todos');
};

export const createTodo = async (todoData: any) => {
  return fetchData('/api/todos', {
    method: 'POST',
    body: JSON.stringify(todoData),
  });
};