"use client";

import { useEffect } from "react";
import { translations } from "@/messages/translations";

// COMPONENTS
import { Carousel } from "@/components/HomePage/Carousel/Carousel";
import { BulletSection } from "@/components/HomePage/BulletSection/BulletSection";
import { Weapons } from "@/components/HomePage/Weapons/weapons";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { lang } = useLanguage();
  const t = translations[lang as "pl" | "en"];

  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <main className="flex flex-col items-center z-10">
      <Carousel />
      <div className="w-full bg-black text-white px-6 py-20">
        <p className="max-w-5xl mx-auto text-center md:text-xl leading-relaxed tracking-widest font-light text-sm font-trajan">
          {t.HomePage.description}
        </p>
      </div>
      <BulletSection />
    </main>
  );
}
