"use client";
import Image from "next/image";
import { DestinationHeader } from "./header";
import { useParams, notFound } from "next/navigation";
import { getDetDestinationByName } from "./destinations.util";

export const Destination = () => {
  const { destiny } = useParams() as { destiny: string };
  const destination = getDetDestinationByName(destiny);

  if (!destination) {
    notFound();
  }

  const { description, distance, images, name, travel } = destination;

  return (
    <div className="flex-grow flex flex-col md:flex-row items-center justify-between gap-[30px]">
      <div className="relative w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] md:w-[445px] md:h-[445px]">
        <Image src={images.png} alt={name} fill />
      </div>
      <div className="max-w-[504px]">
        <DestinationHeader current={destiny} />
        <h1 className="text-4xl font-bold text-white text-center md:text-justify">{name}</h1>
        <p className="text-[1.425rem] text-center md:text-justify">{description}</p>
        <hr className="opacity-10 mt-[54px] mb-[28px]" />
        <div className="flex gap-x-[68px]">
          <div className="uppercase">
            <p className="text-base md:text-md">AVG. Distance</p>
            <p className="text-[28px] md:text-2xl">{distance}</p>
          </div>
          <div className="uppercase">
            <p className="text-base md:text-md">Est. travel time</p>
            <p className="text-[28px] md:text-2xl">{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
