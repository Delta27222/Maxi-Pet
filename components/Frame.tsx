import React from 'react';
import { navBarOptions } from '../constants';

export function Frame() {
  return (
    <section className="h-7 hidden md:flex flex-row justify-around px-5  md:px-10 lg:px-24 bg-system-200 drop-shadow-xl">
      {navBarOptions.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-secondary-600 text-xs md:text-sm font-medium cursor-pointer hidden sm:flex"
        >
          {item.text}
        </a>
      ))}
    </section>
  );
}
