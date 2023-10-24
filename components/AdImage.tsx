import React from 'react';
import Image from 'next/image';

export function AddImage({ image }) {
  return (
    <Image
      src={image}
      alt={image}
      className="h-full w-full object-cover py-10"
    />
  );
}
