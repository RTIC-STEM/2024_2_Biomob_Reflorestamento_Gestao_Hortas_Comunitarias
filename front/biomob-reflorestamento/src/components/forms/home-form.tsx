'use client'

export function HomeForm() {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Hero */}
      <section className="bg-white px-4 py-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Projeto Reflorestamento
        </h1>
        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
          Ver detalhes do projeto
        </button>
      </section>

      {/* Cards */}
      <section className="px-4 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="font-semibold text-green-700">Categoria</p>
              <h2 className="text-lg font-bold mt-2">
                Título da Notícia {i}
              </h2>
              <button className="mt-4 text-green-700 hover:underline">
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Parceiros */}
      <section className="bg-[#5DD39E] py-8 px-4 text-center">
        <h2 className="text-xl font-semibold text-white mb-4">Alguns de nossos parceiros</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="h-12 w-24 bg-white rounded"></div>
          <div className="h-12 w-24 bg-white rounded"></div>
          <div className="h-12 w-24 bg-white rounded"></div>
        </div>
      </section>

      {/* Últimas notícias */}
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Notícias</h2>
          <p className="text-gray-600 text-sm">
            Acompanhe as últimas notícias e eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="font-semibold text-green-700">Categoria</p>
                <h2 className="text-lg font-bold mt-2">
                  Manchete Notícia {i}
                </h2>
                <button className="mt-4 text-green-700 hover:underline">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção final com imagem e texto */}
      <section className="px-4 py-10 bg-white flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 h-48 bg-gray-200 rounded"></div>
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Divulgue materiais ou notícias</h3>
          <p className="text-gray-700 text-sm">
            Você pode divulgar informações úteis sobre ações ambientais, mutirões ou eventos da comunidade.
          </p>
          <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Cadastrar notícia
          </button>
        </div>
      </section>
    </div>
  )
}