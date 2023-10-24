import React from 'react';
import { SVGIconProps } from './svg.types';

export const DogHouseIcon = ({
  size = '40px',
  className = 'cursor-pointer',
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 39 40"
    className={className}
  >
    <path
      fill="#E2081E"
      d="M38.303 10.06L30.448.996A2.89 2.89 0 0028.265 0H10.22a2.89 2.89 0 00-2.182.996L.18 10.06a.443.443 0 00.262.8h37.598a.443.443 0 00.263-.8zM1.117 40h9.181v-9.938a8.906 8.906 0 018.907-8.907c2.456 0 4.68.988 6.293 2.607a8.89 8.89 0 012.607 6.3V40h9.187V12.112H1.117V40z"
    />
    <path
      fill="#E2081E"
      d="M26.552 30.19c-.694-.169-2.469-.263-2.857-.789-.4-.525-.956-2.195-3.645-2.195-2.69 0-2.983 1.145-2.983 1.145s-4.14 4.264-5.547 6.397V40h10.305s-.032-1.67-.557-2.983c0 0 .557-1.607 1.639-1.933 0 0 1.05.262 1.733-.662 0 0 2.405-.82 2.069-3.015 0 0 .525-1.05-.157-1.218zm-3.982.041c-.367.063-.693-.042-.725-.22-.032-.19.242-.39.61-.452.367-.064.693.03.725.22.03.19-.242.389-.61.452z"
    />
  </svg>
);
