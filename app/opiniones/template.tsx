"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function OpinionTemplate({ children }: { children: React.ReactNode | React.ReactNode[] }) {

  const pathname = usePathname()

  const isNuevaOpinion = pathname === "/opiniones/nueva"

  return (
    <>
      <h2 className="font-semibold text-xl mb-4">{isNuevaOpinion ? "Nueva Opinion" : "Mis Opiniones"}</h2>
      <div className="lg:flex">
        <div className="lg:mr-8 mb-8 lg:mb-0">
          <p className="font-light text-gray-400 mb-8 lg:mb-0 lg:w-[400px] lg:min-w-[400px]">{
            isNuevaOpinion
              ? "Si has participado en alguno de mis cursos o hemos trabajado juntos en algun proyecto, me encantaria que me dejaras tu opinion para que otros puedan verla."
              : (
                <>
                  Aqui van las opiniones de todos mis alumnos y personas que hayan participado en mis cursos de alguna manera o con las que haya trabajado en algun punto.
                  <br />
                  <br />  De momento esta en construccion asi que por ahora las opiniones no van a tener validacion, pero la idea es que en un futuro cada opinion escrita este respaldada por algun perfil de linkedin, cuenta de google, nombre de empresa, etc.
                </>
              )}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4">
            <Link href={isNuevaOpinion ? "/opiniones" : "/opiniones/nueva"}>{isNuevaOpinion ? "Mis opiniones" : "Nueva Opinion"}</Link>
          </button>
        </div>
        {children}
      </div>
    </>
  )
}