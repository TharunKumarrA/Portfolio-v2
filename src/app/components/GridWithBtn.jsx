import React from "react";
import Grid from "./Grid";
import DownArrowBox from "./ArrowButton";

const GridWithDownArrow = () => {
  return (
    <div>
      <Grid />
      <div className="relative flex flex-wrap gap-0 -top-24 lg:-top-24 -left-12 lg:-left-24">
        <div className="ml-[48px] lg:ml-[96px]">
          <DownArrowBox />
        </div>
      </div>
    </div>
  );
};

export default GridWithDownArrow;
