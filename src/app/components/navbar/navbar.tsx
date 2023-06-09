import React from "react";

import LanguageSelector from "./language-selector";
import NavSelector from "./nav-selector";
import ThemeSelector from "./theme-selector";

const Navbar = () => {
  return (
    <div className=" fixed top-0 flex h-10 w-full items-center justify-between bg-secondary px-2">
      <LanguageSelector />
      <NavSelector />
      <ThemeSelector />
    </div>
  );
};

export default Navbar;
