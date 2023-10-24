import React from 'react';
import { SVGIconProps } from './svg.types';

export const FacebookIcon = ({
  size = '13px',
  className = 'cursor-pointer',
  color = '#F8F5F3',
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 8 13"
    className={className}
  >
    <path
      fill={color}
      d="M5.32 12.643V7.058H7.2l.283-2.179H5.335c0-.582-.006-1.144.005-1.706a.77.77 0 01.413-.624.8.8 0 01.418-.092c.39-.02.785-.014 1.176-.019h.194V.492C6.843.411 6.14.392 5.44.435a2.603 2.603 0 00-1.463.584 2.623 2.623 0 00-.912 1.971c-.028.572-.014 1.144-.018 1.716v.183H1.168v2.178h1.869v5.576"
    />
  </svg>
);
