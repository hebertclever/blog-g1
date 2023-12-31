"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDateUS } from "../../../utils/formatDate";

type BlogPostsProps = {
  posts: any[];
  isLoading: boolean;
};

const BlogPosts: React.FC<BlogPostsProps> = ({ posts, isLoading }) => {
  if (isLoading) {
    return <div className="text-center p-[20px]">Loading posts...</div>;
  }

  return (
    <div className="flex justify-center min-h-screen pt-10 bg-[white]">
      <div className="max-w-5xl p-4">
        <div className="mb-4">
          <p className="mb-2 text-blue-400 font-bold">NEWS & ARTICLES</p>
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Blog & Article
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
          <ul className="flex-1">
            {posts.slice(0, 1).map((post) => (
              <li key={post.id}>
                <Link href={`/${post.id}`}>
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={`Imagem de ${post.title}`}
                      className="mr-2 image"
                      width={800}
                      height={500}
                      className="image w-full"
                    />
                  )}
                  <p className="text-gray-400 mb-4 mt-6 font-semibold">
                    {formatDateUS(post.created_at)}
                  </p>
                  <h3 className="font-urbanist text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold leading-relaxed mb-2">
                    {post.title}
                  </h3>
                  <p>{post.content.substring(0, 100)}...</p>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex-1">
            {posts.slice(1, 4).map((post) => (
              <li key={post.id} className="mb-6">
                <Link href={`/${post.id}`}>
                  <div className="flex items-center mb-2">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={`Imagem de ${post.title}`}
                        width={200}
                        height={200} 
                        layout="fixed" 
                        objectFit="cover" 
                        className="mr-2 image rounded-lg"
                      />
                    )}

                    <div>
                      <p className="text-gray-400 mb-2 font-semibold ml-6">
                        {formatDateUS(post.created_at)}
                      </p>
                      <h3 className="font-urbanist text-xl font-bold leading-relaxed mb-2 ml-6">
                        {post.title}
                      </h3>
                      <p className="lg:hidden ml-6">
                        {post.content.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
            <div className="text-blue-400 flex items-center justify-center ml-6 text-semibold">
              <Link href={`/users`}>See more</Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
