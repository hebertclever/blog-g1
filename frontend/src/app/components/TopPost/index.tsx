"use client";
import React from "react";
import { useEffect, useState } from "react";

interface TopPostProps {}

const TopPost: React.FC<TopPostProps> = () => {
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
    <div className="w-full h-full flex flex-col items-center bg-white rounded-md px-1">
      <div className="w-full h-auto flex justify-between p-2 ">
        <h3 className="font-semibold">Top Posts</h3>
        <span className="font-semibold text-zinc-500 cursor-pointer">
          . . .
        </span>
      </div>

      <div className="w-[95%] h-[1px] bg-zinc-300" />

      <div className="w-full h-[565px] mt-3 overflow-hidden ">
        {data &&
          data.map((post, index) => (
            <div key={index} className="h-[120px] w-[250px]">
              <div className="px-2 py-2 flex gap-2">
                <img
                  className=" w-16 h-16"
                  src={post.image} // Reemplaza con la URL de la imagen real desde tus datos
                  alt={post.title} // Reemplaza con el título real desde tus datos
                />
                <span className="w-[150px] ">{post.title}</span>
                <button className="h-5 w-16 rounded-sm text-sm bg-blue-400/80 text-white">
                  Review
                </button>
              </div>
            </div>
          ))}
      </div>

      <button className="w-full h-10 mt-3 bg-[#e7e9f5] text-[#3246D3] cursor-pointer">
        See All
      </button>
    </div>
  );
};

export default TopPost;
