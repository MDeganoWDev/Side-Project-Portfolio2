"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const LanguageSelector = () => {
  return (
    <Select>
      <SelectTrigger className="h-8 w-20 border-transparent bg-transparent text-transparent ring-transparent ring-offset-transparent focus:border-transparent focus:text-transparent focus:ring-transparent">
        <SelectValue placeholder="here" />
      </SelectTrigger>
      <SelectContent className="w-10 border-transparent bg-transparent text-transparent ring-transparent">
        <SelectGroup>
          <SelectItem value="fr">
            <img
              src="/images/icon-fr.png"
              alt="français"
              className="h-8 rounded-full"
            />
          </SelectItem>
          <SelectItem value="es">
            <img
              src="/images/icon-es.png"
              alt="Espanol"
              className="h-8 rounded-full"
            />
          </SelectItem>
          <SelectItem value="en">
            <img
              src="/images/icon-en.png"
              alt="English"
              className="h-8 rounded-full"
            />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
