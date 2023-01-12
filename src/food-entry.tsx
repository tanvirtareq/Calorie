import React, { useState } from "react";
import FoodListCard from "./food-list-card";
import FoodEntryForm from "./food-entry-form";
import { Box } from "@mui/material";

export interface foodEntryInterface{
  datentime:any,
  calorie: any,
  name:string
}

const FoodEntry = () => {
  
  const [foodList, setFoodList] = useState<foodEntryInterface[]>([]);

  return (
    <Box style={{ margin: "auto", display: "table", padding: "5%" }}>
      {foodList.length>0 && <FoodListCard foodList={foodList}/>}
      <FoodEntryForm foodList={foodList} setFoodList={setFoodList}/>
    </Box>
  );
};

export default FoodEntry;
