import React from 'react';
import { AvilaIcon, DogHouseIcon, TreeIcon } from '../SVGIcons';

export const CopyRightComponent = () => (
  <section className="h-9 flex flex-row justify-center items-center bg-primary-300 relative mt-10">
    <div className="flex flex-row justify-between items-end w-screen absolute -top-[60px] px-40">
      <TreeIcon />
      <DogHouseIcon />
    </div>
    <div className="flex flex-row justify-center items-center space-x-1">
      <span className="text-white text-[10px] lg:text-xs sm:flex sm:flex-row ">
        Copyright © 2021 Maxi Pet.{' '}
        <p className="hidden sm:flex">Todos los Derechos Reservados. </p>
        Desarrollado por Avila Tek.{' '}
      </span>
      <AvilaIcon />
    </div>
  </section>
);
