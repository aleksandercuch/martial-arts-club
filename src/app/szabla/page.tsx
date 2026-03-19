"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28">
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
              Szabla Bojowa
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-900 font-trajan">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p className="mb-4">
            Szabla stanowi symbol odwagi, wolności i fantazji - od sarmackich
            pojedynków, po szarże ułańskie, których wspomnienie budzi podziw po
            dziś dzień. Narzędzie walki, które łączy w sobie finezję, szybkość i
            elegancję… oraz ten niepowtarzalny polski charakter.
          </p>
          <div className="flex flex-col md:flex-row md:gap-8 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
              <Image
                src="/szabla1.webp"
                alt="Trening szermierki w Gdańsku"
                width={400}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>

            <div className="w-full md:w-2/3 ">
              <p className="mb-4">
                Szabla uczy zdecydowania - wymaga jasnej intencji i kontroli
                zarówno nad bronią, jak i nad sobą samym. To trening, który
                łączy historię, technikę i charakter - próba zrozumienia, jak
                naprawdę walczono zakrzywionym ostrzem, które przez stulecia
                budziło respekt na polach bitew w całej Europie.
              </p>
              <p className="mb-4">
                Podczas treningów w Gdańskiej Szkole Fechtunku sięgamy do źródeł
                od XVI do początku XX wieku, analizując dawne opisy technik i
                konfrontując je z realiami dzisiejszych turniejów sportowych.
                Korzystamy z bezpiecznych replik historycznych odmian szabli, co
                pozwala odczuć ich wagę, wyważenie i specyfikę prowadzenia
                cięcia.
              </p>
              <p className="mb-4">
                Co istotne, historyczna walka szablą nie ograniczała się do
                „czystych” wymian ciosów. Obejmowała przechwycenia, pracę na
                wiązaniu broni, uderzenia rękojeścią, a nawet techniki
                obalające. Była systemem kompletnym – nastawionym na skuteczność
                w realnym starciu, a nie na widowiskowość.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
