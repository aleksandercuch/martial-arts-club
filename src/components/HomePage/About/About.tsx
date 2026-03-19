"use client";
import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:py-24">
      {/* Tekst */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4">
          Chcesz przyjść na pierwszy trening?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl pb-6 sm:pb-8">
          Wystarczy strój sportowy i chęć do nauki. Resztę dostarczamy.
        </p>
        <p className="text-base sm:text-lg md:text-lg pb-4">
          Treningi w <b>Gdańskiej Szkole Fechtunku</b> są przeznaczone dla
          każdego, niezależnie od doświadczenia, kondycji czy płci. Dopracowane
          ciągi metodyczne pozwalają dołączyć w dowolnym momencie bez poczucia
          zaległości. Niski próg wejścia – strój sportowy i butelka wody –
          sprawia, że możesz przyjść już na najbliższy trening.
        </p>
        <p className="text-base sm:text-lg">
          <b>Cały sprzęt zapewniamy na miejscu</b>: profesjonalne maski
          szermiercze i bezpieczne, piankowe symulatory broni czekają, aż
          wybierzesz swój oręż i rozpoczniesz trening.
        </p>
      </div>

      {/* Logo */}
      <div className="flex-shrink-0 hidden md:flex">
        <Image
          className="w-48 sm:w-64 md:w-80 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo_white.png"
          alt="Trening szermierki w Gdańsku"
          width={350}
          height={40}
          priority
        />
      </div>
    </div>
  );
};
