import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <>
      {router.pathname === '/' ? (
        <Link href='/'>Home</Link>
      ) : (
        <Link href='/'>Go Home</Link>
      )}
    </>
  )
}
