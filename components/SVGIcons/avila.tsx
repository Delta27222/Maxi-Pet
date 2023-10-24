import React from 'react';
import { SVGIconProps } from './svg.types';

export const AvilaIcon = ({ className = 'cursor-pointer' }: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="18"
    fill="none"
    viewBox="0 0 28 18"
    className={className}
  >
    <path
      fill="#FEFEFE"
      fillRule="evenodd"
      d="M19.677 2.805c-.18.045-.31.108-.504.246-.352.25-.32.188-1.602 2.953a226.309 226.309 0 01-1.165 2.492c-.007.005-.37-.762-.806-1.705-.796-1.722-.895-1.923-1.032-2.083-.637-.745-1.873-.663-2.377.158-.047.076-.52 1.078-1.052 2.227l-.966 2.089L9.5 7.729C8.72 6.044 8.62 5.885 8.245 5.69l-.089-.046v-.712c0-.626-.004-.714-.037-.728a2.183 2.183 0 00-.333-.015H7.49V5.5h-.104c-.4 0-.926.333-1.163.737-.078.132-4.036 8.687-4.036 8.722 0 .017 4.148.026 12.21.026 8.11 0 12.211-.009 12.211-.026 0-.043-5.246-11.37-5.324-11.494-.325-.52-1.021-.807-1.608-.66z"
      clipRule="evenodd"
    />
  </svg>
);
