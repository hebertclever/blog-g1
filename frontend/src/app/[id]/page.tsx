"use client";

import { useParams } from "next/navigation";
import CommentComponent from "../components/Comments";
import React, { useEffect, useState } from "react";
import { formatDateUS } from "@/utils/formatDate";

const Post = () => {
  const { id } = useParams();
  const [post, setPost]: any = useState(null);

  useEffect(() => {
    async function fetchPostAndComments() {
      if (id) {
        const postResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`
        );
        const postData = await postResponse.json();

        setPost(postData); // Define o estado 'post' com o objeto 'postData' completo
      }
    }

    fetchPostAndComments();
  }, [id]);

  return (
    <div>
      {post ? (
        <div className="h-auto flex flex-col px-5">
          <section className="w-full h-auto flex flex-col items-center mt-24 mb-32">
            <div className="text-gray-400 text-4xl font-semibold">
              {formatDateUS(post.created_at)}
            </div>
            <h1 className="w-[350px] md:w-[1200px] font-semibold text-[#1D1E25] text-[40px] md:text-[72px] text-center mb-20">
              {post.title}
            </h1>
            <div className="w-full max-w-[1127px] h-[507px] bg-[#E9ECF2] rounded-md">
              <img
                src={post.image}
                alt={post.title}
                className="image w-full h-full object-cover"
              />
            </div>
            <div className="max-w-[962px] h-auto flex flex-col mx-auto">
              <h3 className="text-[#1D1E25] font-semibold text-[36px] mt-12">
                {post.content ? post.content.substring(0, 120) : ""}
              </h3>
              <div className="text-[#1D1E25] font-[500] text-[20px] mt-10">
                <p>{post.content}</p>
              </div>
            </div>
          </section>
          <div className="max-w-[962px] h-auto flex flex-col mx-auto">
            {/* ... restante do código ... */}
            <div className="my-10 ">
              <h2 className="text-xl font-bold">Comentários</h2>
              {post &&
                post.comments &&
                post.comments.map((comment: any) => (
                  <CommentComponent key={comment.id} comment={comment} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center p-[20px]">Loading...</p>
      )}
    </div>
  );
};

export default Post;
