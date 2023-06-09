"use client";

import React, { useEffect, useState } from "react";
import { LucideMoon, LucideSun } from "lucide-react";

import { Button } from "~/components/ui/button";

const ThemeSelector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <Button
      className="h-8 w-8 rounded-full p-1"
      onClick={handleToggleTheme}
      aria-label="Toggle themes"
    >
      {isDarkTheme ? <LucideMoon className="" /> : <LucideSun className="" />}
    </Button>
  );
};

export default ThemeSelector;
