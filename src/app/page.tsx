import Head from "next/head";

const metadata = {
  title: "Orbital Adventures",
  description:
    "Experience the thrill of space tourism with Orbital Adventures - your trusted partner for safe, comfortable, and unforgettable space travel experiences. Embark on a journey of a lifetime and witness breathtaking views of our planet from the edge of space.",
  keywords:
    "Space tourism, Orbital Adventures, Space travel, Edge of space, Astronauts, Launch, Landing, Spacecraft, Space exploration, Breathtaking views, Unforgettable experience, State-of-the-art technology, Safety, Comfort, Adventure, Exploration, Spaceflight, Pre-flight training, Mission, Accessibility",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="og:description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <main className="flex items-center justify-between p-24">
        <div className="max-w-[445px]">
          <h5 className="text-xl tracking-[4.76]">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="text-5xl">SPACE</h1>
          <div className="text-[1.125rem]">
            Let&rsquo;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&rsquo;ll give you a truly out of
            this world experience!
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-50 transition duration-[500ms] p-[40px] cursor-pointer">
            <div className="flex items-center justify-center w-[234px] h-[234px] rounded-full bg-white text-[#0B0D17] text-[32px]">
              EXPLORE
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
