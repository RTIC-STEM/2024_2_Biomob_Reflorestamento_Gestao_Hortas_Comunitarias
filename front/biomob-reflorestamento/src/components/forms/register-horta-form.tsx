'use client'

import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export function RegisterHortaForm() {
  const [ultimaColheita, setUltimaColheita] = useState<Date>()
  const [proximaColheita, setProximaColheita] = useState<Date>()

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Detalhes da Horta</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Coluna 1 */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nome:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Endereço:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tamanho:</label>
            <input type="number" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Famílias:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Responsável:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Cultivos Atuais:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Produção mensal:</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Última colheita:</label>
            <DatePicker
              selected={ultimaColheita}
              onChange={(date: Date) => setUltimaColheita(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholderText="dd/mm/aaaa"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Próxima colheita:</label>
            <DatePicker
              selected={proximaColheita}
              onChange={(date: Date) => setProximaColheita(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholderText="dd/mm/aaaa"
            />
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end mt-6 gap-2">
        <button
          type="button"
          className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
