import React from 'react';

export const GrowthChart: React.FC = () => {
  return (
    <section className="w-[445px] h-[391px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.76)] p-[19px] rounded-lg max-md:w-full max-md:px-5 max-md:py-0 max-sm:w-full max-sm:px-[15px] max-sm:py-0">
      <h2 className="text-black text-2xl font-normal text-center mb-[47px]">
        Crescimento de mudas
      </h2>
      <div className="flex justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6cbe1ef62a223e51c5640eeadfbdadfe8d54fd0"
          alt="Gráfico de crescimento de mudas"
          className="w-[325px] h-[325px] rounded-lg max-md:w-full max-md:h-auto object-cover"
        />
      </div>
    </section>
  );
};