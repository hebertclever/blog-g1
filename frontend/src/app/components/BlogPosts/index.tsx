
'use client'

import Image from 'next/image';
import { formatDateBR, formatDateUS } from '../../../utils/formatDate';

type BlogPostsProps = {
    posts: any[];
    isLoading: boolean;
};

const BlogPosts: React.FC<BlogPostsProps> = ({ posts, isLoading }) => {
    if (isLoading) {
        return <div className='text-center p-[20px]'>Carregando postagens...</div>;
    }

    return (
        <div className='flex justify-center min-h-screen pt-10 bg-[white]'>
            <div className='max-w-5xl p-4'>
                <div className='mb-4'>
                    <p className='mb-2 text-blue-400 font-bold'>NEWS & ARTICLES</p>
                    <h1 className='text-6xl font-bold'>Blog & Article</h1>
                </div>

                <div className='flex space-x-4 w-full'>
                    <ul className='flex-1'>
                        {posts.slice(0, 1).map(post => (
                            <li key={post.id}>
                                {post.image && (
                                    <Image
                                        src={post.image}
                                        alt={`Imagem de ${post.title}`}
                                        className='mr-2 image'
                                        width={600}
                                        height={500}
                                    />
                                )}
                                <p className='text-gray-400 mb-4 mt-6 font-semibold'>{formatDateUS(post.created_at)}</p>
                                <h3 className='font-urbanist text-2xl font-bold leading-relaxed mb-2'>{post.title}</h3>
                                <p>{post.content.substring(0, 100)}...</p>
                            </li>
                        ))}
                    </ul>

                    <ul className='flex-1'>
                        {posts.slice(1, 4).map(post => (
                            <li key={post.id} className='mb-6'>
                                <div className='flex items-center mb-2'>
                                    {post.image && (
                                        <Image
                                            src={post.image}
                                            alt={`Imagem de ${post.title}`}
                                            width={600}
                                            height={500}
                                            className='mr-2 image'
                                            style={
                                                { width: '200px', height: '160px' }
                                            }
                                        />
                                    )}
                                    <div>
                                        <p className='text-gray-400 mb-2 font-semibold'>{formatDateUS(post.created_at)}</p>
                                        <h3 className='font-urbanist text-xl font-bold leading-relaxed mb-2'>{post.title}</h3>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
