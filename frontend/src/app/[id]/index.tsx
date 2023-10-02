import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost]:any = useState(null)

  useEffect(() => {
    async function fetchPost() {
      if (id) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`
        )
        const data = await response.json()
        setPost(data)
      }
    }

    fetchPost()
  }, [id])

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Post
