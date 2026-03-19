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
              Miecz Długi
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-900 font-trajan">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p className="mb-4">
            Długi miecz to nie tylko broń – to fundament europejskiej sztuki
            walki, symbol rycerskiego etosu, dyscypliny oraz odpowiedzialności.
            W tradycji średniowiecznej był narzędziem pojedynku, wojny i
            osobistej obrony, ale także znakiem honoru i sprawiedliwości. Jego
            znaczenie przetrwało wieki, stając się częścią kulturowego
            dziedzictwa Europy.
          </p>
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
              <p className="mb-4">
                W Gdańskiej Szkole Fechtunku sekcja długiego miecza stanowi
                centralny filar szkolenia. Naszą pracę opieramy przede wszystkim
                na źródłach historycznych związanych z Gdańskiem – w
                szczególności na <b>Kodeksie Gdańskim (Peter von Danzig)</b>,
                będącym jednym z najważniejszych przekazów tradycji niemieckiej
                szkoły szermierczej.
              </p>

              <p className="mb-4">
                Trening łączy precyzję techniczną z taktycznym myśleniem.
                Historyczne techniki adaptujemy do współczesnych realiów
                turniejów sportowych, zachowując ich źródłową logikę i
                integralność.
              </p>
              <p className="mb-4">
                Naszym celem jest nie tylko nauka walki, lecz kształtowanie
                postawy – zdyscyplinowanej, świadomej i odpowiedzialnej. Sekcja
                długiego miecza to przestrzeń, w której tradycja Gdańska spotyka
                się z nowoczesnym treningiem, a historia staje się żywą
                praktyką.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
