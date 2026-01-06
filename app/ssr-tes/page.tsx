export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  }).then((r) => r.json());

  return <div>{data.length}</div>;
}
