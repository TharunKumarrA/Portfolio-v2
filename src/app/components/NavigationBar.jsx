import { NavigationItem } from "./NavigationItems";

export function NavigationBar() {
  const navigationItems = ["[ABT]", "[PRJ]", "[EXP]", "[RES]"];

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-16 sm:text-p md:text-h6 text-text bg-secondary w-full">
      <div className="flex overflow-hidden flex-wrap gap-4 justify-center items-center py-2 sm:px-8 px-5 max-w-full bg-secondary">
        <div className="flex overflow-hidden flex-col flex-1 items-center sm:items-start px-3 sm:px-6 py-3">
          <div className="text-center sm:text-left">[ . ]</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f9712ec19587086cb21502b1fd67852b3328667e8c7ddf307367ade75a5b4d?placeholderIfAbsent=true&apiKey=7650c9037a2f417bace3ae415aabf117"
            alt=""
            className="object-contain z-10 -mt-[16px] md:-mt-[22px] md:ml-[7px] aspect-square w-3 sm:w-4"
          />
        </div>
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
}
