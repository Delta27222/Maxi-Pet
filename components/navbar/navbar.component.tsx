import React from 'react';
import { DetailsComponent, MainBarcomponent, FrameComponent } from '..';

export const NavbarComponent = () => (
  <nav className="flex flex-col w-full z-50 fixed top-0 left-0">
    <DetailsComponent />
    <MainBarcomponent />
    <FrameComponent />
  </nav>
);
