import { useRouter } from 'next/router'
// -< Import Firestore >-
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/config'

// Types
import IPost from '@/interfaces/IPost'
interface IProps {
  post: IPost
}

export default function PostDetail({ post }: IProps) {
  const router = useRouter()

  // if router is still loading, show loading message
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

// -< Firestore >-
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

// -< Firestore >-
export const getStaticProps = async ({ params }: any) => {
  const postRef = doc(db, 'posts', params.id)
  const snap = await getDoc(postRef)
  const post = {
    // * assign id property to each post (from Firestore document id)
    id: snap.id,
    ...snap.data(),
  }

  return {
    props: {
      post,
    },
  }
}
