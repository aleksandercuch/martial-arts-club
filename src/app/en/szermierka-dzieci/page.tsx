"use client";
import Image from "next/image";
import { translations } from "@/messages/translations";

export default function Page() {
  return (
    <div className="pt-28 ">
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
              {translations.en.Children.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-900 font-trajan">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p>{translations.en.Children.paragraphOne}</p>
          <div className="w-full my-6 relative h-[400px] sm:h-[600px]">
            <Image
              src="/child.jpg"
              alt="Trening szermierki w Gdańsku"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p>{translations.en.Children.paragraphTwo}</p>
          <p className="mt-6">{translations.en.Children.paragraphThree}</p>
          <div className="clear-both" />
        </article>
      </div>
    </div>
  );
}
