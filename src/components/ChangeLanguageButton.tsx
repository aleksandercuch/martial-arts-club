"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "@/context/LanguageContext";

export const ChangeLanguageButton = ({ size = 40 }) => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    const newLang = lang === "pl" ? "en" : "pl";
    setLang(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {lang === "pl" ? (
        <ReactCountryFlag
          countryCode="GB"
          svg
          title="English"
          style={{ width: size, height: size }}
        />
      ) : (
        <ReactCountryFlag
          countryCode="PL"
          svg
          title="Polski"
          style={{ width: size, height: size }}
        />
      )}
    </button>
  );
};
