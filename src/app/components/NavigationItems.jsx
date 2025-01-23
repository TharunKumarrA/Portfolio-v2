import Link from "next/link";

export const NavigationItem = ({ text, href, isActive }) => {
  return (
    <Link
      href={href}
      className={`
        overflow-hidden flex-1 shrink self-stretch px-3 py-2 my-auto text-center sm:text-left 
        cursor-pointer transition duration-300 ease-in-out
        group
      `}
    >
      <span
        className={`
          ${isActive ? "text-primary" : "text-text"}
          group-hover:text-primary
        `}
      >
        [
      </span>
      {text}
      <span
        className={`
          ${isActive ? "text-primary" : "text-text"}
          group-hover:text-primary
        `}
      >
        ]
      </span>
    </Link>
  );
};
