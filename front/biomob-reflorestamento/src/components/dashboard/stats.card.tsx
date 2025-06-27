import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon }) => {
  return (
    <article className="w-[241px] h-[260px] shadow-[6px_6px_6px_6px_rgba(222,221,221,0.33)] flex flex-col items-center text-center bg-white px-6 py-[51px] rounded-lg max-md:w-full max-md:h-[200px] max-md:px-5 max-md:py-[30px]">
      <div className="mb-5 flex items-center justify-center w-[33px] h-[29px]">
        {icon}
      </div>
      <h3 className="text-black text-[32px] font-light mb-[30px]">
        {title}
      </h3>
      <div className="text-black text-2xl font-black mb-[13px]">
        {value}
      </div>
      <p className="text-black text-2xl font-light text-center leading-[1.2]">
        {description}
      </p>
    </article>
  );
};
