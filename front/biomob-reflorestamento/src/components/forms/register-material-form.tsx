'use client'

import { useState } from "react"

export function RegisterMaterialForm() {
  const [arquivo, setArquivo] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArquivo(e.target.files[0])
    }
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Novo Material</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite o título do material"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Descrição</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            placeholder="Descreva o material"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Categoria</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione uma categoria</option>
            <option>Informativo</option>
            <option>Vídeo</option>
            <option>PDF</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Tipo</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione um tipo</option>
            <option>Interno</option>
            <option>Externo</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Arquivo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-700 file:text-white hover:file:bg-green-800"
          />
          {arquivo && <p className="text-sm mt-1 text-gray-600">Selecionado: {arquivo.name}</p>}
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  )
}