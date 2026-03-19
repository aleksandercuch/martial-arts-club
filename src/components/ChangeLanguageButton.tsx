"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import styles from "./navbar.module.css";
import { useRouter, usePathname } from "next/navigation";

export const ChangeLanguageButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLocale = segments[1]; // "pl" or "en"

  const changeLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}/${segments.slice(2).join("/")}`;
    router.push(newPath === `/${newLocale}/` ? `/${newLocale}` : newPath);
  };

  return (
    <>
      {currentLocale === "pl" ? (
        <ReactCountryFlag
          countryCode="GB"
          svg
          className={styles.flagIcon}
          onClick={() => changeLanguage("en")}
        />
      ) : (
        <ReactCountryFlag
          countryCode="PL"
          svg
          className={styles.flagIcon}
          onClick={() => changeLanguage("pl")}
        />
      )}
    </>
  );
};
