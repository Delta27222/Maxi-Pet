import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { TitleSection } from './TitleSection';
import { ProductList } from './ProductList';

interface FeatureProductsProps {
  title: string;
  subTitle: string;
  image: StaticImageData;
  order1: string;
  order2: string;
}

export function FeatureProducts({
  title,
  subTitle,
  image,
  order1,
  order2,
}: FeatureProductsProps) {
  return (
    <section
      id="marca-category"
      className="flex flex-col justify-start items-start bg-system-100 py-10"
    >
      <TitleSection title={title} subTitle={subTitle} />
      <div className="flex flex-row justify-center items-center w-full gap-10">
        <Image
          src={image}
          alt="logo-MaxiPet"
          className={`hidden lg:flex lg:w-[40%] xl:w-[60%] object-cover ${order1}`}
        />
        <ProductList
          className={`grid place-items-center grid-cols-1 xm:grid-cols-2 xmm:grid-cols-3 gap-3 xm:gap-6 xmm:gap-10 md:gap-16 w-full ${order2}`}
          amount={6}
        />
      </div>
    </section>
  );
}
