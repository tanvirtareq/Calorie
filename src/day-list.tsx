import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Day from "./day";

export interface dayListPropsInterface{
    daysCrossingLimit:Map<string, number>
}

const DayList=({daysCrossingLimit}:dayListPropsInterface)=>{
    return (
        <Card sx={{ minWidth: 10, maxHeight: 300, overflow: 'auto', margin: '5%' }}>
      <CardContent>
        {[...daysCrossingLimit].map(([day, calorie]) => (
          <Day calorie={calorie} day={day} key={day}/>
        ))}
      </CardContent>
    </Card>
    );
}

export default DayList;