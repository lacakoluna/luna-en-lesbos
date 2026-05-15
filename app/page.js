"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 backdrop-blur-md bg-black/40 border-b border-fuchsia-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
          <h1 className="text-2xl font-bold text-fuchsia-300">Luna en Lesbos</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#eventos">Eventos</a>
            <a href="#comunidad">Comunidad</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button className="bg-fuchsia-500 px-4 py-2 rounded-full">
            ÚNETE
          </button>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-fuchsia-900/30 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Más que una junta. Una comunidad.
        </motion.h1>

        <p className="max-w-2xl text-lg text-gray-300 mb-8">
          Eventos, cultura, humor y conexión para mujeres lesbianas y queer.
        </p>

        <div className="flex gap-4">
          <button className="bg-fuchsia-500 px-6 py-3 rounded-full">
            Explorar eventos
          </button>
          <button className="border border-fuchsia-500 px-6 py-3 rounded-full">
            Ver galería
          </button>
        </div>
      </section>

      <section id="eventos" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Próximos Eventos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white/5 border border-fuchsia-500/20 rounded-3xl p-6 hover:scale-105 transition">
              <div className="h-48 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-violet-700/40 mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Comedy Night</h3>
              <p className="text-gray-300 mb-4">Santiago · Comunidad queer premium.</p>
              <button className="bg-fuchsia-500 px-5 py-2 rounded-full">
                Comprar entrada
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="comunidad" className="bg-fuchsia-950/20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Comunidad</h2>
          <p className="text-lg text-gray-300">
            Luna en Lesbos nació para crear espacios seguros, entretenidos y reales para mujeres lesbianas y queer en Chile.
          </p>
        </div>
      </section>

      <section id="galeria" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Galería</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((item) => (
            <div key={item} className="h-64 rounded-3xl bg-gradient-to-br from-fuchsia-400/30 to-violet-600/30"></div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="border-t border-fuchsia-500/20 py-10 text-center text-gray-400">
        © Luna en Lesbos · Comunidad queer premium
      </footer>
    </main>
  )
}
