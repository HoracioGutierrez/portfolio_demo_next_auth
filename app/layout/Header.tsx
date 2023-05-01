"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta/client"
import Link from "next/link"


export default function Header() {

  return (
    <header className="flex justify-between p-2 md:p-3 lg:p-4">
      <div className="flex items-center gap-4 ">
        <div className="flex-none sm:hidden ml-[-14px]">
          <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <Link href={"/"}>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-2xl">Horacio Gutierrez</h1>
        </Link>
      </div>
      <nav className="gap-8 flex items-center group">
        <Link href="/demos" className="hidden sm:inline"> demos </Link>
        <Link href="/opiniones" className="hidden sm:inline"> opiniones </Link>
        <Link href="/dashboard" className="hidden sm:inline"> dashboard </Link>
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