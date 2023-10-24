import React from 'react';
import Image from 'next/image';

export const AddImageComponent = ({ image }) => (
  <Image src={image} alt={image} className="h-full w-full object-cover py-10" />
);
