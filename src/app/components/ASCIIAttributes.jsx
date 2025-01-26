import TeamWork from "./svg/TeamWork";
import Editor from "./svg/Editor";
import DataCollection from "./svg/DataCollection";

import AttIcon from "./AttributesIcon";

const ASCIIAttributes = () => {
  return (
    <div className="flex flex-row gap-2 lg:gap-8">
      <AttIcon name="Team Work" svgSrc={<TeamWork />} notAbout={true} />
      <AttIcon name="Editor" svgSrc={<Editor />} notAbout={true} />
      <AttIcon
        name="Data Collection"
        svgSrc={<DataCollection />}
        notAbout={true}
      />
    </div>
  );
};

export default ASCIIAttributes;
