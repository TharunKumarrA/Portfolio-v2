"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const RouteImage = () => {
  const pathname = usePathname();

  const validRoutes = ["/", "/about", "/projects", "/experience", "/resume"]; 

  const getImageName = () => {
    if (!validRoutes.includes(pathname)) {
      return "not-found.png";
    }

    // Handle the home route special case
    return pathname === "/" ? "home.png" : `${pathname.slice(1)}.png`;
  };

  const imageName = getImageName();
  console.log(imageName);

  return (
    <div className="absolute scale-75 lg:scale-100 top-6 right-4 lg:top-4 lg:right-4 z-30">
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
