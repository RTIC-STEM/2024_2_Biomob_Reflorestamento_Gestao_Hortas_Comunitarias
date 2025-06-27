import React from 'react';

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  month: string;
}

export const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Plantio Comunitário',
      location: 'Vale Verde - 09:00',
      date: '15',
      month: 'Mar'
    },
    {
      id: '2',
      title: 'Workshop de Compostagem',
      location: 'Horta Central - 14:00',
      date: '17',
      month: 'Mar'
    },
    {
      id: '3',
      title: 'Manutenção Coletiva',
      location: 'Serra da Estrela - 08:30',
      date: '19',
      month: 'Mar'
    }
  ];

  return (
    <section className="w-[475px] h-[487px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] bg-white px-[43px] py-[39px] rounded-lg max-md:w-full max-md:px-5 max-md:py-0 max-sm:w-full max-sm:px-[15px] max-sm:py-0">
      <h2 className="text-black text-[32px] font-normal mb-[27px]">
        Próximos Eventos
      </h2>
      <div className="space-y-10">
        {events.map((event) => (
          <article key={event.id} className="flex items-center gap-[13px]">
            <div className="relative flex flex-col items-center w-[60px] flex-shrink-0">
              <div className="relative">
                <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.125 0C13.6223 0 14.0992 0.227176 14.4508 0.631551C14.8025 1.03593 15 1.58438 15 2.15625V4.3125H45V2.15625C45 1.58438 45.1975 1.03593 45.5492 0.631551C45.9008 0.227176 46.3777 0 46.875 0C47.3723 0 47.8492 0.227176 48.2008 0.631551C48.5525 1.03593 48.75 1.58438 48.75 2.15625V4.3125H52.5C54.4891 4.3125 56.3968 5.2212 57.8033 6.8387C59.2098 8.45621 60 10.65 60 12.9375V60.375C60 62.6625 59.2098 64.8563 57.8033 66.4738C56.3968 68.0913 54.4891 69 52.5 69H7.5C5.51088 69 3.60322 68.0913 2.1967 66.4738C0.790176 64.8563 0 62.6625 0 60.375V12.9375C0 10.65 0.790176 8.45621 2.1967 6.8387C3.60322 5.2212 5.51088 4.3125 7.5 4.3125H11.25V2.15625C11.25 1.58438 11.4475 1.03593 11.7992 0.631551C12.1508 0.227176 12.6277 0 13.125 0ZM7.5 8.625C6.50544 8.625 5.55161 9.07935 4.84835 9.8881C4.14509 10.6969 3.75 11.7938 3.75 12.9375V60.375C3.75 61.5187 4.14509 62.6156 4.84835 63.4244C5.55161 64.2331 6.50544 64.6875 7.5 64.6875H52.5C53.4946 64.6875 54.4484 64.2331 55.1516 63.4244C55.8549 62.6156 56.25 61.5187 56.25 60.375V12.9375C56.25 11.7938 55.8549 10.6969 55.1516 9.8881C54.4484 9.07935 53.4946 8.625 52.5 8.625H7.5Z" fill="black"/>
                </svg>
                <svg width="42" height="9" viewBox="0 0 42 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[15px] left-[9px]">
                  <path d="M0 2.25C0 1.65326 0.201136 1.08097 0.55916 0.65901C0.917184 0.237053 1.40277 0 1.90909 0H40.0909C40.5972 0 41.0828 0.237053 41.4408 0.65901C41.7989 1.08097 42 1.65326 42 2.25V6.75C42 7.34674 41.7989 7.91903 41.4408 8.34099C41.0828 8.76295 40.5972 9 40.0909 9H1.90909C1.40277 9 0.917184 8.76295 0.55916 8.34099C0.201136 7.91903 0 7.34674 0 6.75V2.25Z" fill="black"/>
                </svg>
                <span className="text-black text-[32px] font-normal absolute top-6 left-1/2 transform -translate-x-1/2">
                  {event.date}
                </span>
              </div>
              <span className="text-black text-sm font-normal mt-1">
                {event.month}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-black text-2xl font-normal mb-[5px] max-sm:text-lg">
                {event.title}
              </h3>
              <p className="text-black text-xl font-normal max-sm:text-base">
                {event.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
