"use client";
import React from "react";
import { useEffect, useState } from "react";

interface LatestPostProps {}

const LatestPost: React.FC<LatestPostProps> = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no pudo completarse con éxito.");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API", error);
      });
  }, []);

  return (
    <div className="w-full h-[40%] flex flex-col items-center">
      <div className="w-full h-auto flex justify-between p-2 ">
        <h3 className="font-semibold">Latest Posts</h3>
        <span className="font-semibold text-zinc-500 cursor-pointer">
          . . .
        </span>
      </div>

      <div className="w-[95%] h-[1px] bg-zinc-300" />

      <div className="w-full h-auto max-h-[300px] mt-3 overflow-y-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-[#9CA0BA] font-semibold">
              <th className="px-1 py-1">Title</th>
              <th className="px-1 py-1">Date</th>
              <th className="px-1 py-1">Comments</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((post, index) => (
                <tr key={index} className="h-[100px]">
                  <td className="px-2 py-2 flex gap-2">
                    <img
                      className="w-10 h-10"
                      src={post.image} // Reemplaza con la URL de la imagen real desde tus datos
                      alt={post.title} // Reemplaza con el título real desde tus datos
                    />
                    <span className="md:w-[150px] lg:w-[200px]">
                      {post.title}
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    {" "}
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-2 py-2">20</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestPost;
