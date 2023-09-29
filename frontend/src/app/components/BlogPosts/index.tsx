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
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-5xl p-4'>
                
                <ul className='w-full sm:w-1/2'>
                    {posts.slice(0, 1).map(post => (
                        <li key={post.id}>
                            {post.image && (
                                <Image 
                                    src={post.image} 
                                    alt={`Imagem de ${post.title}`} 
                                    width={500} 
                                    height={500} 
                                />
                            )}
                            <p className='text-gray-500 mb-2'>{post.created_at}</p>
                            <h3 className='font-urbanist text-2xl font-bold leading-relaxed mb-2'>{post.title}</h3>
                            <p>{post.content.substring(0, 100)}...</p> 
                        </li>
                    ))}
                </ul>
    
                <ul className='w-full sm:w-1/2'>
                    {posts.slice(0, 3).map((post, index) => (
                        <li key={post.id} className='mb-6'>
                            <div className='flex items-center mb-2'>
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className='mr-2'
                                        style={
                                            { width: '50px', height: '50px' } 
                                        }
                                    />
                                )}
                                <div>
                                    <p className='text-gray-500 mb-2'>{post.created_at}</p>
                                    <h3 className='font-urbanist text-xl font-bold leading-relaxed mb-2'>{post.title}</h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
    
    
    
    
    

}