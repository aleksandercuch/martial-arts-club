"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 ">
      {/* Hero section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/background-about.png"
          alt="Background"
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
              O nas
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

          <p>
            Fundacja Klub Sportowy Gdańska Szkoła Fechtunku im. Piotra z Gdańska
            powstała z potrzeby ożywienia zapomnianej części gdańskiego
            dziedzictwa — tradycji dawnych szkół fechtunku, które w
            średniowieczu stanowiły ważny element kultury mieszczańskiej i
            rycerskiej miasta. Naszą misją jest łączenie historii, sportu i
            edukacji: przywracamy do życia naukę średniowiecznej i nowożytnej
            sztuki walki mieczem, szablą i innymi rodzajami broni białej,
            opierając się na źródłach historycznych i traktatach dawnych
            mistrzów.
          </p>

          <p className="mt-6">
            Patronem naszej fundacji jest Piotr z Gdańska (Peter von Danzig) –
            XV-wieczny mistrz fechtunku, autor jednego z najważniejszych
            traktatów szermierczych w Europie. W jego pismach po raz pierwszy
            pojawia się idea, że szermierka nie jest wyłącznie techniką walki,
            lecz sztuką rozumu, dyscypliny i honoru. To właśnie tę filozofię
            przenosimy w XXI wiek.
          </p>

          {/* Clear float before next image */}
          <div className="clear-both my-12" />

          {/* Image left */}
          <div className="relative float-left mr-8 mb-6 w-full sm:w-1/2 lg:w-1/3">
            <Image
              src="/logo_white.png"
              alt="Logo Gdańskiej Szkoły Fechtunku"
              width={500}
              height={600}
              priority
            />
          </div>

          <p>
            Logo Gdańskiej Szkoły Fechtunku im. Piotra z Gdańska to nie tylko
            znak rozpoznawczy – to wyraz naszej tożsamości, szacunku dla
            tradycji oraz idei, które przyświecają naszej działalności.
            Symboliczne zbrojne ramię dzierżące miecz, inspirowane banderą
            królewską Rzeczypospolitej Obojga Narodów, niesie ze sobą przekaz
            siły, odwagi i gotowości do obrony wartości.
          </p>

          <p className="mt-6">
            Nasze działania wpisują się w międzynarodowy ruch HEMA (Historical
            European Martial Arts) – współczesną społeczność naukowców,
            rekonstruktorów i sportowców z całego świata, którzy poprzez badania
            dawnych traktatów szermierczych odtwarzają europejskie sztuki walki
            sprzed epoki broni palnej. Od 2025 roku jesteśmy członkiem
            wspierającym Polskiego Związku Szermierki Historycznej -
            ogólnopolskiej organizacji zrzeszających kluby i trenerów w całej
            Polsce.
          </p>

          <p className="mt-6">
            Fundacja rozwija działalność edukacyjną i sportową – prowadzimy
            treningi dla dorosłych i dzieci, organizujemy wykłady, prelekcje i
            pokazy historyczne, współpracujemy z instytucjami kultury oraz
            środowiskiem rekonstrukcyjnym.
          </p>

          <p className="mt-6">
            Dążymy do tego, by Gdańska Szkoła Fechtunku stała się nowoczesnym
            centrum kultury historycznej i sportowej, w którym duch dawnych
            mistrzów spotyka się z pasją współczesnych mieszkańców.
          </p>

          {/* Clear floats at end */}
          <div className="clear-both" />
        </article>
      </div>
    </div>
  );
}
