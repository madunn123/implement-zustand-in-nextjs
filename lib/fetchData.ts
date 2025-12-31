export const fetchData = async (url: string, option = {}) => {
  const response = await fetch(url, option);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};
