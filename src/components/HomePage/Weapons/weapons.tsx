"use client";
import { useState } from "react";
import Image from "next/image";

const WeaponCard = ({
  title,
  description,
  extendedDescription,
  image,
}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-neutral-900
        transition-all
        duration-500
        md:hover:-translate-y-2
      "
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image}
          alt="Trening szermierki w Gdańsku"
          fill
          className="
            object-cover
            transition-all
            duration-700
            ease-out
            md:group-hover:scale-110
            md:group-hover:grayscale
            md:group-hover:brightness-75
          "
        />

        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div
        className="
          p-6
          md:absolute md:bottom-0 md:left-0 md:w-full
          md:transition-transform md:duration-500
          md:group-hover:-translate-y-16
        "
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white/80">
          {title}
        </h2>

        <p className="text-white/80 text-sm md:text-base max-w-sm">
          {description}
        </p>

        <p
          className={`
            mt-3
            text-white/70
            transition-all duration-500
            ${isExpanded ? "opacity-100 max-h-96 overflow-visible" : "opacity-0 max-h-0 overflow-hidden"}
            md:opacity-0 md:max-h-0 md:overflow-hidden
            md:group-hover:opacity-100 md:group-hover:max-h-56
            text-sm md:text-base
          `}
        >
          {extendedDescription}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-blue-400 md:hidden"
        >
          {isExpanded ? "Zwiń" : "Rozwiń"}
        </button>
      </div>
    </div>
  );
};

export default WeaponCard;

export const Weapons = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const weapons = [
    {
      title: "Miecz długi",
      image: "/sword.jpg",
      description:
        "Historyczna broń dwuręczna, oferująca ogromną różnorodność technik ofensywnych i defensywnych.",
      extendedDescription:
        "W średniowiecznej Europie używany zarówno na polu bitwy, jak i w pojedynkach oraz szkoleniu szermierczym. Konstrukcja pozwala na płynne przechodzenie między atakiem a obroną, wykorzystując techniki takie jak wiązanie ostrzy, kontrataki czy przechwycenia broni przeciwnika. Dzięki temu miecz się jedną z najbardziej wszechstronnych broni w europejskiej tradycji.",
    },
    {
      title: "Szabla bojowa",
      image: "/szabla1.webp",
      description:
        "Narzędzie walki łączące w sobie finezję, szybkość i elegancję... Oraz ten niepowtarzalny polski charakter.",
      extendedDescription:
        "Szczególnie związana z tradycją kawalerii i kulturą szlachecką dawnej Rzeczpospolitej Obojga Narodów. Jej technika walki opiera się na szybkości, pracy nadgarstka oraz precyzyjnym łączeniu ataku z unikami i kontrą. Dzięki temu szabla stała się symbolem zarówno skuteczności w walce, jak i charakterystycznego stylu polskiej sztuki szermierczej.",
    },
    {
      title: "Szermierka dla dzieci",
      image: "/child.jpg",
      description:
        "Bezpieczne treningi uczące koncentracji, zasad fair play i rywalizacji w przyjaznej atmosferze.",
      extendedDescription:
        "Zajęcia wprowadzają młodych adeptów szermierki w podstawowe postawy, poruszanie się po planszy oraz proste techniki ataku i uniku. Dzieci rozwijają refleks, koordynację i pewność siebie, ucząc się przy tym zasad strategicznego myślenia i współpracy w grupie, w bezpiecznym środowisku przygotowanym przez doświadczonych instruktorów.",
    },
  ];

  return (
    <section className="w-full py-6 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 3 kolumny, Mobile: 1 kolumna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
          {weapons.map((w, i) => (
            <WeaponCard
              key={i}
              title={w.title}
              image={w.image}
              description={w.description}
              extendedDescription={w.extendedDescription}
              isMobileExpanded={expandedIndex === i}
              toggleMobile={() =>
                setExpandedIndex(expandedIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
