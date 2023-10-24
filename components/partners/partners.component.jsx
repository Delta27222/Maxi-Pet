import React from 'react';
import Image from 'next/image';
import { TitleSectionComponent } from '..';
import partner from '../../public/partner.png';

export const PartnersComponent = () => (
  <section
    id="partners-category"
    className="flex flex-col justify-start items-start bg-system-100 py-10 "
  >
    <TitleSectionComponent
      title="Trabajamos con las mejores marcas"
      subTitle="Lorem ipsum dolor sit amet. "
    />
    <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
      <h2 className="text-base font-normal text-black pb-0 ld:pb-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </h2>
      <div className="grid grid-cols-2 place-items-center gap-5  sm:flex sm:flex-row justify-between items-center w-full">
        {Array.from({ length: 4 }, (_, index) => (
          <Image key={index} src={partner} alt="partner_icon" priority />
        ))}
      </div>
    </div>
  </section>
);
