import React from 'react';
import { Details } from './Details';
import { MainBar } from './MainBar';
import { Frame } from './Frame';

export function Navbar() {
  return (
    <nav className="flex flex-col w-full z-50 fixed top-0 left-0">
      <Details />
      <MainBar />
      <Frame />
    </nav>
  );
}
