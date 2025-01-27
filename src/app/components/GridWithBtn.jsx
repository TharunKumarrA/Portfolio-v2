import React from "react";
import Grid from "./Grid";
import DownArrowBox from "./ArrowButton";
const GridWithDownArrow = () => {
  return (
    <div className="relative">
      {/* Put only the Grid in the background */}
      <div className="absolute inset-0 -z-10">
        <Grid />
      </div>
      {/* Arrow button container without negative z-index */}
      <div className="relative flex flex-wrap gap-0 top-72 lg:top-[480px] -left-12 lg:-left-24">
        <div className="ml-[48px] lg:ml-[96px]">
          <DownArrowBox />
        </div>
      </div>
    </div>
  );
};
export default GridWithDownArrow;