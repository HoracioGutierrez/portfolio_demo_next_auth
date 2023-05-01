import Link from "next/link";

export const metadata = {
  title: 'HG - Demos',
  description: 'Horacio Gutierrez - Demos de trabajos personales hechos por el programador fullstack Horacio Gutierrez'
}

export default function Demos() {
  return (
    <section>
      <h2 className="font-semibold text-xl mb-4">Demos</h2>
      <div className="lg:grid hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center flex flex-col">
          <p>Esta seccion esta todavia bajo construccion. La idea es ir dejando alguno de los trabajos que fui haciendo durante todo este tiempo que estuve cerca del mundo de la programacion.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            <Link href={"/"}>volver al inicio</Link>
          </button>
        </div>
      </div>
    </section>
  );
}