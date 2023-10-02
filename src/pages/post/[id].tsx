import { useRouter } from 'next/router';
import Post from '../../app/components/Post';
import usePost from '../../hooks/usePost';

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const { post, isLoading } = usePost(id);

  if (isLoading || !post) return <p>Carregando...</p>;

  return <Post postData={post} />;
}

export default BlogPost;
