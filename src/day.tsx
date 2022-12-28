import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Day = (props: any) => {
  const { day, calorie } = props;
  return (
    <Card sx={{ minWidth: 100, maxHeight: 300, overflow: 'auto' }}>
      <CardContent>
        <Typography>Date: {day}</Typography>
        <Typography>
          Total Calorie: {Math.round(calorie * 100) / 100}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Day;
