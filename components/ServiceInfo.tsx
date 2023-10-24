import Image from 'next/image';
import dogIconFace from '../public/dogIconFace.png';

interface ServiceInfoProps {
  title: string;
  description: string;
}

export function ServiceInfo({ title, description }: ServiceInfoProps) {
  return (
    <article className="w-64 h-40 md:w-72 xl:w-80">
      <Image src={dogIconFace} alt="dog_icon" />
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <p className="text-sm font-normal text-black">{description}</p>
    </article>
  );
}
