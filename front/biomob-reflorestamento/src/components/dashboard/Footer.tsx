'use client'

import React from 'react';

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  alt: string;
}

interface SocialMedia {
  icon: string;
  name: string;
  url: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/c0ff5226208f302a27443eb5b643ecda63716181?placeholderIfAbsent=true',
    title: 'Localização',
    details: 'R. Afrânio Melo Franco, 333 - Quitandinha, Petrópolis - RJ, 25650-000',
    alt: 'Ícone de localização'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/4d1fb5f8f8a0144a4b1f3edea3597e298013bf3e?placeholderIfAbsent=true',
    title: 'E-mail',
    details: 'biomob@biomob.org',
    alt: 'Ícone de email'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/688cde34-05ae-4b4a-9d4c-b4e31e900c0c?placeholderIfAbsent=true',
    title: 'WhatsApp',
    details: '(21) 96537 - 9669',
    alt: 'Ícone do WhatsApp'
  }
];

const socialMedia: SocialMedia[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/e16a77404c6de7a5cb1372b6e3a35227f1dd51cc?placeholderIfAbsent=true',
    name: 'Facebook',
    url: '#'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/c96db5b8cec46b8c7c3c22bc88139b6c280d71b7?placeholderIfAbsent=true',
    name: 'Instagram',
    url: '#'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/e7262b26dbb34d6d8b6b89dae6d0dd5b/10209e549ccfb387797a8e1647261c1ded7773ef?placeholderIfAbsent=true',
    name: 'Twitter',
    url: '#'
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(120,227,202,0.49)] w-full mt-[41px] pl-[18px] pr-20 py-5 max-md:max-w-full max-md:mt-10 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[51%] max-md:w-full max-md:ml-0">
          <div className="flex gap-[22px] text-2xl text-black font-normal mt-2 max-md:mt-10">
            <div className="flex items-start gap-[22px]">
              <img
                src={contactInfo[0].icon}
                alt={contactInfo[0].alt}
                className="aspect-[1.15] object-contain w-[39px] shrink-0"
              />
              <div className="basis-auto">
                <span className="font-light">{contactInfo[0].title}</span>
                <br />
                <span className="font-light text-[20px]">
                  {contactInfo[0].details}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-[22px] ml-4">
              <img
                src={contactInfo[1].icon}
                alt={contactInfo[1].alt}
                className="aspect-[1.27] object-contain w-[38px] shrink-0 mt-1.5"
              />
              <div>
                <span className="font-light">{contactInfo[1].title}</span>
                <br />
                <a
                  href={`mailto:${contactInfo[1].details}`}
                  className="font-light text-[20px] hover:underline"
                >
                  {contactInfo[1].details}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex items-stretch gap-[22px] text-2xl text-black font-normal mt-3.5 max-md:mt-10">
            <img
              src={contactInfo[2].icon}
              alt={contactInfo[2].alt}
              className="aspect-[0.69] object-contain w-[31px] bg-black shrink-0"
            />
            <div>
              <span className="font-light">{contactInfo[2].title}</span>
              <br />
              <a
                href={`https://wa.me/5521965379669`}
                className="font-light text-[20px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo[2].details}
              </a>
            </div>
          </div>
        </div>
        <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow items-stretch gap-5 justify-between max-md:mt-10">
            <div className="bg-black flex w-[9px] shrink-0 h-[102px]" />
            <div className="my-auto">
              <h3 className="text-black text-2xl font-light max-md:mr-[3px]">
                Nossas Redes Sociais
              </h3>
              <div className="flex items-stretch gap-5 justify-between mt-[17px]">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="hover:opacity-80 transition-opacity"
                    aria-label={`Visitar nosso ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={`Ícone do ${social.name}`}
                      className={`object-contain shrink-0 ${
                        index === 0 ? 'aspect-[1] w-9' : 'aspect-[1.03] w-10'
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
