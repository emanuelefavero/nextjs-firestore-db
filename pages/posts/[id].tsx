import React from 'react'
import { useRouter } from 'next/router'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/config'

type Post = {
  title: string
  content: string
}

interface Props {
  post: Post
}

export default function PostDetail({ post }: Props) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  const postsRef = collection(db, 'posts')
  const snapshot = await getDocs(postsRef)
  const posts = snapshot.docs.map((doc: any) => {
    return {
      params: { id: doc.id },
    }
  })

  return {
    paths: posts,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const postRef = doc(db, 'posts', params.id)
  const snap = await getDoc(postRef)
  const post = snap.data() as Post

  return {
    props: {
      post,
    },
  }
}
