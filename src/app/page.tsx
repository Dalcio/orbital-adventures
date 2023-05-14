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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <div>
        <h1 className="text-[150px]">Earth</h1>
        <h2 className="text-5xl">Orbital adventures Page</h2>
      </div>
    </main>
  );
}
