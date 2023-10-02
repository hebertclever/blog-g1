"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/posts"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error when searching for posts:", error);
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="p-8">
      <div>
        <div className="flex justify-center font-bold text-blue-400 pb-3 pt-12">
          <h3 className="text-xs">NEWS & ARTICLE</h3>
        </div>
        <div className="flex justify-center pb-24">
          <h1 className="flex text-4xl font-bold">Blog & Article</h1>
        </div>
        <div className="lg:px-80">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data &&
            data.map((item: any) => (
              <div key={item.id} className="flex border-t-2">
                <div className="w-28 h-20 pr-5 pt-8 pb-28">
                  <img src={item.image} alt={item.title} className="image" />
                </div>
                <div className="pt-8 lg:flex lg:justify-between lg:flex-grow">
                  <div>
                  <p className="text-gray-400 pb-2">
                    {new Date(item.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="pb-7 font-bold">{item.title}</p>
                  </div>
                  <div className="pb-8 text-blue-400 flex items-center">
                    <Link href={`/posts/${item.id}`}>Read</Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
