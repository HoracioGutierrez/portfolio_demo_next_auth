"use client"
import { useForm } from "react-hook-form";
import { useSignIn, useSignUp } from '@clerk/clerk-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SignInResource } from "@clerk/types"
import { useState } from "react";
import { toast } from "react-toastify"

export default function SignInForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, setSession, setActive } = useSignIn()
  const { signUp } = useSignUp()
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [requestError, setRequestError] = useState("")

  const onSubmit = (data: any) => {
    if (isSignedIn) {
      customSignIn(data.email, data.password)
    } else {
      customSignUp(data.email, data.password, data.username)
    }
  }

  const customSignIn = (identifier: string, password: string) => {
    toast.info("Iniciando sesion...")
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
        setRequestError(error.errors[0].message)
      })
  }

  const customSignUp = (emailAddress: string, password: string, username: string) => {
    toast.info("Creando cuenta...")
    signUp?.create({
      emailAddress,
      password,
      username
    })
      .then((result) => {
        if (result.status === "complete") {
          if (setActive) {
            setActive({ session: result.createdSessionId });
            router.push("/dashboard")
            toast.dismiss()
            toast.success("Cuenta creada exitosamente")
            return
          }
          return
        }

        if (result.status === "missing_requirements") {
          setRequestError(`Missing requirements: ${result.missingFields.join(", ")}`)
          return
        }
      })
      .catch((error) => {
        setRequestError(error.errors[0].message)
      })

  }

  const toggleForm = (mode: boolean) => {
    setIsSignedIn(mode)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-xs items-center gap-4 m-auto">
      <div className="flex flex-col">
        <label htmlFor="email">{isSignedIn ? "Email/Username" : "Email Address"}</label>
        <input  {...register("email", { required: true })} placeholder="email@email.com" className="rounded-md border-2 border-gray-300 p-1 text-gray-800" />
      </div>

      {!isSignedIn && <div className="flex flex-col">
        <label htmlFor="username">Nombre de Usuario</label>
        <input  {...register("username", { required: true })} className="rounded-md border-2 border-gray-300 p-1 text-gray-800" placeholder="123456" type="text" />
      </div>}
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input  {...register("password", { required: true })} className="rounded-md border-2 border-gray-300 p-1 text-gray-800" placeholder="123456" type="password" />
      </div>
      {(errors.email || errors.password) && <span className="text-red-500">This field is required</span>}
      {requestError && <span className="text-red-500">{requestError}</span>}
      <button type="submit">Sign {isSignedIn ? "In" : "Up"}</button>

      <div className="flex gap-2 md:gap-4 md:justify-between mt-4 flex-col md:flex-row">
        <button type="button" className={`text-blue-500 ${!isSignedIn && "text-gray-600"}`} onClick={toggleForm.bind(null, false)}>No tengo una cuenta</button>
        <button type="button" className={`text-blue-500 ${isSignedIn && "text-gray-600"}`} onClick={toggleForm.bind(null, true)}>Ya tengo una cuenta</button>
      </div>

    </form >
  );
}