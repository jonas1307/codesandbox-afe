export default function Header() {
  return (
    <header className="w-full text-white bg-gradient-to-r from-sky-500 to-blue-500">
      <div className="2xl:mx-96 xl:mx-72 lg:mx-48 md:mx-12 mx-0">
        <nav className="flex items-center justify-center py-6 uppercase">
          <a href="#" className="px-4 hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="px-4 hover:text-gray-300">
            Sobre
          </a>
          <a href="#" className="px-4 hover:text-gray-200">
            Descrição
          </a>
        </nav>
        <div className="flex flex-col sm:flex-row items-center p-4">
          <div className="sm:w-56 w-48 shrink sm:shrink-0 pb-4 md:pb-0">
            <img
              src="https://i.pinimg.com/originals/fa/0c/05/fa0c05778206cb2b2dddf89267b7a31c.jpg"
              className="w-full rounded-full"
            />
          </div>
          <div className="ml-0 sm:ml-6">
            <h1 className="text-4xl font-medium mb-2 text-center sm:text-left font-sans">
              Seu nome
            </h1>
            <p>
              Coloque aqui sua biografia de forma resumida. Coloque aqui sua
              biografia de forma resumida. Coloque aqui sua biografia de forma
              resumida. Coloque aqui sua biografia de forma resumida. Coloque
              aqui sua biografia de forma resumida. Coloque aqui sua biografia
              de forma resumida. Coloque aqui sua biografia de forma resumida.
              Coloque aqui sua biografia de forma resumida. Coloque aqui sua
              biografia de forma resumida
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
