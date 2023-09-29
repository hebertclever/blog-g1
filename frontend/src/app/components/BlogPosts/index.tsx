'use client'
import { useEffect, useState } from 'react';


export default function BlogPosts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts');
                const data = await response.json();
                setPosts(data);
                console.log(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar as postagens:", error);
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>Carregando postagens...</div>;
    }

    return (
        <div>
            <h2>Postagens do Blog</h2>
            <ul>
                {posts.map(post => (
                    
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}