import TeamWork from "./svg/TeamWork";
import Website from "./svg/Website";
import Development from "./svg/Development";
import AttIcon from "./AttributesIcon";

export default function AmritotsavamAttributes() {
  return (
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Team Work" svgSrc={<TeamWork />} notAbout={true} />
      <AttIcon name="Development" svgSrc={<Development />} notAbout={true} />
      <AttIcon name="Website" svgSrc={<Website />} notAbout={true} />
    </div>
  );
}
