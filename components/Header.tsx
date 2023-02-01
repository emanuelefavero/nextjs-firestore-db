import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <>
      {router.pathname === '/' ? (
        <Link className='link' href='/'>
          Home
        </Link>
      ) : (
        <Link className='link' href='/'>
          Go Home
        </Link>
      )}
    </>
  )
}
