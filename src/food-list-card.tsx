import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Food from "./food";

const FoodListCard = ({foodList}) => {
  return (
    <Card
        sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin: "5%" }}
      >
        <CardContent>
          {foodList.map((food) => (
            <Food data={food} />
          ))}
        </CardContent>
      </Card>
  );
};

export default FoodListCard;
