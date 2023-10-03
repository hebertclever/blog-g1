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

    if (!formData.name || !formData.content) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comments/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const newComment = await response.json();

        setFormData({
          name: "",
          content: "",
        });
        updateComments(newComment);
      } else {
        alert("An error occurred while creating the comment.");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
      alert("An error occurred while creating the comment.");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Add Comment</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-600 font-semibold"
          >
            Comment
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Your comment..."
            className="w-full px-4 py-2 border rounded focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
