import React from 'react';
import { SVGIconProps } from './svg.types';

export const LocationIcon = ({
  size = '16px',
  color,
  className = 'cursor-pointer',
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 14 14"
    className={className}
  >
    <path
      stroke={color || '#F8F5F3'}
      strokeWidth="0.5"
      d="M7 7.834a1.82 1.82 0 100-3.64 1.82 1.82 0 000 3.64z"
    />
    <path
      stroke={color || '#F8F5F3'}
      strokeWidth="0.5"
      d="M2.112 4.952c1.149-5.051 8.633-5.045 9.776.006.671 2.964-1.172 5.472-2.788 7.024a3.03 3.03 0 01-4.206 0c-1.61-1.552-3.453-4.066-2.782-7.03z"
    />
  </svg>
);
