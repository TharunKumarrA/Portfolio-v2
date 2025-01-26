import Volunteer from "./svg/Volunteer";
import TeamWork from "./svg/TeamWork";
import EventManagement from "./svg/EventManagement";
import AttIcon from "./AttributesIcon";

const NSSAttributes = () => {
  return(
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Volunteer" svgSrc={<Volunteer />} notAbout={true} />
      <AttIcon name="Team Work" svgSrc={<TeamWork />} notAbout={true} />
      <AttIcon name="Event Management" svgSrc={<EventManagement />} notAbout={true} />
    </div>
  );
};

export default NSSAttributes;