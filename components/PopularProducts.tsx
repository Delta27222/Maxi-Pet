import React from 'react';
import { TitleSection } from './TitleSection';
import { ProductList } from './ProductList';

export function PopularProducts() {
  return (
    <section className="flex flex-col justify-start items-start bg-system-100 py-10">
      <TitleSection
        title="Productos populares"
        subTitle="Lorem ipsum dolor sit amet. "
      />
      <ProductList
        className="flex flex-row flex-wrap justify-center gap-10 md:gap-5 lg:justify-between items-center w-full"
        amount={5}
      />
    </section>
  );
}

