import React from 'react';
import { footerOptions } from '../../constants';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../SVGIcons';

export const FooterOptionsComponent = () => (
  <section className="min-h-80 py-10  px-10 sm:px-14 lg:px-24 flex flex-col lg:flex-row justify-between items-start bg-system-200 gap-10">
    <AboutUs />
    <div className="flex flex-row justify-start flex-wrap gap-5">
      {footerOptions.map((option, index) => (
        <MyAccount key={index} {...option} />
      ))}
    </div>
  </section>
);

const AboutUs = () => (
  <div className="flex flex-col justify-start items-start gap-5 w-[330px]">
    <h3 className="font-semibold text-base lg:text-lg text-primary-300">
      Sobre nosotros
    </h3>
    <span className="font-normal text-sm lg:text-base text-secondary-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi.
    </span>
  </div>
);
// ver tamano de las letras sssss
const MyAccount = ({ title, info }) => (
  <div className="flex flex-col justify-start items-start gap-5 w-[200px]">
    <h3 className="text-base lg:text-lg font-semibold text-primary-300">
      {title}
    </h3>
    <ul className="font-normal text-sm lg:text-base text-secondary-500 space-y-2 cursor-pointer">
      {info.map((item, index) => (
        <li key={index} className="hover:text-secondary-600">
          {item}
        </li>
      ))}
      {title === 'Atención al cliente' ? (
        <li className="flex flex-row space-x-3">
          <InstagramIcon color="#867D77" />
          <TwitterIcon color="#867D77" />
          <FacebookIcon color="#867D77" />
        </li>
      ) : null}
    </ul>
  </div>
);
