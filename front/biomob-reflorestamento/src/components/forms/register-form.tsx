"use client"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    voluntario: false,
  })

  const router = useRouter()

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Salva no localStorage
    localStorage.setItem("user", JSON.stringify(formData))

    // Simula modal de sucesso
    alert("Cadastro realizado com sucesso!")

    // Redireciona para login
    router.push("/login")
  }

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="col-span-2 flex items-center space-x-2">
        <input
          type="checkbox"
          id="voluntario"
          name="voluntario"
          onChange={handleChange}
          className="accent-emerald-600"
        />
        <label htmlFor="voluntario" className="text-sm text-gray-700">Quero ser voluntário</label>
      </div>

      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="text"
        name="telefone"
        placeholder="(DDD) Telefone"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <div className="relative col-span-2 sm:col-span-1">
        <input
          type={showPassword ? "text" : "password"}
          name="senha"
          placeholder="Mínimo de 6 caracteres"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
        <button
          type="submit"
          className="bg-emerald-700 text-white font-medium py-3 px-6 rounded-md hover:bg-emerald-800 transition-colors"
        >
          Cadastre-se
        </button>
        <p className="text-xs text-gray-600 mt-4 sm:mt-0 max-w-xs">
          Ao preencher o formulário acima você concorda com nossos{" "}
          <a href="#" className="underline text-black">Termos de uso</a> e nossa{" "}
          <a href="#" className="underline text-black">Política de Privacidade</a>.
        </p>
      </div>
    </form>
  )
}
