'use client'

import React from 'react';

interface NewsArticle {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 'news1',
    title: 'Comunidade de Reflorestamento Celebra Sucesso com Novo Projeto de Hortas Comunitárias',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/3f9d3ff491362f18aa3fea3029be95a69f5f27df?placeholderIfAbsent=true',
    link: '#noticia-1'
  },
  {
    id: 'news2',
    title: 'Parceria com Fiocruz do Rio de Janeiro Impulsiona Projeto de Reflorestamento',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/78a3e4a7c78a1a7573c4d5ea037fbe9fb8412fbf?placeholderIfAbsent=true',
    link: '#noticia-2'
  },
  {
    id: 'news3',
    title: 'Mutirão de Plantio Mensal Atraí Voluntários e Promove Conscientização Ambiental',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/73245f5f7e387d4f766e202aeb7f236a354066d2?placeholderIfAbsent=true',
    link: '#noticia-3'
  }
];

export const News: React.FC = () => {
  return (
    <section className="flex w-full flex-col mt-[100px] px-[60px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <header className="flex w-[569px] max-w-full items-center gap-9 text-5xl text-[rgba(63,180,152,1)] font-bold ml-3.5 max-md:text-[40px]">
        <div className="bg-[rgba(63,180,152,1)] self-stretch flex w-[133px] shrink-0 h-[9px] my-auto rounded-lg" />
        <h2 className="self-stretch grow shrink w-[177px] max-md:text-[40px]">
          Notícias
        </h2>
        <div className="bg-[rgba(63,180,152,1)] self-stretch flex w-[133px] shrink-0 h-[9px] my-auto rounded-lg" />
      </header>
      <p className="text-black text-2xl font-normal ml-3.5 mt-[26px] max-md:max-w-full">
        Atualizações de nossas últimas notícias.
      </p>
      <div className="self-stretch mt-[49px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className="w-[33%] max-md:w-full max-md:ml-0"
              style={{ marginLeft: index > 0 ? '20px' : '0' }}
            >
              <div className={`${
                index === 2 ? 'bg-white' : 'bg-[rgba(255,255,255,0.76)]'
              } shadow-[4px_4px_4px_4px_rgba(0,0,0,0.07)] w-full pb-7 rounded-lg max-md:mt-10 hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.1)] transition-shadow`}>
                <img
                  src={article.imageUrl}
                  alt={`Imagem da notícia: ${article.title}`}
                  className="aspect-[1.5] object-contain w-full rounded-[8px_8px_0px_0px]"
                />
                <div className={`flex flex-col items-stretch ${
                  index === 0 ? 'mt-5 px-[21px]' : 'mt-[19px] px-[39px]'
                } max-md:px-5`}>
                  <h3 className="text-black text-[32px] font-medium">
                    {article.title}
                  </h3>
                  <a
                    href={article.link}
                    className={`text-[rgba(0,124,94,1)] text-2xl font-normal underline ${
                      index === 2 ? 'mt-6' : index === 0 ? 'mt-[62px] max-md:mr-2 max-md:mt-10' : 'mt-[63px] max-md:mr-0.5 max-md:mt-10'
                    } hover:opacity-80 transition-opacity`}
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
