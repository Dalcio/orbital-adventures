import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <Head>
        <title>Page not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">Page not Found</div>
        <Link href="/" className="text-xl underline text-blue-500">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
