import Image from 'next/image';
import { RatingIcon } from './SVGIcons';
import puppyChiot from '../public/puppyChiot.png';
import { ButtonAdd } from './ButtonAdd';

export function ProductCard({ info }) {
  return (
    <article className="flex flex-col justify-end items-center w-44">
      <Image src={puppyChiot} alt="puppyChiot_food" className="m-5 " />
      <section className="flex flex-col justify-center items-start text-xs lg:text-sm font-normal text-black mb-2">
        <h3 className="">{info.title}</h3>
        <RatingIcon />
        <h4>{info.price}</h4>
      </section>
      <ButtonAdd />
    </article>
  );
}
