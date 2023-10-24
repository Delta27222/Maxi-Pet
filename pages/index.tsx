import React from 'react';
import {
  NavbarComponent,
  BannerComponent,
  ShopByPetsComponent,
  FooterComponent,
  FeatureProductsComponent,
  AddImageComponent,
  PopularProductsComponent,
  ServicesComponent,
  PartnersComponent,
} from '../components';
import ad from '../public/ad.png';
import max from '../public/max.png';
import cat from '../public/cat.png';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-system-100 flex flex-col dark:bg-black font-montserrat">
      <NavbarComponent />
      <BannerComponent />
      <main className="mx-auto w-screen px-10 sm:px-14 lg:px-36">
        <ShopByPetsComponent />
        <FeatureProductsComponent
          title="Productos destacados"
          subTitle="Lorem ipsum dolor sit amet."
          image={cat}
          order1="order-1"
          order2="order-2"
        />
        <AddImageComponent image={ad} />
        <PopularProductsComponent />
        <AddImageComponent image={max} />
        <FeatureProductsComponent
          title="Últimos productos"
          subTitle="Lorem ipsum dolor sit amet."
          image={cat}
          order1="order-2 ml-5"
          order2="order-1"
        />
        <ServicesComponent />
        <PartnersComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
