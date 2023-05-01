import OpinionRating from './OpinionRating'
import { formatDate } from '../utils/utils'


async function getOpiniones() {
  const response = await fetch('http://localhost:3000/api/opiniones')
  const data = await response.json()
  return data
}

export const metadata = {
  title: 'HG - Opiniones',
  description: 'Horacio Gutierrez - Opiniones de los clientes del programador fullstack Horacio Gutierrez'
}


interface Opinion {
  nombre: string,
  empresa: string,
  opinion: string,
  rate: number,
  id: number,
  verified: boolean,
  link: string,
  avatar: string,
  tipo: string,
  createdAt: Date,
  updatedAt: Date
}

export default async function OpinionesPage() {

  const opiniones: Opinion[] = await getOpiniones()

  return (
    <div className="gap-4 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:flex-grow lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 lg:pl-6 auto-rows-min">
      {opiniones.length === 0 && <p className="text-gray-400 text-sm font-serif">No hay opiniones todavia</p>}
      {opiniones.map((opinion) => (
        <article className="bg-white p-2 shadow-md flex flex-col min-[450px]:flex-col lg:flex-col align-top rounded-[5px]" key={opinion.id}>
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
            <p className="font-light text-gray-400 text-sm relative top-1 right-2">{formatDate(opinion.createdAt)}</p>
            <OpinionRating rate={opinion.rate} />
          </footer>
        </article>
      ))}
    </div>
  )
}