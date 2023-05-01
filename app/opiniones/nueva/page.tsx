"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { useUser } from "@clerk/nextjs/app-beta/client";
import { toast } from "react-toastify";

export default function NuevaOpinion() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [rating, setRating] = useState(0);
  const { isLoaded, user } = useUser()

  const onSubmit = (data: any) => {

    const opinion = {
      ...data,
      rate: rating
    }

    toast.info("Enviando opinion...")

    fetch("/api/opiniones", {
      method: "POST",
      body: JSON.stringify(opinion),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => {
        toast.dismiss()
        toast.success("Tu opinion ha sido enviada")
      })
      .catch(err => {
        toast.error("Hubo un error al enviar tu opinion")
      })

  }

  if (!isLoaded) {
    return null
  }

  return (
    <form className="lg:flex-grow lg:pl-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="opinion" className="font-semibold text-gray-700">Escribe tu opinion <span className="text-red-400">*</span> </label>
        <textarea {...register("opinion", { required: true })} name="opinion" id="opinion" className="w-full h-32 border border-gray-300 rounded-md p-2 mt-2 text-gray-600" placeholder="Escribe tu opinion aqui. EJ.: Sos un groso!"></textarea>
        {errors.opinion && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex items-center mt-4">
        <label htmlFor="rate" className="font-semibold text-gray-700 mr-2">Califica tu experiencia <span className="text-red-400">*</span></label>
        <Rating initialValue={1} onClick={rating => setRating(rating)} />
        {errors.rate && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex flex-col  mt-4">
        <label htmlFor="nombre" className="font-semibold text-gray-700 mr-2">Nombre <span className="text-red-400">*</span></label>
        <input {...register("nombre", { required: true })} type="text" name="nombre" id="nombre" className="text-gray-600 w-full border border-gray-300 rounded-md p-2" placeholder="Nombre" defaultValue={user?.fullName || user?.username || ""} />
        {errors.nombre && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex flex-col  mt-4">
        <label htmlFor="email" className="font-semibold text-gray-700 mr-2">Email <span className="text-red-400">*</span></label>
        <input {...register("email", { required: true })} defaultValue={user?.primaryEmailAddress?.emailAddress} type="text" name="email" id="email" className="text-gray-600 w-full border border-gray-300 rounded-md p-2" placeholder="Nombre" />
        {errors.email && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex flex-col  mt-4">
        <label htmlFor="empresa" className="font-semibold text-gray-700 mr-2">Empresa</label>
        <input {...register("empresa", { required: false })} type="text" name="empresa" id="empresa" className="text-gray-600 w-full border border-gray-300 rounded-md p-2" placeholder="Empresa" />
        {errors.empresa && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex flex-col  mt-4">
        <label htmlFor="link" className="font-semibold text-gray-700 mr-2">Link a tu perfil</label>
        <input {...register("link", { required: false })} type="text" name="link" id="link" className="text-gray-600 w-full border border-gray-300 rounded-md p-2" placeholder="Link a tu perfil" />
        {errors.link && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>

      <div className="flex flex-col  mt-4">
        <label htmlFor="tipo" className="font-semibold text-gray-700 mr-2">Tipo<span className="text-red-400">*</span></label>
        <select {...register("tipo", { required: true })} name="tipo" id="tipo" className="text-gray-600 w-full border border-gray-300 rounded-md p-2">
          <option value="alumno">Alumno</option>
          <option value="cliente">Cliente</option>
          <option value="colaborador">Colaborador</option>
          <option value="proveedor">Proveedor</option>
          <option value="colega">Colega</option>
          <option value="otro">Otro</option>
        </select>
        {errors.tipo && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex flex-col  mt-4">
        <label htmlFor="avatar" className="font-semibold text-gray-700 mr-2">Avatar</label>
        {user?.profileImageUrl && <img src={user?.profileImageUrl} alt="avatar" className="w-20 h-20 rounded-full mb-4" />}
        {!user?.profileImageUrl && <input {...register("avatar", { required: false })} type="text" name="avatar" id="avatar" className="text-gray-600 w-full border border-gray-300 rounded-md p-2" placeholder="Avatar" />}
        {errors.avatar && <span className="text-red-500">Este campo es obligatorio</span>}
      </div>
      <div className="flex items-center mt-4">
        <button disabled={Object.keys(errors).length > 0} className={`${Object.keys(errors).length > 0 && 'bg-gray-200 hover:bg-gray-200'}  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md`}>Enviar</button>
      </div>
    </form>
  )
}