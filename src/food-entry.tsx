import React, { useState } from "react";
import FoodListCard from "./food-list-card";
import FoodEntryForm from "./food-entry-form";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";

export interface foodEntryInterface {
  datentime: Dayjs;
  calorie: any;
  name: string;
}

export interface foodEntryPropsInterface {
  setTotalCalorie: React.Dispatch<React.SetStateAction<Map<string, number>>>;
}

const FoodEntry = ({ setTotalCalorie }: foodEntryPropsInterface) => {
  const [foodList, setFoodList] = useState<foodEntryInterface[]>([]);
  return (
    <Box>
      {foodList.length > 0 && <FoodListCard foodList={foodList} />}
      <FoodEntryForm
        setFoodList={setFoodList}
        setTotalCalorie={setTotalCalorie}
      />
    </Box>
  );
};

export default FoodEntry;
