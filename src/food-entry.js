import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import DayList from "./day-list";
import FoodCard from "./food-card";
import FoodForm from "./food-form";
import Box from "@mui/material/Box";

const FoodEntry = () => {
  const [foodList, setFoodList] = useState([]);

  let calorieLimitPerDay = 2.1;

  const [totalCalorie, setTotalCalorie] = useState({});

  const [daysCrossingLimit, setDaysCrossingLimit] = useState([]);

  return (
    <Box sx={{ margin: "auto", display: "flex", padding: "5%" }}>
      <Box>
        <FoodCard foods={foodList} />
        <FoodForm
          totalCalorie={totalCalorie}
          setTotalCalorie={setTotalCalorie}
          calorieLimitPerDay={calorieLimitPerDay}
          setDaysCrossingLimit={setDaysCrossingLimit}
          setFoodList={setFoodList}
        />
      </Box>
      <Box>
        <Typography>Days list that cross calorie limit.</Typography>
        <DayList
          daysCrossingLimit={daysCrossingLimit}
          totalCalorie={totalCalorie}
        />
      </Box>
    </Box>
  );
};

export default FoodEntry;
