"use client";

import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { translations } from "../messages/translations";
import { ChangeLanguageButton } from "./ChangeLanguageButton";
import { useLanguage } from "@/context/LanguageContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang as "pl" | "en"];

  const navigationLeftSide: NavItem[] = [
    { name: t.Layout.home, href: "/" },
    {
      name: t.Layout.about,
      href: "/o-nas",
      submenu: [
        { name: t.Layout.sword, href: "/miecz-dlugi" },
        { name: t.Layout.sabre, href: "/szabla" },
        { name: t.Layout.children, href: "/szermierka-dzieci" },
        { name: t.Layout.junior, href: "/sekcja-juniorow" },
      ],
    },
  ];

  const navigationRightSide: NavItem[] = [
    {
      name: t.Layout.schedule,
      href: "https://gdanskaszkolafechtunku.wod.guru/zajecia",
    },
    {
      name: t.Layout.prices,
      href: "https://gdanskaszkolafechtunku.wod.guru/karnety",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (href: string) => (href.startsWith("http") ? href : href);

  return (
    <Disclosure
      as="nav"
      className="bg-black fixed left-1/2 -translate-x-1/2 z-50 w-full font-trajan tracking-widest transition-all duration-300"
    >
      {({ open }) => (
        <>
          {/* Desktop */}
          <div
            className={classNames(
              "hidden sm:block transition-all duration-300 pt-10 pb-2",
              scrolled ? "mb-10" : "",
            )}
          >
            <div className="absolute right-9 top-1/2 -translate-y-1/2">
              <ChangeLanguageButton />
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center">
                  {/* Left */}
                  <div className="flex space-x-4 items-center">
                    {navigationLeftSide.map((item) => (
                      <div key={item.name} className="w-44 relative group">
                        <Link
                          href={getHref(item.href)}
                          className="relative text-white text-center block rounded-md px-10 text-xl uppercase font-black h-16
                          after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                          after:transition-all after:duration-300
                          hover:after:w-1/2 hover:after:left-1/4"
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="absolute left-0 top-full hidden group-hover:block bg-black/50 backdrop-blur-sm border border-white/10 text-center">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={getHref(sub.href)}
                                className="block px-6 py-4 text-white hover:bg-white/10 transition rounded"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Logo */}
                  <div className="flex items-center px-8">
                    <Link href="/">
                      <Image
                        src="/logo_white.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                      />
                    </Link>
                  </div>

                  {/* Right */}
                  <div className="flex space-x-4 items-center">
                    {navigationRightSide.map((item) => (
                      <a
                        key={item.name}
                        href={getHref(item.href)}
                        className="relative text-white text-center block rounded-md px-10 text-xl uppercase font-black h-16
                          after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                          after:transition-all after:duration-300
                          hover:after:w-1/2 hover:after:left-1/4"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex items-center justify-between h-40 px-4">
            <DisclosureButton className="text-white p-2">
              {open ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </DisclosureButton>
            <Link href="/">
              <Image
                src="/logo_white.png"
                alt="Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
            <ChangeLanguageButton size={30} />
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden bg-black border-t border-white/10">
            <div className="space-y-2 px-6 py-6">
              {[...navigationLeftSide, ...navigationRightSide].map((item) => (
                <div key={item.name}>
                  <a
                    href={getHref(item.href)}
                    className="block text-center text-white text-lg font-semibold py-3 rounded-md hover:bg-white/10 transition"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="mt-2 space-y-1">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={getHref(sub.href)}
                          className="block text-center text-white text-base py-2 rounded"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
