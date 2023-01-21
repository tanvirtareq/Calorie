import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import DayList from "./day-list";

export interface daysListCardPropsInterface {
  daysCrossingLimit: Map<string, number>;
}

const DaysListCard = ({ daysCrossingLimit }: daysListCardPropsInterface) => {
  return (
    <Box sx={{ margin: "3%", minWidth: 300 }}>
      <Typography sx={{ align: "centre" }}>
        Days list that cross calorie limit.
      </Typography>
      <DayList daysCrossingLimit={daysCrossingLimit} />
    </Box>
  );
};

export default DaysListCard;
