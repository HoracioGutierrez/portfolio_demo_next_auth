"use client"

const opiniones = [
  {
    nombre: "Juan Perez",
    empresa: "Google",
    opinion: "Esta es una prueba de opiniones",
    rate: 5,
    fecha: "2020-10-10",
    id: 1,
    verified: true,
    link: "https://www.linkedin.com/in/juan-perez-123456789/",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    tipo: "alumno"
  },
  {
    nombre: "Ana Lopez",
    empresa: "Facebook",
    opinion: "Esta es una prueba de opiniones mas larga que la anterior. Esta es una prueba de opiniones mas larga que la anterior. Esta es una prueba de opiniones mas larga que la anterior. Esta es una prueba de opiniones mas larga que la anterior. Esta es una prueba de opiniones mas larga que",
    rate: 4,
    fecha: "2020-10-10",
    id: 2,
    verified: true,
    link: "https://www.linkedin.com/in/ana-lopez-123456789/",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    tipo: "manager"
  },
  {
    nombre: "Pedro Sanchez",
    empresa: "Amazon",
    opinion: "Esta es una prueba de opiniones",
    rate: 3.5,
    fecha: "2020-10-10",
    id: 3,
    verified: false,
    link: "https://www.linkedin.com/in/pedro-sanchez-123456789/",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    tipo: "contratista"
  }
]

import { Rating } from 'react-simple-star-rating'



export default function OpinionesPage() {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Opiniones</h1>
      <section className="lg:flex">
        <p className="font-light text-gray-400 mb-8 lg:mb-0 lg:w-[400px] lg:min-w-[400px]">Aqui van las opiniones de todos mis alumnos y personas que hayan participado en mis cursos de alguna manera o con las que haya trabajado en algun punto. <br /> <br />  De momento esta en construccion asi que por ahora las opiniones no van a tener validacion, pero la idea es que en un futuro cada opinion escrita este respaldada por algun perfil de linkedin, cuenta de google, nombre de empresa, etc.</p>
        <div className="gap-4 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:flex-grow lg:grid-cols-1 xl:grid-cols-2 lg:pl-6">
          {opiniones.map((opinion) => (
            <div className="bg-white p-2 shadow-md flex flex-col min-[450px]:flex-col lg:flex-row align-top rounded-[5px]" key={opinion.id}>
              <header className='flex items-center'>
                <img className="w-12 h-12 rounded-full" src={opinion.avatar} alt={opinion.nombre} />
                <div className='flex items-start ml-4'>
                  <div className='mr-2'>
                    <div className='flex'>
                      <h2 className="font-semibold text-xl text-gray-700 mr-2">{opinion.nombre}</h2>
                      <span className="material-icons text-gray-400 text-sm mt-1">verified_user</span>
                    </div>
                    <div className='flex'>
                      <h3 className="font-light text-gray-400 text-sm">{opinion.empresa}</h3>
                      <span className='mx-2'>|</span>
                      <a href={opinion.link} className="text-blue-400 text-sm">ver perfil</a>
                    </div>
                  </div>
                </div>
              </header>
              <section className='my-4 grow'>
                <p className="text-gray-500 text-sm font-serif">{opinion.opinion}</p>
              </section>
              <footer className="flex justify-end items-center">
                <p className="font-light text-gray-400 text-sm relative top-1 right-2">{opinion.fecha}</p>
                <Rating initialValue={2.5} allowFraction size={15} readonly />
              </footer>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}