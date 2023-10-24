import React from 'react';
import { services } from '../constants';
import { ServiceInfo } from './ServiceInfo';
import { TitleSection } from './TitleSection';

export function Services() {
  return (
    <section
      id="service-category"
      className="flex flex-col justify-start items-start bg-system-100 py-10"
    >
      <TitleSection
        title="Nuestros servicios"
        subTitle="Lorem ipsum dolor sit amet. "
      />
      <h2 className="text-base font-normal text-black pb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-14 sm:gap-16 md:gap-28 w-full">
        {services.map((service, index) => (
          <ServiceInfo
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

