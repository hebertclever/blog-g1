import React, { useState } from "react";

const CommentForm = ({ postId, updateComments }) => {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifique se os campos obrigatórios estão preenchidos
    if (!formData.name || !formData.content) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newComment = await response.json();
        // Limpe o formulário e atualize a lista de comentários
        setFormData({
          name: "",
          content: "",
        });
        updateComments(newComment);
      } else {
        alert("Ocorreu um erro ao criar o comentário.");
      }
    } catch (error) {
      console.error("Erro ao criar o comentário:", error);
      alert("Ocorreu um erro ao criar o comentário.");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Adicionar Comentário</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full px-4 py-2 border rounded focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600 font-semibold">Comentário</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Seu comentário..."
            className="w-full px-4 py-2 border rounded focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Enviar Comentário
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
