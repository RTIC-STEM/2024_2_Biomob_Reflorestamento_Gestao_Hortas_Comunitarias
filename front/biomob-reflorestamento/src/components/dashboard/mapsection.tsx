import React from 'react';

export const MapSection: React.FC = () => {
  return (
    <section className="w-[575px] h-[495px] shadow-[4px_4px_4px_4px_rgba(147,143,143,0.25)] bg-white p-2 rounded-lg max-md:w-full max-md:px-5 max-md:py-0 max-sm:w-full max-sm:px-[15px] max-sm:py-0">
      <h2 className="text-black text-[32px] font-normal mb-5 pl-[23px] pt-2">
        Mapa de áreas
      </h2>
      <div className="ml-7 rounded-[10px] max-md:w-full max-md:h-auto overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c517193286122a7287f762cb8300e1ff03dc761"
          alt="Mapa das áreas de reflorestamento"
          className="w-[519px] h-[405px] rounded-[10px] max-md:w-full max-md:h-auto object-cover"
        />
      </div>
    </section>
  );
};
