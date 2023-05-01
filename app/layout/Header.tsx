"use client"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs/app-beta/client"
import Link from "next/link"


export default function Header() {

  return (
    <header className="flex justify-between p-2 md:p-3 lg:p-4">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-2xl">Custom Page</h1>
      <nav className="gap-8 flex items-center group">
        <Link href="/demos" className="hidden sm:inline"> demos </Link>
        <Link href="/opiniones" className="hidden sm:inline"> opiniones </Link>
        <SignedIn>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl={"/dashboard"}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in"> sign in </Link>
        </SignedOut>
      </nav>
    </header>
  )
}