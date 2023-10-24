import React from 'react';
import {
  ArrowDownIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
} from './SVGIcons';

export function Details() {
  return (
    <section className="h-7 px-9 flex justify-end items-center bg-primary-300 gap-x-4">
      <div className="flex flex-row justify-center items-center space-x-1">
        <LocationIcon />
        <p className="text-xs text-white font-">Bello Monte</p>
        <ArrowDownIcon />
      </div>
      <div className="flex flex-row justify-center items-center space-x-3">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
    </section>
  );
}
