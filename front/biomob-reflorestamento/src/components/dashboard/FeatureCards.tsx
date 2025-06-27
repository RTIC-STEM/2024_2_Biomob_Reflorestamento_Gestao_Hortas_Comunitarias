'use client'

import React from 'react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
  link: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 'reflorestamento',
    title: 'Reflorestamento',
    description: 'O projeto visa restaurar áreas degradadas da Mata Atlântica, ajudando a recuperar a biodiversidade e o ecossistema local.',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/70c2710440f1348e6b51d0f0e9195662ff867530?placeholderIfAbsent=true',
    iconUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/02de8a76d23d2cee7c4f32b867d7530f5aa27420?placeholderIfAbsent=true',
    link: '#reflorestamento-detalhes'
  },
  {
    id: 'hortas',
    title: 'Gestão de hortas comunitárias',
    description: 'As hortas comunitárias fortalecem o vínculo entre os moradores e incentivam a produção de alimentos saudáveis e sustentáveis.',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/010ca46a3727a6ab5ec74b10aafc2fc5bd907463?placeholderIfAbsent=true',
    iconUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/a13d0679a99ce76fa34d0c900559e01568bfc1bb?placeholderIfAbsent=true',
    link: '#hortas-detalhes'
  },
  {
    id: 'mudas',
    title: 'Controle de mudas e sementes',
    description: 'Controle rigoroso das mudas e sementes distribuídas, com um acompanhamento do desenvolvimento das plantas.',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/06fc56cc6f2310156e1274335ba637b1db51c1e9?placeholderIfAbsent=true',
    iconUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/157835ec919a5e791346c519ae9ebd4f2dd0fd31?placeholderIfAbsent=true',
    link: '#mudas-detalhes'
  }
];

export const FeatureCards: React.FC = () => {
  return (
    <section className="self-center w-full max-w-[1321px] mt-32 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {featureCards.map((card, index) => (
          <article
            key={card.id}
            className="w-[33%] max-md:w-full max-md:ml-0"
            style={{ marginLeft: index > 0 ? '20px' : '0' }}
          >
            <div className="bg-white shadow-[4px_4px_4px_4px_rgba(0,0,0,0.06)] grow text-2xl text-black font-normal w-full pb-[33px] rounded-lg max-md:mt-10 hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.1)] transition-shadow">
              <img
                src={card.imageUrl}
                alt={`Imagem representativa de ${card.title}`}
                className="aspect-[1.67] object-contain w-full rounded-[8px_8px_0px_0px]"
              />
              <div className="flex w-full flex-col items-stretch mt-7 px-8 max-md:px-5">
                <header className="flex items-stretch gap-5 whitespace-nowrap justify-between mr-2.5 max-md:ml-1.5">
                  <h3 className="text-2xl font-normal">{card.title}</h3>
                  <img
                    src={card.iconUrl}
                    alt={`Ícone de ${card.title}`}
                    className="aspect-[0.77] object-contain w-[33px] shrink-0"
                  />
                </header>
                <p className="mt-[67px] max-md:mr-2.5 max-md:mt-10">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="text-[rgba(0,124,94,1)] underline mt-[76px] max-md:mt-10 hover:opacity-80 transition-opacity"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
