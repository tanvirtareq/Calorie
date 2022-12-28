import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const FoodForm = (props: any) => {

  const fd:{datentime: any, name: string, calorie: any} = {
    datentime: dayjs(),
    name: "",
    calorie: "",
  }
  const [newFoodEntry, setNewFoodEntry] = useState(fd);
  const handleFoodNameChange = (e: any) => {
    setNewFoodEntry((prevNewFoodEntry) => {
      return { ...prevNewFoodEntry, name: e.target.value };
    });
  };

  const handleFoodCalorieChange = (e: any) => {
    setNewFoodEntry((prevNewFoodEntry) => {
      return { ...prevNewFoodEntry, calorie: e.target.value };
    });
  };

  const handleDateChange = (e: any) => {
    setNewFoodEntry((prevNewFoodEntry) => {
      return { ...prevNewFoodEntry, datentime: e };
    });
  };
  const {
    setFoodList,
    totalCalorie,
    setTotalCalorie,
    setDaysCrossingLimit,
    calorieLimitPerDay,
  } = props;

  const isFoodValid = (food: any) => {
    return food.name && food.calorie && food.datentime.isValid();
  };

  const handleSubmit = (e: any) => {
    newFoodEntry.calorie = parseFloat(newFoodEntry.calorie);
    if (isFoodValid(newFoodEntry)) {
      setFoodList((prevFoodList: any) =>
        [...prevFoodList, newFoodEntry].sort((a, b) => {
          return a.datentime - b.datentime;
        })
      );
      const date = newFoodEntry.datentime.format("YYYY-MM-DD");
      let count = newFoodEntry.calorie;
      if (totalCalorie[date]) {
        count = totalCalorie[date] + newFoodEntry.calorie;
      }
      setTotalCalorie((prevTotalCalorie: any) => {
        const newTotalCalorie = { ...prevTotalCalorie, [date]: count };
        return newTotalCalorie;
      });
      if (count > calorieLimitPerDay) {
        setDaysCrossingLimit((prevDaysCrossingLimit: any) => [
          ...new Set([...prevDaysCrossingLimit, date]),
        ]);
      }
    }
  };
  return (
    <div>
      <TextField
        name="Name"
        variant="outlined"
        label="Name"
        value={newFoodEntry.name}
        onChange={handleFoodNameChange}
      />
      <TextField
        name="Calorie"
        variant="outlined"
        label="Calorie"
        value={newFoodEntry.calorie}
        onChange={handleFoodCalorieChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Date&Time"
          value={newFoodEntry.datentime}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  );
};

export default FoodForm;
