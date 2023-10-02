// hooks/usePosts.js
import { useState, useEffect } from 'react';

function usePosts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts');
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar as postagens:", error);
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, isLoading };
}

export default usePosts;
