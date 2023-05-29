import { LayoutHeader } from "@/components/layout/layout-header";
import "./globals.css";
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Orbital Adventures" />        
        <meta name="author" content="Dálcio Macuete Garcia" />
      </head>
      <body
        className={`${bellefair.className} flex flex-col px-[26px] md:px-[55px] h-[100vh] pt-[48px]`}
        suppressHydrationWarning={true}
      >
        <LayoutHeader />
        <main className="max-w-[1440px] w-[100%] self-center flex-grow flex items-center justify-stretch">
          {children}
        </main>
      </body>
    </html>
  );
}
