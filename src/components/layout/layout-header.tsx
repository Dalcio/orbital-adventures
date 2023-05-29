"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemProps = {
  label: string;
  href: string;
  isActive: boolean;
  pos: number;
};

const Item = ({ label, href, isActive, pos }: ItemProps) => (
  <Link href={href}>
    <div
      className={`flex items-center py-[38px] z-10 border-b-[3px] border-transparent ${
        isActive
          ? "border-solid border-[white!important]"
          : " cursor-pointer w-min hover:border-solid hover:border-opacity-50 hover:border-white"
      } uppercase `}
    >
      <div className="tracking-[2.7] text-base pr-[11px] font-bold">0{pos}</div>
      <div className="tracking-[2.7] text-base">{label}</div>
    </div>
  </Link>
);

export const LayoutHeader = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    (href !== "/" && pathname?.startsWith(href)) || pathname === href;

  return (
    <header className="sticky top-[48px] z-10 flex items-center justify-between">
      <Image src="/logo.svg" width={48} height={48} alt="Star Logo" />
      <div className="flex flex-grow h-[1px] bg-white bg-opacity-[25.14%] relative right-[-54px]" />
      <ul className="relative flex list-none gap-x-[48px] px-[168px]">
        <div className="absolute inset-0 bg-white bg-opacity-[0.04] blur-[1] -z-[1]" />
        <Item label="Home" href="/" isActive={isActive("/")} pos={0} />
        <Item
          label="Destination"
          href="/destinations/moon"
          isActive={isActive("/destinations")}
          pos={1}
        />
      </ul>
    </header>
  );
};
