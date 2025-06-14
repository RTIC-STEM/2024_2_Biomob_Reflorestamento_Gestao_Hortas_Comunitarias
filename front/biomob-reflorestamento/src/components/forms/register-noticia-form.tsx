'use client'

import { useState } from 'react'

export function RegisterNoticiaForm() {
  const [imagem, setImagem] = useState<File | null>(null)

  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImagem(e.target.files[0])
    }
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Novo Notícia</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite o título da notícia"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Categoria</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione uma categoria</option>
            <option>Reflorestamento</option>
            <option>Educação Ambiental</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Resumo</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={2}
            placeholder="Resumo da notícia"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Conteúdo</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            placeholder="Escreva a notícia completa aqui"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Imagem de capa</label>
          <input
            type="file"
            onChange={handleImagemChange}
            className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-700 file:text-white hover:file:bg-green-800"
          />
          {imagem && <p className="text-sm mt-1 text-gray-600">Selecionado: {imagem.name}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Tags</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Separe as tags por vírgula"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="publicar" className="accent-green-700" />
          <label htmlFor="publicar" className="text-sm">Publicar imediatamente</label>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Salvar como rascunho
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Publicar
          </button>
        </div>
      </div>
    </form>
  )
}