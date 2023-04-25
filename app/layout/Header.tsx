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

  return (
    <header className="flex justify-between p-2">
      <h1>Title</h1>
      <nav>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in"> Sign In </Link>
        </SignedOut>
      </nav>
    </header>
  )
}