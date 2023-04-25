"use client"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs/app-beta/client"
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
import Link from "next/link"


export default function Header() {

  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/sign-in')
    } 
    
  }, [user])

  const handleApi = async () => {
    const response = await fetch('/api/test')
    const data = await response.json()
    console.log(data)
  }

  return (
    <header className="flex justify-between p-2">
      <h1>Title</h1>
      <nav className="flex gap-2">
        <Link href="/demos"> demos </Link>
        <button onClick={handleApi}>test api</button>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in"> sign in </Link>
        </SignedOut>
      </nav>
    </header>
  )
}