import RegisterForm from "../../components/forms/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <div className="w-full max-w-[1148px] max-w-[760px] bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            <span className="font-extrabold">É novo?</span> Cadastre-se abaixo
         </h1>
          <button className="p-1 border border-gray-300 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}