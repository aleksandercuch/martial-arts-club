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

const navigationLeftSide: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "O nas",
    href: "/about",
    submenu: [
      { name: "MIECZ DŁUGI", href: "/longsword" },
      { name: "SZABLA", href: "/sabre" },
      { name: "ZAJĘCIA DLA DZIECI", href: "/children-training" },
    ],
  },
];

const navigationRightSide: NavItem[] = [
  { name: "Grafik", href: "https://gdanskaszkolafechtunku.wod.guru/zajecia" },
  { name: "Cennik", href: "https://gdanskaszkolafechtunku.wod.guru/karnety" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[]; // opcjonalne
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-black fixed left-1/2 -translate-x-1/2 z-50 w-full font-trajan tracking-widest transition-all duration-300"
    >
      {({ open }) => (
        <>
          <div
            className={classNames(
              "hidden sm:block transition-all duration-300 pt-10 pb-2",
              scrolled ? "mb-10" : "",
            )}
          >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex space-x-4 items-center">
                      {navigationLeftSide.map((item) => (
                        <div key={item.name} className="w-44 relative group">
                          <Link
                            href={item.href}
                            className="relative text-white text-center block rounded-md px-10 text-xl uppercase font-black content-center h-16
                            after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                            after:transition-all after:duration-300
                            hover:after:w-1/2 hover:after:left-1/4"
                          >
                            {item.name}
                          </Link>

                          {item.submenu && (
                            <div className="absolute left-0 top-[calc(100%)] hidden group-hover:block border-t-0 bg-black/50 backdrop-blur-sm border border-white/10 text-center">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
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

                    <div className="flex items-center px-8">
                      <Image
                        src="/logo_white.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                      />
                    </div>

                    <div className="flex space-x-4 items-center">
                      {navigationRightSide.map((item) => (
                        <div key={item.name} className="w-44">
                          <a
                            href={item.href}
                            className="relative text-white text-center block rounded-md px-10 text-xl uppercase font-black content-center h-16
                            after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                            after:transition-all after:duration-300
                            hover:after:w-1/2 hover:after:left-1/4"
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex items-center justify-between h-40 px-4 relative">
            <DisclosureButton className="text-white p-2">
              {open ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </DisclosureButton>

            <Link href={"/"}>
              <Image
                src="/logo_white.png"
                alt="Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>

          <DisclosurePanel className="sm:hidden bg-black border-t-0 border-white/10">
            <div className="space-y-2 px-6 py-6">
              {[...navigationLeftSide, ...navigationRightSide].map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-center text-white text-lg font-semibold py-3 rounded-md hover:bg-white/10 transition"
                  >
                    {item.name}
                  </a>

                  {item.submenu && (
                    <div className="mt-2 space-y-1">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
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
