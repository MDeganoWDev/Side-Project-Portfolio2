"use client";

import React from "react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

const NavSelector = () => {
  return (
    <div className="flex h-full space-x-1 rounded-3xl bg-primary p-1">
      <Button className="h-8 rounded-3xl" variant="secondary">
        <Link href="#welcome">Welcome</Link>
      </Button>
      <Button className="h-8 rounded-3xl" variant="secondary">
        <Link href="#about">About</Link>
      </Button>
      <Button className="h-8 rounded-3xl" variant="secondary">
        <Link href="#competences">Competences</Link>
      </Button>
      <Button className="h-8 rounded-3xl" variant="secondary">
        <Link href="#portfolio">Portfolio</Link>
      </Button>
    </div>
  );
};

export default NavSelector;
