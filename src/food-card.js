import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Food from "./Food";

const FoodCard = (props) => {
  const foods = props.foods;
  return (
    <Card sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin: "5%" }}>
      <CardContent>
        {foods.map((food, index) => (
          <Food data={food} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default FoodCard;
