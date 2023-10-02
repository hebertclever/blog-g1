//src/components/Post

function Post({ postData }) {
    return (
      <div>
        <h1>{postData.title}</h1>
        <p>{postData.content}</p>
      </div>
    );
  }
  
  export default Post;
  
  // Se você estiver usando no arquivo [id].js:
  export async function getServerSideProps(context) {
    const { id } = context.params;
  
    // Faça uma chamada à API ou ao banco de dados para pegar os dados do post
    const postData = await fetchPostData(id);
  
    return {
      props: {
        postData
      }
    };
  }
  