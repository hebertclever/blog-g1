import { useRouter } from 'next/router';
import Image from 'next/image';
import usePost from '../../hooks/usePost';

function BlogPost() {
    const router = useRouter();
    const { id } = router.query;
  
    const { post, isLoading } = usePost(id);
  
    if (isLoading || !post) return <p className="text-center mt-4">Carregando...</p>;
  
    return (
        <div className="p-4">
            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <div className="relative mb-4">
                <Image src={post.imageURL} alt={post.title} />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 space-y-2">
                    {/* Nossos ícones de rede social virá aqui galera */}
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">{post.shortDescription}</h3>
            <div className="text-base">
                {post.content}
            </div>
        </div>
    );
}

export default BlogPost;
