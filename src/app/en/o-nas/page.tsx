"use client";
import Image from "next/image";
import { translations } from "@/messages/translations";

export default function Page() {
  return (
    <div className="pt-28 ">
      {/* Hero section */}
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
              {translations.en.About.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="text-gray-900">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          {/* Image right */}
          <div className="relative float-right ml-8 mb-6 w-full sm:w-1/2 lg:w-1/3">
            <Image
              src="/petervondanzig.jpg"
              alt="Gdańska Szkoła Fechtunku"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <p>{translations.en.About.paragraphOne}</p>

          <p className="mt-6">{translations.en.About.paragraphTwo}</p>

          {/* Clear float before next image */}
          <div className="clear-both my-12" />

          {/* Image left */}
          <div className="relative float-left mr-8 mb-6 w-full sm:w-1/2 lg:w-1/3">
            <Image
              src="/logo_white.png"
              alt="Trening szermierki w Gdańsku"
              width={500}
              height={600}
              priority
            />
          </div>

          <p>{translations.en.About.paragraphThree}</p>

          <p className="mt-6">{translations.en.About.paragraphFour}</p>

          <p className="mt-6">{translations.en.About.paragraphFive}</p>

          <p className="mt-6">{translations.en.About.paragraphSix}</p>

          {/* Clear floats at end */}
          <div className="clear-both" />
        </article>
      </div>
    </div>
  );
}
