'use client'

import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export function RegisterMudaForm() {
  const [dataPlantio, setDataPlantio] = useState<Date>()

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Nova Muda</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nome da espécie</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: Ipê Amarelo"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Nome científico</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: Handroanthus albus"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Área</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione uma área</option>
            <option>Área 1</option>
            <option>Área 2</option>
            {/* Popule dinamicamente se necessário */}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Altura inicial (cm)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ex: 25"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Data do Plantio</label>
            <DatePicker
              selected={dataPlantio}
              onChange={(date: Date) => setDataPlantio(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/aaaa"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Observações</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            placeholder="Digite observações relevantes..."
          />
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
