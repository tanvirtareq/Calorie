import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Food from "./food";
import { foodEntryInterface } from "./food-entry";

export interface foodListCardPropsInterface{
  foodList: foodEntryInterface[]
}

const FoodListCard = ({ foodList }:foodListCardPropsInterface) => {
  return (
    <Card sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin: "5%" }}>
      <CardContent>
        {foodList.map((food, index) => (
          <Food data={food} key={index}/>
        ))}
      </CardContent>
    </Card>
  );
};

export default FoodListCard;
