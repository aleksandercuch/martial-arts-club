"use client";
import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
  description: string;
}

export const ImageCard = ({ imgSrc, title, description }: Props) => {
  return (
    <div className="flex-1 relative h-80 ">
      <Image
        className="relative h-full w-full object-cover"
        src={imgSrc}
        alt="Trening szermierki w Gdańsku"
        fill={true}
        priority
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute bottom-0 p-2 bg-gray-500 bg-opacity-75 w-full text-white">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
