"use client"
import { useForm } from "react-hook-form";
import { useSignIn, useSignUp } from '@clerk/clerk-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ActiveSessionResource, SignInResource } from "@clerk/types"
import { useState } from "react";

export default function SignInForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, setSession, setActive } = useSignIn()
  const { signUp } = useSignUp()
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSignedIn, setIsSignedIn] = useState(false)

  const onSubmit = (data: any) => {
    if (isSignedIn) {
      customSignIn(data.email, data.password)
    } else {
      customSignUp(data.email, data.password)
    }
  }

  const customSignIn = (identifier: string, password: string) => {
    signIn?.create({
      identifier,
      password
    })
      .then((user: SignInResource) => {
        setSession(user.id || null)

        const url = searchParams.get("redirect_url") || "http://localhost:3000/dashboard"
        const url_path = new URL(url).pathname
        router.push(url_path)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const customSignUp = (emailAddress: string, password: string) => {

    signUp?.create({
      emailAddress,
      password
    })
      .then((result) => {
        if (result.status === "complete") {
          if (setActive) {
            setActive({ session: result.createdSessionId });
          }
        } else {
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }

  const toggleForm = (mode: boolean) => {
    setIsSignedIn(mode)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-md items-center gap-4 m-auto">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input  {...register("email", { required: true })} placeholder="email@email.com" className="rounded-md border-2 border-gray-300 p-2" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input  {...register("password", { required: true })} className="rounded-md border-2 border-gray-300 p-2" />
      </div>
      {(errors.email || errors.password) && <span className="text-red-500">This field is required</span>}
      <button type="submit">Sign {isSignedIn ? "In" : "Up"}</button>

      <div className="flex gap-4 justify-center">
        <button type="button" className="text-blue-500" onClick={toggleForm.bind(null, false)}>No tengo una cuenta</button>
        <button type="button" className="text-blue-500" onClick={toggleForm.bind(null, true)}>Ya tengo una cuenta</button>
      </div>

    </form >
  );
}