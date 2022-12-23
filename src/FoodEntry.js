
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Food from './Food';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Typography from '@mui/material/Typography';
import DayList from './DayList';



function FoodEntry() {
    const [foodList, setFoodList] = useState([]);
    const [newFoodEntry, setNewFoodEntry] = useState({
        datentime: dayjs(),
        name:'',
        calorie:''
    });

    let calorieLimitPerDay = 2.1;

    const [totalCalorie, setTotalCalorie] = useState({});

    const [daysCrossingLimit, setDaysCrossingLimit] = useState([]);

    const handleSubmit = (e) => {
        newFoodEntry.calorie = parseFloat(newFoodEntry.calorie);
        if (newFoodEntry.name && newFoodEntry.calorie && newFoodEntry.datentime.isValid()) {
            setFoodList([...foodList, newFoodEntry].sort((a, b) => {
                return a.datentime - b.datentime;
            }));
            let date = newFoodEntry.datentime.format("YYYY-MM-DD");
            let count = newFoodEntry.calorie;
            if (totalCalorie[date]) {
                count = totalCalorie[date] + newFoodEntry.calorie;;
            }
            setTotalCalorie({ ...totalCalorie, [date]: count });
            if (count > calorieLimitPerDay) {
                setDaysCrossingLimit([...new Set([...daysCrossingLimit, date])]);
            }

        }

    }
    return (
        <div style={{ margin: "auto", display: "flex", padding: "5%" }}>

            <div >
                <Card sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin: '5%' }}>
                    <CardContent>
                        {foodList.map((food, index) => (<Food data={food} key={index} />))}
                    </CardContent>
                </Card>
                <div >
                    <TextField
                        name='Name'
                        variant='outlined'
                        label='Name'
                        value={newFoodEntry.name}
                        onChange={(e) => setNewFoodEntry({ ...newFoodEntry, name: e.target.value })}

                    />
                    <TextField
                        name='Calorie'
                        variant='outlined'
                        label='Calorie'
                        value={newFoodEntry.calorie}
                        onChange={(e) => setNewFoodEntry({ ...newFoodEntry, calorie: e.target.value })}

                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date&Time"
                            name='Date&Time'
                            value={newFoodEntry.datentime}
                            onChange={(e) => setNewFoodEntry({ ...newFoodEntry, datentime: e })}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <Button variant='contained' color='primary' size='large' fullWidth onClick={handleSubmit}>Add</Button>
                </div>
            </div>
            <div>
                <Typography>
                    Days list that cross calorie limit.
                </Typography>
                <Card sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin: '5%' }}>
                    <CardContent>
                        {daysCrossingLimit.map((day, index) => (<DayList calorie={totalCalorie[day] } day={day} key={index} />))}
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}

export default FoodEntry;
