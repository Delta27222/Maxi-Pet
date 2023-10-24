import React from 'react';
import Image from 'next/image';
import { Carousel } from '@material-tailwind/react';
import bannerImage from '../public/bannerImage.png';

export function Banner() {
  return (
    <section className="min-w-full mt-20">
      <Carousel
        className=""
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute z-40 bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
            {new Array(length).fill('').map((_, i) => (
              <button type="button" key={i} onClick={() => setActiveIndex(i)}>
                <span
                  className={`w-8 block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'bg-primary-300' : 'bg-secondary-100'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      >
        <Image
          src={bannerImage}
          alt="banner-firulais"
          className="h-full w-screen object-cover"
          priority
        />
        <Image
          src={bannerImage}
          alt="banner-firulais"
          className="h-full w-screen object-cover"
          priority
        />
        <Image
          src={bannerImage}
          alt="banner-firulais"
          className="h-full w-screen object-cover"
          priority
        />
        <Image
          src={bannerImage}
          alt="banner-firulais"
          className="h-full w-screen object-cover"
          priority
        />
      </Carousel>
    </section>
  );
}
