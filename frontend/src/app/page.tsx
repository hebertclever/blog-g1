import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">home page</h1>
      <br />
      <Link href="/user/1"> user page</Link>
      <br />
      <Link href="/1"> posts page</Link>
    </div>
  );
}
