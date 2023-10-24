import React from 'react';
import { SVGIconProps } from './svg.types';

export const UserIcon = ({
  size = '16px',
  className = 'cursor-pointer',
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.6"
      d="M12.092 14.413c-.587.174-1.28.254-2.094.254h-4c-.813 0-1.506-.08-2.093-.254.147-1.733 1.927-3.1 4.093-3.1 2.167 0 3.947 1.367 4.094 3.1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.6"
      d="M9.998 1.333h-4C2.665 1.333 1.332 2.667 1.332 6v4c0 2.52.76 3.9 2.573 4.413.147-1.733 1.927-3.1 4.093-3.1 2.167 0 3.947 1.367 4.093 3.1 1.814-.513 2.574-1.893 2.574-4.413V6c0-3.333-1.333-4.667-4.667-4.667zm-2 8.114a2.39 2.39 0 010-4.78 2.39 2.39 0 010 4.78z"
    />
  </svg>
);
