import React from 'react';

interface TitleSectionProps {
  title: string;
  subTitle: string;
}

export function TitleSection({ title, subTitle }: TitleSectionProps) {
  return (
    <div className="flec flex-col justify-start items-center pb-5">
      <h4 className="text-xs sm:text-sm text-secondary-500">{subTitle}</h4>
      <h1 className="text-lg sm:text-xl font-bold uppercase text-primary-300">
        {title}
      </h1>
    </div>
  );
}
