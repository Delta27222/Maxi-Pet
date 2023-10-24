import React from 'react';
import { ProducList, TitleSectionComponent } from '..';

export const PopularProductsComponent = () => (
  <section className="flex flex-col justify-start items-start bg-system-100 py-10">
    <TitleSectionComponent
      title="Productos populares"
      subTitle="Lorem ipsum dolor sit amet. "
    />
    <ProducList
      className="flex flex-row flex-wrap justify-center gap-10 md:gap-5 lg:justify-between items-center w-full"
      amount={5}
    />
  </section>
);
