"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemProps = {
  label: string;
  href: string;
  isActive: (href: string) => boolean;
  pos: number;
};

const Item = ({ label, href, isActive, pos }: ItemProps) => (
  <Link href={href}>
    <div
      className={`flex items-center py-[38px] ${
        isActive(href)
          ? "border-b-[3px] border-solid border-white"
          : " cursor-pointer w-min hover:border-b-[3px] hover:border-solid hover:border-opacity-50 hover:border-white"
      } uppercase text-nav`}
    >
      <div className="tracking-[2.7] text-nav pr-[11px] font-bold">0{pos}</div>
      <div className="tracking-[2.7] text-nav ">{label}</div>
    </div>
  </Link>
);

export const LayoutHeader = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.startsWith(href) ?? false;

  return (
    <div className="flex items-center justify-between sticky top-0">
      <Image src="/logo.svg" width={48} height={48} alt="Star Logo" />
      <ul className="flex list-none gap-x-[48px] px-[168px] bg-white bg-opacity-5">
        <Item label="Home" href="/" isActive={isActive} pos={0} />
        <Item
          label="Destination"
          href="/destination"
          isActive={isActive}
          pos={1}
        />
        <Item label="Crew" href="/crew" isActive={isActive} pos={2} />
        <Item
          label="Technology"
          href="/technology"
          isActive={isActive}
          pos={3}
        />
      </ul>
    </div>
  );
};
