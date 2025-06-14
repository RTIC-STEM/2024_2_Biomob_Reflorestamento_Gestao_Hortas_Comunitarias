'use client'

import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export function RegisterEventForm() {
  const [data, setData] = useState<Date>()
  const [hora, setHora] = useState("")

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Novo Evento</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite o título do evento"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tipo</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione um tipo</option>
            <option>Plantio</option>
            <option>Oficina</option>
            <option>Palestra</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Área</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione uma área</option>
            <option>Área 1</option>
            <option>Área 2</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Data</label>
            <DatePicker
              selected={data}
              onChange={(date: Date) => setData(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/aaaa"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Horário</label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Local</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option disabled selected>Selecione um local</option>
            <option>Local 1</option>
            <option>Local 2</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Descrição</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            placeholder="Descreva o evento"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Máximo de participantes</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: 30"
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