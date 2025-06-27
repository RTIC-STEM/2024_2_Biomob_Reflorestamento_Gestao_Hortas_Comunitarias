'use client'

import React, { useState } from 'react';

export const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Cadastro realizado com sucesso! Você receberá um email de confirmação.');
    setEmail('');
    setName('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-[rgba(120,227,202,0.49)] w-full mt-[117px] pr-5 rounded-[0px_8px_8px_0px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[62%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[583px] w-full items-stretch pt-[296px] pb-[18px] px-3 rounded-[8px_0px_0px_8px] max-md:max-w-full max-md:mt-[7px] max-md:pt-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/8d2bb085aa0019021fe606a7ab5e12cee4ac9fcb?placeholderIfAbsent=true"
              alt="Imagem de fundo para materiais didáticos"
              className="absolute h-full w-full object-cover inset-0"
            />
            <div className="relative flex items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Navegar para material anterior"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/2ee35b9c6b235368f809b4c66bf7116482dfee95?placeholderIfAbsent=true"
                  alt="Seta para esquerda"
                  className="aspect-[1.05] object-contain w-[45px] shrink-0"
                />
              </button>
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Navegar para próximo material"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/f5d2a77ce43abb7463abf0867554e086c399eb45?placeholderIfAbsent=true"
                  alt="Seta para direita"
                  className="aspect-[1.05] object-contain w-[45px] shrink-0"
                />
              </button>
            </div>
            <div className="relative self-center flex w-[99px] items-stretch gap-[18px] mt-[205px] max-md:mt-10">
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de material 1"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador ativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de material 2"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador inativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de material 3"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador inativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-white font-bold my-auto max-md:max-w-full max-md:mt-[34px]">
            <header className="flex items-stretch gap-3 text-2xl">
              <div className="bg-white flex w-[63px] shrink-0 h-[3px] my-auto rounded-lg" />
              <h2>Para você!</h2>
            </header>
            <div className="flex flex-col items-stretch text-xl mt-[19px] pl-[31px] max-md:max-w-full max-md:pl-5">
              <p className="text-[rgba(45,128,108,1)] text-2xl max-md:max-w-full">
                <span className="text-black">
                  Estamos entusiasmados em anunciar que agora você pode acessar
                </span>{' '}
                uma variedade de materiais didáticos diretamente do nosso portal web.
              </p>
              <p className="self-center mt-[58px] max-md:mt-10">
                Esses recursos foram cuidadosamente elaborados para apoiar o
                aprendizado e a conscientização sobre reflorestamento, gestão de
                hortas comunitárias e controle de mudas e sementes. Para baixar os
                materiais, basta se cadastrar no portal e explorar a seção de
                downloads. Aproveite essa oportunidade para se informar e
                contribuir para um futuro mais sustentável!
              </p>
              
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(0,124,94,1)]"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(0,124,94,1)]"
                    placeholder="Digite seu email"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[rgba(0,124,94,1)] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] underline w-full px-3 py-4 rounded-lg hover:bg-[rgba(0,104,74,1)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Cadastrando...' : 'Cadastre-se agora!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
