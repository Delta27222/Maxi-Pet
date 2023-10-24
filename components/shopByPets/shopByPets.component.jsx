import React from 'react';
import Image from 'next/image';
import { petCategory } from '../../constants';
import dogIcon from '../../public/dogIcon.png';
import { TitleSectionComponent } from '..';

export const ShopByPetsComponent = () => (
  <section
    id="pet-category"
    className="flex flex-col justify-start items-start bg-system-100 py-10"
  >
    <TitleSectionComponent
      title="Una gran variedad de categorías"
      subTitle="Lorem ipsum dolor sit amet. "
    />
    <div className="grid grid-cols-3  md:grid-cols-6  w-full">
      {petCategory.map((item, index) => (
        <article
          key={index}
          className="flex flex-col justify-center items-center"
        >
          <Image src={dogIcon} alt="dog-icon" />
          <span className="text-sm sm:text-base font-semibold text-black">
            {item}
          </span>
        </article>
      ))}
    </div>
  </section>
);
