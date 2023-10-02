"use client";
import { useState, useEffect } from "react";
import BlogPosts from "./components/BlogPosts";
import NewPosts from "./components/NewPosts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts');
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error when searching for posts:", error);
                setIsLoading(false);
            }
        }

    fetchPosts();
  }, []);

  return (
    <section>
      <BlogPosts posts={posts} isLoading={isLoading} />
      <NewPosts posts={posts} isLoading={isLoading} />
    </section>
  );
}
