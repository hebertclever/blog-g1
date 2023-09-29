'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'




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
            <h2 className='font-urbanist text-6xl font-bold mb-4'>Blog & Article</h2>
            
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        {post.image && (
                            <Image 
                                src={post.image} 
                                alt={`Imagem de ${post.title}`} 
                                width={500} 
                                height={500} 
                            />
                        )}
                    </li>
                ))}
            </ul>
    
            <ul>
                {posts.slice(0, 3).map((post, index) => (
                    <li key={post.id} className='mb-6'>
                        {post.image && (
                            <img
                                src={post.image}
                                alt={post.title}
                                className='mb-4'
                                style={
                                    index === 0
                                        ? { width: '150px', height: '150px' }
                                        : { width: '150px', height: '150px' }
                                }
                            />
                        )}
                        <p className='text-gray-500 mb-2'>{post.created_at}</p>
                        <h3 className='font-urbanist text-2xl font-bold leading-relaxed mb-2'>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    

}