import Link from "next/link";
import BlogPosts from "./components/BlogPosts";

export default function Home() {
  return (
    <div>
      <BlogPosts/>
      <h1 className="text-3xl font-bold underline">home page</h1>
      <br />
      <Link href="/user/1"> user page</Link>
      <br />
      <Link href="/1"> posts page</Link>
    </div>
  );
}
