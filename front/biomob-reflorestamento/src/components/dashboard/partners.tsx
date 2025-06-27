'use client'

import React from 'react';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

const partners: Partner[] = [
  {
    id: 'partner1',
    name: 'Parceiro 1',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/60e6fdce37e867fec95c434621b81ed0c87c5467?placeholderIfAbsent=true',
    website: '#'
  },
  {
    id: 'partner2',
    name: 'Parceiro 2',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/1db2fb2ab3581a4a015a1efa33f9cd5170671a2a?placeholderIfAbsent=true',
    website: '#'
  },
  {
    id: 'partner3',
    name: 'Parceiro 3',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/01bebc3b4e3939df30a3bd8228bc6d2797349c87?placeholderIfAbsent=true',
    website: '#'
  }
];

export const Partners: React.FC = () => {
  return (
    <section className="bg-[rgba(63,180,152,1)] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] flex flex-col items-center mt-[90px] pt-16 pb-[38px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[950px] max-w-full flex-col items-stretch">
        <header className="text-white text-5xl font-bold self-center ml-[54px] max-md:max-w-full max-md:text-[40px]">
          Alguns de nossos parceiros
        </header>
        <div className="mt-[57px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={`${
                  index === 0 ? 'w-[41%]' : index === 1 ? 'w-[33%]' : 'w-[27%]'
                } max-md:w-full max-md:ml-0`}
                style={{ marginLeft: index > 0 ? '20px' : '0' }}
              >
                <a
                  href={partner.website}
                  className="block hover:opacity-80 transition-opacity"
                  aria-label={`Visitar site do ${partner.name}`}
                >
                  <img
                    src={partner.logoUrl}
                    alt={`Logo do ${partner.name}`}
                    className={`object-contain shrink-0 max-w-full max-md:mt-10 ${
                      index === 0
                        ? 'aspect-[1.43] w-[219px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] mt-[5px] rounded-[20px]'
                        : index === 1
                        ? 'aspect-[1] w-[175px] rounded-lg'
                        : 'aspect-[0.82] w-[143px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] grow mt-[5px] rounded-[20px]'
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
