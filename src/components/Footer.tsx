"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      href: "https://www.instagram.com/gdanskaszkolafechtunku/",
      icon: <FaInstagram />,
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61576826655337",
      icon: <FaFacebookF />,
      bg: "bg-blue-700",
    },
  ];

  return (
    <footer className="w-full text-white bg-black">
      {/* Logos */}
      <div className="mx-auto px-6 py-10  w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          <Link
            href="https://polish-hema-federation.pl/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/phf_logo.png"
              alt="Trening szermierki w Gdańsku"
              width={160}
              height={160}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://histfenc.eu/pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/spes_logo.png"
              alt="Trening szermierki w Gdańsku"
              width={180}
              height={160}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://kriegerweapons.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logokrieger.png"
              alt="Trening szermierki w Gdańsku"
              width={160}
              height={160}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://sparringglove.com/pl/?v=288404204e3d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sparring_gloves_logo.jpg"
              alt="Trening szermierki w Gdańsku"
              width={160}
              height={160}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Socials + copyright */}
      <div className="py-8">
        <ul className="flex justify-center gap-4 mb-4">
          {socials.map((social, index) => (
            <li key={index}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl transition-transform hover:scale-110 ${social.bg}`}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-300 text-sm italic px-4 font-trajan tracking-widest">
          &copy; 2026 GDAŃSKA SZKOŁA FECHTUNKU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
