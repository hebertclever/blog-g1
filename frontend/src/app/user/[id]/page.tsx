"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link href="/">Página Inicial</Link>
      <div>
        <div className="flex justify-center font-bold text-blue-400 pb-3 pt-">
          <h3 className="text-xs">NEWS & ARTICLE</h3>
        </div>
        <div className="flex justify-center pb-12">
          <h1 className="flex text-4xl font-bold">Blog & Article</h1>
        </div>
        {data &&
          data.map((item: any) => (
            <div key={item.id} className="flex border-t-2">
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <p>{new Date(item.created_at).toLocaleDateString()}</p>
                <p>{item.title}</p>
                <Link href={`/posts/${item.id}`}>
                  <a>Leia Mais</a>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
