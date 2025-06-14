"use client"
export default function RegisterRefloreForm() {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-md shadow-md">
      <div className="col-span-2">
        <h1 className="text-xl font-semibold text-black">Nova Área de Reflorestamento</h1>
      </div>

      <input
        type="text"
        placeholder="Nome da área"
        className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <textarea
        placeholder="Descrição"
        className="p-3 border border-gray-300 rounded-md bg-white w-full col-span-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <input
        type="text"
        placeholder="Endereço"
        className="p-3 border border-gray-300 rounded-md bg-white w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <input
        type="text"
        placeholder="Cidade"
        className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <input
        type="text"
        placeholder="Estado"
        className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <input
        type="number"
        placeholder="Tamanho (m²)"
        className="p-3 border border-gray-300 rounded-md bg-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <select
        className="p-3 border border-gray-300 rounded-md bg-white w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      >
        <option value="">Status</option>
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
      </select>

      <div className="col-span-2 flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="px-5 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
