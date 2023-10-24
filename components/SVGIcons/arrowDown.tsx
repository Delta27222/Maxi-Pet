import React from 'react';
import { SVGIconProps } from './svg.types';

export const ArrowDownIcon = ({
  size = '10px',
  className = 'cursor-pointer',
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 10 10"
    className={className}
  >
    <path
      stroke="#F8F5F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.917 3.75L5 6.667 2.083 3.75"
    />
  </svg>
);
