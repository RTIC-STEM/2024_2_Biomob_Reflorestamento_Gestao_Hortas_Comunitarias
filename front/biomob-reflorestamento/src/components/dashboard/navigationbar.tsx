'use client'

import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigationbar: React.FC<NavigationProps> = ({ className = '' }) => {
  const navigationItems = [
    'Reflorestamento',
    'Hortas comunitárias',
    'Controle de mudas',
    'Parcerias',
    'Contatos'
  ];

  return (
    <nav className={`bg-[rgba(63,180,152,1)] z-10 w-full -mt-1.5 px-[27px] py-[38px] max-md:max-w-full max-md:px-5 ${className}`}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[83%] max-md:w-full max-md:ml-0">
          <div className="flex items-center gap-[27px] self-stretch text-2xl text-white font-normal my-auto max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/48085fa58ea887da274c5044bcea483148b77bd2?placeholderIfAbsent=true"
              alt="Ícone do menu"
              className="aspect-[1.07] object-contain w-[45px] self-stretch shrink-0"
            />
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="self-stretch basis-auto my-auto hover:underline focus:underline"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[17%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow items-stretch gap-5 text-2xl text-white font-normal whitespace-nowrap underline justify-between max-md:mt-10">
            <button className="my-auto hover:no-underline focus:no-underline">
              Sair/Logout
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/746674a9-d4a2-495a-b56f-96a315d02c28?placeholderIfAbsent=true"
              alt="Ícone de logout"
              className="aspect-[0.83] object-contain w-[45px] bg-white shrink-0"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
