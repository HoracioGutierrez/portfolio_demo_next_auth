"use client"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs/app-beta/client"
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
import Link from "next/link"


export default function Header() {

  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    console.log("effect")
    console.log(user)
    if (!user) {
      router.push('/sign-in')
    }
  }, [user])

  return (
    <header>
      <h1>Header</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in"> Sign In </Link>
      </SignedOut>
    </header>
  )
}