// -< Import Firestore >-
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'

interface IPost {
  title: string
  content: string
}

interface IProps {
  posts: IPost[]
}

export default function Home({ posts }: IProps) {
  // console.log(posts) // !

  return (
    <>
      <h1>Posts</h1>

      {posts.map((post: IPost, index: number) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}

// -< Firestore >-
export async function getStaticProps() {
  const snapshot = await getDocs(collection(db, 'posts'))
  const posts = snapshot.docs.map((doc) => doc.data())

  return {
    props: {
      posts,
    },
  }
}
