import TeamWork from "./svg/TeamWork";
import Development from "./svg/Development";
import AttIcon from "./AttributesIcon";
import EventManagement from "./svg/EventManagement";

export default function IETEAttributes() {
  return (
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Team Work" svgSrc={<TeamWork />} notAbout={true} />
      <AttIcon name="Development" svgSrc={<Development />} notAbout={true} />
      <AttIcon name="Event" svgSrc={<EventManagement />} notAbout={true} />
    </div>
  );
}