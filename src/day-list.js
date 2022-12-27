import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Day from "./day";

const DayList = (props) => {
  const { daysCrossingLimit, totalCalorie } = props;
  return (
    <Card sx={{ minWidth: 10, maxHeight: 300, overflow: 'auto', margin: '5%' }}>
      <CardContent>
        {daysCrossingLimit.map((day, index) => (
          <Day calorie={totalCalorie[day]} day={day} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default DayList;
