import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Food from "./Food";

const FoodCard = (props: any) => {
  const foods = props.foods;
  return (
    <Card sx={{ minWidth: 10, maxHeight: 300, overflow: 'auto', margin: '5%' }}>
      <CardContent>
        {foods.map((food: any, index: Number) => (
          <Food data={food} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default FoodCard;
