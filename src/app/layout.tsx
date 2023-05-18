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
      </head>
      <body className={bellefair.className}>
        <LayoutHeader />
        {children}
      </body>
    </html>
  );
}
