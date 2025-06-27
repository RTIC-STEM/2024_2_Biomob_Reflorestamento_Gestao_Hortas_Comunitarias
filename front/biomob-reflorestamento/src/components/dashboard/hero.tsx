'use client'

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] relative min-h-[580px] w-full items-stretch pt-[98px] pb-[15px] px-3 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/e6fa3318d05722de25aa499ac342c8ca44479573?placeholderIfAbsent=true"
        alt="Imagem de fundo do projeto de reflorestamento"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative text-white text-[64px] font-extrabold ml-[38px] max-md:max-w-full max-md:text-[40px]">
        PROJETO REFLORESTAMENTO
      </div>
      <div className="relative flex items-stretch gap-5 flex-wrap justify-between mt-[98px] max-md:max-w-full max-md:mt-10">
        <button
          className="hover:opacity-80 transition-opacity"
          aria-label="Projeto anterior"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/2ee35b9c6b235368f809b4c66bf7116482dfee95?placeholderIfAbsent=true"
            alt="Seta para esquerda"
            className="aspect-[1.05] object-contain w-[45px] shrink-0"
          />
        </button>
        <div className="flex flex-col items-stretch max-md:max-w-full">
          <button
            className="hover:opacity-80 transition-opacity self-end"
            aria-label="Próximo projeto"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/f5d2a77ce43abb7463abf0867554e086c399eb45?placeholderIfAbsent=true"
              alt="Seta para direita"
              className="aspect-[1.05] object-contain w-[45px]"
            />
          </button>
          <div className="flex w-full items-start gap-5 flex-wrap justify-between mt-[194px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
            <div className="flex items-stretch gap-[31px] mt-[31px]">
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de slide 1"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador ativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de slide 2"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador inativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
              <button
                className="hover:opacity-80 transition-opacity"
                aria-label="Indicador de slide 3"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/967a10eb7f9c1032cc93d2171904b22289455a82?placeholderIfAbsent=true"
                  alt="Indicador inativo"
                  className="aspect-[1] object-contain w-[21px] shrink-0"
                />
              </button>
            </div>
            <a
              href="#detalhes"
              className="text-white text-[32px] font-extrabold underline hover:opacity-80 transition-opacity"
            >
              Ver detalhes do projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
