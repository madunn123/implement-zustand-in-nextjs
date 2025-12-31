import Link from "next/link";

export function Nav() {
  return (
    <nav className="bg-slate-600 p-3 mt-7 w-full shadow-lg rounded-full">
      <ul className="flex flex-row flex-wrap uppercase text-sm gap-10 justify-center text-slate-100">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
