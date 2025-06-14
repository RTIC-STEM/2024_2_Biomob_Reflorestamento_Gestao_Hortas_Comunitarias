// src/components/forms/reflore-form.tsx
import Image from "next/image";

export default function RefloreForm() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <header className="bg-[#A8E6CF] flex justify-between items-center py-4 px-6 rounded-md">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Biomob Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">BIOMOB</h1>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#">Reflorestamento</a>
          <a href="#">Hortas comunitárias</a>
          <a href="#">Controle de mudas</a>
          <a href="#">Parcerias</a>
          <a href="#">Contatos</a>
          <a href="#" className="text-green-700 font-semibold">Entrar/Cadastrar</a>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <section className="bg-white mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Reflorestamento em Petrópolis 🌲</h2>

        {/* Tabs */}
        <div className="flex gap-6 text-sm mt-2">
          <button className="text-green-700 border-b-2 border-green-700">Visão Geral</button>
          <button className="text-gray-500">Detalhes do Projeto</button>
        </div>

        {/* Texto */}
        <div className="mt-4">
          <p className="text-gray-700 mb-4">
            O projeto de reflorestamento em Petrópolis visa recuperar áreas degradadas e prevenir deslizamentos. Com foco em espécies nativas, o programa já recuperou mais de 100 hectares.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">Participar do Projeto</button>
            <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md">Saber Mais</button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Impacto Ambiental</h3>
            <p className="text-sm text-gray-600">Redução de 40% nos deslizamentos e aumento da biodiversidade.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Participação Comunitária</h3>
            <p className="text-sm text-gray-600">Mais de 100 voluntários em ações de plantio e manutenção.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Espécies Plantadas</h3>
            <p className="text-sm text-gray-600">Mais de 30 espécies nativas como Ipê, Pau-Brasil e Jequitibá.</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#A8E6CF] mt-6 p-6 rounded-md grid md:grid-cols-4 gap-4 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold">📍 Localização</h4>
          <p>R. Afrânio Melo Franco, 333 - Petrópolis - RJ</p>
        </div>
        <div>
          <h4 className="font-semibold">✉️ E-mail</h4>
          <p>biomob@biomob.org</p>
        </div>
        <div>
          <h4 className="font-semibold">📱 WhatsApp</h4>
          <p>(21) 96537-9669</p>
        </div>
        <div>
          <h4 className="font-semibold">🔗 Redes Sociais</h4>
          <div className="flex gap-2 mt-1">
            <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} /></a>
            <a href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} /></a>
            <a href="#"><Image src="/icons/github.svg" alt="GitHub" width={20} height={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}