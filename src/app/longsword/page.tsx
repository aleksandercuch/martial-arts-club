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
              Miecz Długi
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-900">
        <article className="bg-black/50 text-white max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg font-lato tracking-widest">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="w-full my-6 relative h-[400px] sm:h-[600px]">
            <Image
              src="/desktop-carousel-2.png"
              alt="longsword"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining e
          </p>
          <div className="clear-both" />
        </article>
      </div>
    </div>
  );
}
