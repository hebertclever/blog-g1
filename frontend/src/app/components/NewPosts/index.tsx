"use client";
import Image from "next/image";
import { formatDateBR, formatDateUS } from "../../../utils/formatDate";
import classes from "./newPosts.module.css";
import { useEffect, useState } from "react";

const NewPosts = ({ posts, isLoading }: any) => {
  const [load, setLoad] = useState(false);
  const [screen, setScreen]: any = useState(6);

  useEffect(() => {
    setScreenWidth();

    window.addEventListener("resize", setScreenWidth);

    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);

  const setScreenWidth = () => {
    if (typeof window !== "undefined") {
      const width = window?.innerWidth > 1024 ? 8 : 6;
      setScreen(width);
    }
  };

  return (
    <div className="border-t py-[30px] max-w-[1100px] mx-[auto]">
      {!isLoading && (
        <>
          <h1 className="text-6xl font-bold pl-[20px]">New Post</h1>
          <p className="text-[16px] text-[#808D9E] mb-[30px] pl-[20px]">
            Velit officia consequat duis enim velit mollit
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4	gap-[20px] items-center justify-center md:px-[20px]">
            {posts.map((post: any) => {
              if (post.id <= screen || load) {
                return (
                  <li key={post.id} className="mb-6 w-[200px]">
                    <a href={`/${post.id}`} className="mb-2">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={`Imagem de ${post.title}`}
                          width={156}
                          height={120}
                          className="mr-2 image"
                          priority={true}
                          style={{ width: "200px", height: "160px" }}
                        />
                      )}
                      <p className="text-gray-400 mb-2 text-[16px] font-normal pt-[10px]">
                        {formatDateUS(post.created_at)}
                      </p>
                      <h3
                        className={`font-urbanist text-[16px] leading-relaxed mb-2 ${classes.information}`}
                      >
                        {post.title}
                      </h3>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          {!load && (
            <button
              className="text-[#2A85FF] bg-[#F2F4FC] p-[10px] rounded block mx-[auto]"
              onClick={() => setLoad(true)}
            >
              Load more post
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default NewPosts;
