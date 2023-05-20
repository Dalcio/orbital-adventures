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
      </head>
      <body
        className={`${bellefair.className} pl-[55px] pt-[48px] flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <LayoutHeader />
        <div className="max-w-[1440px] w-[100%] self-center my-auto">{children}</div>
      </body>
    </html>
  );
}
