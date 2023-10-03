"use client";

import { useState } from "react";
//import { useRouter } from "next/router";
import Link from "next/link";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //const router = useRouter(); // Inicializa o hook useRouter

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        router.push("/login");
      } else {
        console.error("Erro ao criar usuário");
      }
    } catch (error) {
      console.error("Erro ao criar usuário", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form
        className="w-[90%] h-[650px] md:w-[600px] md:p-10 md:border flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="self-start mb-5 font-semibold text-xl">Register</h2>
        <div className="w-full flex flex-col gap-2">
          <span>Name</span>
          <input
            className="border h-12 px-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <span>Email</span>
          <input
            className="border h-12 px-2"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <span>Password</span>
          <input
            className="border h-12 px-2"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="border h-12 bg-blue-500 mb-12 text-white mt-10"
        >
          Register
        </button>
        <span>
          Do you already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
