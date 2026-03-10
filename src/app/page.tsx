"use client";

import { useEffect } from "react";
import Image from "next/image";

// COMPONENTS
import { Carousel } from "@/components/HomePage/Carousel/Carousel";
import { BulletSection } from "@/components/HomePage/BulletSection/BulletSection";
import { Weapons } from "@/components/HomePage/Weapons/weapons";

export default function Page() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <main className="flex flex-col items-center z-10">
      <Carousel />
      <div className="w-full bg-black text-white px-6 py-20 ">
        <p className="max-w-5xl mx-auto text-center md:text-xl leading-relaxed tracking-widest font-light text-sm font-trajan">
          GDAŃSKA SZKOŁA FECHTUNKU TO MIEJSCE, GDZIE PASJA DO SZERMIERKI
          HISTORYCZNEJ ŁĄCZY SIĘ Z REALNYM ROZWOJEM SPRAWNOŚCI, KONCENTRACJI I
          CHARAKTERU. OFERUJEMY ZAJĘCIA Z TECHNIK HISTORYCZNYCH NIEZALEŻNIE OD
          POZIOMU ZAAWANSOWANIA. PRZYJDŹ I SPRAWDŹ JAK ZAPOMNIANE TECHNIKI
          DAWNYCH MISTRZÓW ŁĄCZĄ SIĘ Z WSPÓŁCZESNĄ METODYKĄ SPORTOWĄ. DOŁĄCZ DO
          NAS I ODKRYJ HISTORIĘ NA NOWO!
        </p>
      </div>
      <BulletSection />
    </main>
  );
}
