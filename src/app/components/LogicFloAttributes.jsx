import Development from "./svg/Development";
import AI from "./svg/AI";
import Work from "./svg/Work";
import AttIcon from "./AttributesIcon";

export default function LogicFloAttributes() {
  return (
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Work" svgSrc={<Work />} notAbout={true} />
      <AttIcon name="Development" svgSrc={<Development />} notAbout={true} />
      <AttIcon name="AI Agents" svgSrc={<AI />} notAbout={true} />
    </div>
  );
}