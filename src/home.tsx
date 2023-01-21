import React, { useState, useEffect } from "react";
import FoodEntry from "./food-entry";
import Box from "@mui/material/Box";
import DaysListCard from "./days-list-card";

const Home = () => {
  let calorieLimitPerDay = 2.1;

  const [totalCalorie, setTotalCalorie] = useState(new Map<string, number>());
  const [daysCrossingLimit, setDaysCrossingLimit] = useState(
    new Map<string, number>()
  );

  useEffect(() => {
    if (totalCalorie) {
      setDaysCrossingLimit(
        new Map<string, number>(
          [...totalCalorie].filter((it) => it[1] > calorieLimitPerDay)
        )
      );
    }
  }, [totalCalorie, calorieLimitPerDay]);

  return (
    <Box sx={{ display: "flex", padding: "5%" }}>
      <FoodEntry setTotalCalorie={setTotalCalorie} />
      <DaysListCard daysCrossingLimit={daysCrossingLimit} />
    </Box>
  );
};

export default Home;
