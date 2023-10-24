import React from 'react';
import Image from 'next/image';
import { ProducList, TitleSectionComponent } from '..';

export const FeatureProductsComponent = ({
  title,
  subTitle,
  image,
  order1,
  order2,
}) => (
  <section
    id="marca-category"
    className="flex flex-col justify-start items-start bg-system-100 py-10"
  >
    <TitleSectionComponent title={title} subTitle={subTitle} />
    <div className="flex flex-row justify-center items-center w-full gap-10">
      <Image
        src={image}
        alt="logo-MaxiPet"
        className={`hidden lg:flex lg:w-[40%] xl:w-[60%] object-cover ${order1}`}
      />
      <ProducList
        className={`grid place-items-center grid-cols-1 xm:grid-cols-2 xmm:grid-cols-3 gap-3 xm:gap-6 xmm:gap-10 md:gap-16 w-full ${order2}`}
        amount={6}
      />
    </div>
  </section>
);
