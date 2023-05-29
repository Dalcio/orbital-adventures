import Head from "next/head";
import { Destination } from "./destination";
import { Background } from "@/components/layout/background";

const metadata = {
  title: "Destination",
  description:
    "Experience the thrill of space tourism with Orbital Adventures - your trusted partner for safe, comfortable, and unforgettable space travel experiences. Embark on a journey of a lifetime and witness breathtaking views of our planet from the edge of space.",
  keywords:
    "Space tourism, Orbital Adventures, Space travel, Edge of space, Astronauts, Launch, Landing, Spacecraft, Space exploration, Breathtaking views, Unforgettable experience, State-of-the-art technology, Safety, Comfort, Adventure, Exploration, Spaceflight, Pre-flight training, Mission, Accessibility",
};

export default function Destinations() {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="og:description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <Background
        bgDesktop="/assets/destination/background-destination-desktop.jpg"
        bgTablet="/assets/destination/background-destination-tablet.jpg"
        bgMobile="/assets/destination/background-destination-mobile.jpg"
      />
      <div className="flex-grow flex flex-col justify-stretch gap-[30px] py-[30px]">
        <p className="text-center md:text-justify uppercase text-xl text-white font-bold tracking-[3px] ">
          <span className="mix-blend-normal opacity-40">01</span>
          PICK a location
        </p>
        <Destination />
      </div>
    </>
  );
}
