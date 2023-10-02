// hooks/usePost.js
import { useState, useEffect } from 'react';

function usePost(postId) {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            if (!postId) return; // Se não tiver postId, não fazer a chamada.

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`);
                const data = await response.json();
                setPost(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar a postagem:", error);
                setIsLoading(false);
            }
        }

        fetchPost();
    }, [postId]); 

    return { post, isLoading };
}

export default usePost;
