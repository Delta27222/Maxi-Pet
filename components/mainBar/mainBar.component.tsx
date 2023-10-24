import React from 'react';
import Image from 'next/image';
import maxiPetLogo from '../../public/maxiPetLogo.png';
import {
  LocationIcon,
  PetHouseIcon,
  SearchIcon,
  ShoppingCartFullIcon,
  UserIcon,
} from '../SVGIcons';

export const MainBarcomponent = () => (
  <section className="h-14 px-9 flex flex-row justify-between items-center bg-system-100">
    <Image src={maxiPetLogo} alt="logo-MaxiPet" />
    <SearchBar />
    <Options />
  </section>
);

const Options = () => (
  <div className="flex flex-row justify-center items-center space-x-3">
    <LocationIcon color="#000" />
    <PetHouseIcon />
    <UserIcon />
    <ShoppingCartFullIcon />
  </div>
);

const SearchBar = () => (
  <div className="h-8 w-[300px] flex-row justify-between items-center border py-1 px-3 gap-1 rounded hidden md:flex">
    <input
      className="text-black font-normal text-sm outline-none w-full h-4 placeholder:text-secondary-200"
      placeholder="Buscador"
    />
    <SearchIcon />
  </div>
);
