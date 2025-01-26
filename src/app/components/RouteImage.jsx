"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export const RouteImage = () => {
  const pathname = usePathname();

  // Handle the home route special case
  const imageName =
    pathname === "/"
      ? "home.png"
      : `${pathname.slice(1)}.png`;

  console.log(imageName);
  return (
    <div className="absolute top-4 right-4 z-30">
      <Image
        src={`/${imageName}`}
        alt="Route specific image"
        width={128}
        height={128}
        className="object-contain"
      />
    </div>
  );
};
