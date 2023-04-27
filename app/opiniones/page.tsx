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


export default function OpinionesPage() {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Opiniones</h1>
      <section className="lg:flex">
        <p className="font-light text-gray-400 mb-8 lg:mb-0 lg:w-[400px]">Aqui van las opiniones de todos mis alumnos y personas que hayan participado en mis cursos de alguna manera o con las que haya trabajado en algun punto. De momento esta en construccion asi que por ahora las opiniones no van a tener validacion, pero la idea es que en un futuro cada opinion escrita este respaldada por algun perfil de linkedin, cuenta de google, nombre de empresa, etc.</p>
        <div className="gap-4 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:flex-grow lg:grid-cols-1 xl:grid-cols-2">
          {opiniones.map((opinion) => (
            <div className="bg-white p-4 shadow-md" key={opinion.id}>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}



/* 

<div className="bg-white p-4 mb-4 shadow-md" key={opinion.id}>
              <div className="flex items-center mb-2">
                <img className="w-12 h-12 rounded-full mr-4" src={opinion.avatar} alt={opinion.nombre} />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg">{opinion.nombre}</h2>
                  <h3 className="font-light text-gray-400">{opinion.empresa}</h3>

                  {opinion.verified && (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788
                        1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31
                        9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 15.5a9.01
                        9.01 0 00-9.3 1.542 9.948 9.948 0 001.746 3.029 9.948 9.948 0 003.029 1.745A9.948 9.948 0 0015.5 16a9.
                        01 9.01 0 00-6.2-.5z"></path>
                      </svg>
                      <p className="font-light text-gray-400">Verified</p>
                      <a href={opinion.link} className="ml-2 text-blue-500">Ver perfil</a>

                      <svg className="w-4 h-4 ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8
                        9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0
                        4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd"></path>
                      </svg>
                      <p className="font-light text-gray-400">Verified</p>
                      <a href={opinion.link} className="ml-2 text-blue-500">Ver perfil</a>

                    </div>

                  )}
                </div>
                <div className="ml-auto">
                  <p className="font-light text-gray-400">{opinion.fecha}</p>
                  <div className="flex items-center">

                    {opinion.tipo === "alumno" && (
                      <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0
                        000-16zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0
                        01-1-1zm0 4a1 1 0 100 2h4a1 1 0 100-2H8z"
                          clipRule="evenodd"></path>
                      </svg>
                    )}

                    {opinion.tipo === "manager" && (
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7
                        3a1 1 0 000 1.84L5.25 8.051a.999.999 0
                        01.356-.257l4-1.714a1 1 0 11.788
                        1.838L7.667 9.088l1.94.831a1 1 0
                        00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31
                        9.397L5 10.12v4.102a8.969 8.969 0
                        00-1.05-.174 1 1 0 01-.89-.89 11.115
                        11.115 0 01.25-3.762zM9.3 15.5a9.01
                        9.01 0 00-9.3 1.542 9.948 9.948 0
                        001.746 3.029 9.948 9.948 0
                        003.029 1.745A9.948 9.948 0
                        0015.5 16a9.01 9.01 0
                        00-6.2-.5z"></path>
                      </svg>
                    )}
                  </div>

                </div>


              </div>
            </div>

*/