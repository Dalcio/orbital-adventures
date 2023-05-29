import Image, { StaticImageData } from "next/image";

type BackgroundProps = {
  bgDesktop: string | StaticImageData;
  bgTablet: string | StaticImageData;
  bgMobile: string | StaticImageData;
};

export const Background = ({
  bgDesktop,
  bgMobile,
  bgTablet,
}: BackgroundProps) => (
  <>
    <picture className="fixed inset-0 -z-10 hidden md:block">
      <Image
        src={bgDesktop}
        fill
        alt="Earth desktop background"
        style={{ objectFit: "cover" }}
      />
    </picture>
    <picture className="fixed inset-0 -z-10 hidden sm:block md:hidden">
      <Image
        src={bgTablet}
        fill
        alt="Earth tablet background"
        style={{ objectFit: "cover" }}
      />
    </picture>
    <picture className="fixed inset-0 -z-10 block sm:hidden">
      <Image
        src={bgMobile}
        fill
        alt="Earth mobile background"
        style={{ objectFit: "cover" }}
      />
    </picture>
  </>
);
