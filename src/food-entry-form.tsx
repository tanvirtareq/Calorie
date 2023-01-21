import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { foodEntryInterface } from "./food-entry";
import { Box } from "@mui/material";

export interface foodEntryFormParameterInterface {
  setFoodList: React.Dispatch<React.SetStateAction<foodEntryInterface[]>>;
  setTotalCalorie: React.Dispatch<React.SetStateAction<Map<string, number>>>;
}

const FoodEntryForm = ({
  setFoodList,
  setTotalCalorie,
}: foodEntryFormParameterInterface) => {
  const [newFoodEntry, setNewFoodEntry] = useState<foodEntryInterface>({
    datentime: dayjs(),
    calorie: "",
    name: "",
  });
  const isFoodValid = (food) => {
    return (
      newFoodEntry.name &&
      newFoodEntry.calorie &&
      newFoodEntry.datentime.isValid()
    );
  };
  const handleSubmit = (e) => {
    newFoodEntry.calorie = parseFloat(newFoodEntry.calorie);
    if (isFoodValid(newFoodEntry)) {
      setFoodList((prevFoodList) => [...prevFoodList, newFoodEntry]);
      setTotalCalorie((prevTotalCalorie) => {
        if (prevTotalCalorie.has(newFoodEntry.datentime.format("YYYY-MM-DD"))) {
          return new Map<string, number>([
            ...prevTotalCalorie,
            [
              newFoodEntry.datentime.format("YYYY-MM-DD"),
              prevTotalCalorie.get(
                newFoodEntry.datentime.format("YYYY-MM-DD")
              ) + newFoodEntry.calorie,
            ],
          ]);
        } else {
          return new Map<string, number>([
            ...prevTotalCalorie,
            [newFoodEntry.datentime.format("YYYY-MM-DD"), newFoodEntry.calorie],
          ]);
        }
      });
    }
  };
  const handleNameChange = (e) => {
    setNewFoodEntry({ ...newFoodEntry, name: e.target.value });
  };
  const handleCalorieChange = (e) => {
    setNewFoodEntry({ ...newFoodEntry, calorie: e.target.value });
  };
  const handleDateChange = (e) => {
    setNewFoodEntry({ ...newFoodEntry, datentime: e });
  };
  return (
    <Box>
      <Box>
        <TextField
          name="Name"
          variant="outlined"
          label="Name"
          value={newFoodEntry.name}
          onChange={handleNameChange}
        />
        <TextField
          name="Calorie"
          variant="outlined"
          label="Calorie"
          value={newFoodEntry.calorie}
          onChange={handleCalorieChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date&Time"
            value={newFoodEntry.datentime}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Box>
  );
};

export default FoodEntryForm;
