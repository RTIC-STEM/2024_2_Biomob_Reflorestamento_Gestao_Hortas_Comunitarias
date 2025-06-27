import React from 'react';

interface HeaderProps {
  className?: string;
  onFontSizeChange?: (size: 'small' | 'medium' | 'large') => void;
}

export const header: React.FC<HeaderProps> = ({ className = '', onFontSizeChange }) => {
  return (
    <header className={`bg-[rgba(120,227,202,0.49)] w-full pl-[33px] pr-20 py-[34px] max-md:max-w-full max-md:px-5 ${className}`}>
      {/* ...restante do conteúdo... */}
      <button
        onClick={() => onFontSizeChange?.('small')}
        className="text-black text-2xl font-normal grow my-auto"
        aria-label="Diminuir tamanho da fonte"
      >
        A
      </button>
      {/* ... demais botões com onClick semelhantes, trocando 'small' por 'medium' ou 'large' */}
    </header>
  )
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-[rgba(120,227,202,0.49)] w-full pl-[33px] pr-20 py-[34px] max-md:max-w-full max-md:px-5 ${className}`}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[58%] max-md:w-full max-md:ml-0">
          <div className="flex grow gap-[40px_58px] text-[40px] text-black font-bold whitespace-nowrap flex-wrap max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/ed537994aaea7dcde4b397de770c50faf3696c13?placeholderIfAbsent=true"
              alt="Logo da organização"
              className="aspect-[4.2] object-contain w-[269px] self-stretch"
            />
            <h1 className="grow shrink w-[281px] mt-[13px]">
              Acessibilidade
            </h1>
            <button 
              className="aspect-[1.08] object-contain w-[42px] bg-black shrink-0 mt-5"
              aria-label="Configurações de acessibilidade"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/1ff5f44a-24a0-4ab5-87da-c80ee1599dc3?placeholderIfAbsent=true"
                alt=""
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
        <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex items-stretch gap-[13px] flex-wrap mt-[15px] max-md:mt-10">
            <button 
              className="text-black text-2xl font-normal grow my-auto"
              aria-label="Diminuir tamanho da fonte"
            >
              A
            </button>
            <div className="flex items-stretch mt-[5px]" aria-hidden="true">
              <div className="bg-black flex mr-[-57px] shrink-0 h-2 my-auto" />
              <div className="bg-black flex w-[3px] shrink-0 h-[42px]" />
            </div>
            <div className="flex items-stretch gap-[40px_55px] text-4xl text-black font-normal whitespace-nowrap">
              <button aria-label="Aumentar tamanho da fonte">A</button>
              <button aria-label="Alto contraste">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/aa9f8ae2c915539bb26e8346d554c4a7a8808bde?placeholderIfAbsent=true"
                  alt=""
                  className="aspect-[1] object-contain w-[39px] shrink-0 my-auto"
                />
              </button>
              <button aria-label="Modo escuro">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/13d2c01e6f3e4d3a35cc39eeca7e0202df16e6d2?placeholderIfAbsent=true"
                  alt=""
                  className="aspect-[1.12] object-contain w-12 shrink-0 my-auto"
                />
              </button>
              <button aria-label="Leitor de tela">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/76cfea12c2a40c7a20cdbb109a7ffd9ba6e75906?placeholderIfAbsent=true"
                  alt=""
                  className="aspect-[0.98] object-contain w-[43px] shrink-0 mt-[5px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
