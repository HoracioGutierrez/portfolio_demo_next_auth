"use client"
import { useForm } from "react-hook-form";
import { useSignIn } from '@clerk/clerk-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ActiveSessionResource , SignInResource } from "@clerk/types"

export default function SignInForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, setSession } = useSignIn()
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log(searchParams.get("redirect_url"))


  const onSubmit = (data: any) => {
    signIn?.create({
      identifier: data.email,
      password: data.password
    })
      .then((user : SignInResource) => {
        setSession(user.id || null)

        const url = searchParams.get("redirect_url") || "http://localhost:3000/dashboard"
        const url_path = new URL(url).pathname
        router.push(url_path)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("email", { required: true })} />
      <input  {...register("password", { required: true })} />
      {(errors.email || errors.password) && <span>This field is required</span>}
      <button type="submit">Sign In</button>
    </form>
  );
}