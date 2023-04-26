"use client"
import { useForm } from "react-hook-form";
import { useSignIn } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { ActiveSessionResource , SignInResource } from "@clerk/types"

interface User {
  id: string | null | ActiveSessionResource
}

export default function SignInForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, setSession } = useSignIn()
  const router = useRouter();

  const onSubmit = (data: any) => {
    signIn?.create({
      identifier: data.email,
      password: data.password
    })
      .then((user : SignInResource) => {
        setSession(user.id || null)
        router.push("/dashboard")
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