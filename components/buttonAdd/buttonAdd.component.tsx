import React from 'react';
import { ShoppingCartIcon } from '../SVGIcons';

export const ButtonAddComponent = () => (
  <button
    className="button w-28 h-6 flex flex-row justify-center items-center bg-primary-300 hover:bg-primary-400 rounded space-x-3"
    type="button"
  >
    <ShoppingCartIcon />
    <p className="text-white text-xs font-medium">Agregar</p>
  </button>
);
