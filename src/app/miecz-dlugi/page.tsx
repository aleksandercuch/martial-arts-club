"use client";

import Image from "next/image";
import { translations } from "@/messages/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { lang } = useLanguage(); // "pl" | "en"
  const t = translations[lang as "pl" | "en"];

  return (
    <div className="pt-28">
      {/* Header Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/background-about.png"
          alt="Trening szermierki w Gdańsku"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none
                bg-gradient-to-b
                from-black/100
                via-black/20
                to-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/70 px-6 py-4 sm:px-10 sm:py-6 rounded-md shadow-lg w-full">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-trajan tracking-widest text-center">
              {t.Sword.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-900 font-trajan">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p className="mb-4">{t.Sword.paragraphOne}</p>
          <div className="flex flex-col md:flex-row md:gap-8 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
              <Image
                src="/sword.jpg"
                alt="Trening szermierki w Gdańsku"
                width={400}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>

            <div className="w-full md:w-2/3">
              <p className="mb-4">{t.Sword.paragraphTwo}</p>
              <p className="mb-4">{t.Sword.paragraphThree}</p>
              <p className="mb-4">{t.Sword.paragraphFour}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
