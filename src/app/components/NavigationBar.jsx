"use client";
import { usePathname } from "next/navigation";
import { NavigationItem } from "./NavigationItems";

export function NavigationBar() {
  const pathname = usePathname();

  const navigationItems = [
    { label: "🌌", href: "/" },
    { label: "ABT", href: "/about" },
    { label: "PRJ", href: "/projects" },
    { label: "EXP", href: "/experience" },
    { label: "RES", href: "/resume" },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 font-heading sm:px-16 sm:text-p md:text-h6 text-text bg-secondary w-full cursor-pointer">
      <div className="flex overflow-hidden flex-wrap gap-2 justify-center items-center py-2 sm:px-8 px-5 max-w-full bg-secondary">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.href}
            text={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
}
