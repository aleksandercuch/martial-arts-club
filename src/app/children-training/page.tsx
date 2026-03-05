"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 ">
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background-about.png')] bg-cover bg-bottom">
          <div
            className="absolute inset-0 pointer-events-none
                      bg-gradient-to-b
                      from-black/100
                      via-black/20
                      to-transparent
                    "
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/70 px-6 py-4 sm:px-10 sm:py-6 rounded-md shadow-lg w-full">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bebas tracking-widest text-center">
              Zajęcia dla dzieci
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-900">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p>
            Sekcja dziecięca to przestrzeń świadomego i odpowiedzialnego rozwoju
            najmłodszych. Trening opieramy przede wszystkim na wszechstronnym
            rozwoju motorycznym. Kształtujemy koordynację, równowagę, szybkość
            reakcji, siłę, mobilność oraz ogólną sprawność fizyczną. Zajęcia
            mają dynamiczny, angażujący charakter i są dostosowane do wieku oraz
            możliwości uczestników.
          </p>
          <div className="w-full my-6 relative h-[400px] sm:h-[600px]">
            <Image
              src="/child.jpg"
              alt="longsword"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p>
            Obok rozwoju fizycznego równie ważny jest dla nas aspekt
            wychowawczy. Uczymy koncentracji, samodyscypliny, pracy w grupie
            oraz szacunku wobec partnera treningowego. Poprzez elementy
            szermierki i ćwiczenia ogólnorozwojowe budujemy pewność siebie,
            odporność psychiczną oraz zdrowe podejście do wyzwań.
          </p>
          <p className="mt-6">
            Sekcja dzieci w Gdańskiej Szkole Fechtunku to nie tylko zajęcia
            sportowe – to fundament przyszłej sprawności, charakteru i
            świadomego stylu życia.
          </p>
          <div className="clear-both" />
        </article>
      </div>
    </div>
  );
}
