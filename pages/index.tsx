import React from 'react';
import ad from '../public/ad.png';
import max from '../public/max.png';
import cat from '../public/cat.png';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { FeatureProducts } from '../components/FeatureProducts';
import { AddImage } from '../components/AdImage';
import { PopularProducts } from '../components/PopularProducts';
import { Services } from '../components/Services';
import { Partners } from '../components/Partners';
import { Footer } from '../components/Footer';
import { ShopByPets } from '../components/ShopByPets';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-system-100 flex flex-col dark:bg-black font-montserrat">
      <Navbar />
      <Banner />
      <main className="mx-auto w-screen px-10 sm:px-14 lg:px-36">
        <ShopByPets />
        <FeatureProducts
          title="Productos destacados"
          subTitle="Lorem ipsum dolor sit amet."
          image={cat}
          order1="order-1"
          order2="order-2"
        />
        <AddImage image={ad} />
        <PopularProducts />
        <AddImage image={max} />
        <FeatureProducts
          title="Últimos productos"
          subTitle="Lorem ipsum dolor sit amet."
          image={cat}
          order1="order-2 ml-5"
          order2="order-1"
        />
        <Services />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
