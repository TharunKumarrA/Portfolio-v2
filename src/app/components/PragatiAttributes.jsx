import TeamWork from "./svg/TeamWork";
import Development from "./svg/Development";
import Website from "./svg/Website";
import AttIcon from "./AttributesIcon";

export default function PragatiAttributes() {
  return (
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Leadership" svgSrc={<TeamWork />} notAbout={true} />
      <AttIcon name="Development" svgSrc={<Development />} notAbout={true} />
      <AttIcon name="Website" svgSrc={<Website />} notAbout={true} />
    </div>
  );
}
