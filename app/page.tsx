import { Inter } from 'next/font/google'
import { FaGithub , FaInstagram , FaLinkedin } from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="hero flex-grow" style={{ backgroundImage: "url(/background.jpg)" }}>
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col items-center">
          <h1 className="mb-8 text-5xl font-bold text-white">Bienvenido</h1>
          <p className="mb-5 text-xl text-white font-light">Mi nombre es Horacio Gutierrez, soy desarrollador web Fullstack en Javascript y PHP (un poco...). Esta pagina actualmente esta en construccion constante porque como pueden ver en los commits es relativamente nueva asi que tenganme paciencia.</p>
          <p className="mb-5 text-xl text-white font-light">Si quieres saber mas sobre mi, por favor visite mi perfil en </p>
          <nav className='flex gap-4'>
            <a href="https://github.com/HoracioGutierrez" target="_blank" rel="noreferrer"><FaGithub size={"1.5rem"}/></a>
            <a href="https://www.instagram.com/horagutierrez/" target="_blank" rel="noreferrer"><FaInstagram size={"1.5rem"}/></a>
            <a href="https://www.linkedin.com/in/horacioegutierrez/" target="_blank" rel="noreferrer"><FaLinkedin size={"1.5rem"}/></a>
          </nav>
        </div>
      </div>
    </div>
  )
}
