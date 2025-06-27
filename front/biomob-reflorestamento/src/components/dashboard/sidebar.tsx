'use client'

import React from 'react';

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const sidebarItems: SidebarItem[] = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/f724d8c3a85b945d156b898c7acbebf89fc8ec27?placeholderIfAbsent=true', label: 'Dashboard', isActive: true },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/ff32da1fb5c3cf1c57269b987432b3175ec4e5a1?placeholderIfAbsent=true', label: 'Área' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/dc3de724228f4832e4704a7f483934842a5f9640?placeholderIfAbsent=true', label: 'Mudas' },
    { icon: '', label: 'Hortas\ncomunitárias' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/803a93055f2a418589742584e1aaab48da6fa364?placeholderIfAbsent=true', label: 'Eventos' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/288c2f0c820ef7442afa8575fbb7f9269c1694b1?placeholderIfAbsent=true', label: 'Materiais' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/ed8dbc38-93ea-4ad5-9f81-4b38d65ae30c?placeholderIfAbsent=true', label: 'Notícias' }
  ];

  return (
    <aside className={`bg-white shadow-[0px_5px_4px_rgba(0,0,0,0.38)] w-full text-2xl text-[rgba(0,30,23,1)] font-light mx-auto pt-[45px] pb-[154px] max-md:mt-10 max-md:pb-[100px] ${className}`}>
      <nav>
        {sidebarItems.map((item, index) => (
          <div key={index} className={index === 0 ? 'rounded bg-[rgba(213,251,242,0.49)] flex items-center gap-[5px] whitespace-nowrap px-[7px] py-1 max-md:mr-2' : 'flex w-full flex-col mt-[46px] pl-[21px] pr-[50px] max-md:mt-10 max-md:px-5'}>
            {index === 0 && (
              <>
                <div className="bg-[rgba(0,124,94,1)] flex w-1 shrink-0 h-[49px] rounded-[5px]" />
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[0.94] object-contain w-[33px] self-stretch shrink-0 my-auto"
                />
                <button className="self-stretch grow shrink w-[170px] my-auto text-left">
                  {item.label}
                </button>
              </>
            )}
            {index === 1 && (
              <button className="flex items-stretch gap-[25px] text-black whitespace-nowrap">
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[1.14] object-contain w-[33px] shrink-0"
                />
                <span>{item.label}</span>
              </button>
            )}
            {index === 2 && (
              <button className="flex items-stretch gap-[17px] whitespace-nowrap mt-[61px] max-md:mt-10">
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[1.09] object-contain w-[38px] shrink-0"
                />
                <span className="mt-3">{item.label}</span>
              </button>
            )}
            {index === 3 && (
              <button className="text-center mt-[63px] max-md:mt-10">
                Hortas <br />
                comunitárias
              </button>
            )}
            {index === 4 && (
              <button className="flex items-stretch gap-[19px] whitespace-nowrap mt-[45px] max-md:ml-1 max-md:mt-10">
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[0.9] object-contain w-[27px] shrink-0"
                />
                <span>{item.label}</span>
              </button>
            )}
            {index === 5 && (
              <button className="flex items-stretch gap-[22px] whitespace-nowrap mt-16 max-md:ml-1 max-md:mt-10">
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[0.73] object-contain w-[22px] shrink-0"
                />
                <span className="basis-auto">{item.label}</span>
              </button>
            )}
            {index === 6 && (
              <button className="flex items-stretch gap-[17px] whitespace-nowrap mt-16 max-md:ml-1 max-md:mt-10">
                <img
                  src={item.icon}
                  alt=""
                  className="aspect-[1.04] object-contain w-[29px] bg-black shrink-0 h-[29px]"
                />
                <span>{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
