import Link from "next/link";

type ItemProps = {
  label: "moon" | "mars" | "europa" | "titan";
  current: string;
};

const DestinationItem = ({ label, current }: ItemProps) => (
  <Link href={`/destinations/${label}`}>
    <div
      className={`flex items-center py-[12px] z-10 ${
        label === current
          ? "border-b-[3px] border-solid border-white"
          : " cursor-pointer w-min hover:border-b-[3px] hover:border-solid hover:border-opacity-50 hover:border-white"
      } uppercase text-nav`}
    >
      {label}
    </div>
  </Link>
);

type DestinationHeaderProps = {
  current: string;
};

export const DestinationHeader = ({ current }: DestinationHeaderProps) => (
  <div className="flex justify-center md:justify-start gap-x-[38px]">
    <DestinationItem label="moon" current={current.toLowerCase()} />
    <DestinationItem label="mars" current={current.toLowerCase()} />
    <DestinationItem label="europa" current={current.toLowerCase()} />
    <DestinationItem label="titan" current={current.toLowerCase()} />
  </div>
);
