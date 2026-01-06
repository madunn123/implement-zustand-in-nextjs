export const revalidate = 60;

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "force-cache",
  }).then((r) => r.json());

  return <div>{data.length}</div>;
}
