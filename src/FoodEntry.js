
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Food from './Food';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function FoodEntry() {
    const [foodList, setFoodList] = useState([]);
    const [newFoodEntry, setNewFoodEntry] = useState({
        datentime:dayjs()
    });

    const handleSubmit = (e) => {
        newFoodEntry.calorie=parseFloat(newFoodEntry.calorie);
        if(newFoodEntry.name && newFoodEntry.calorie && newFoodEntry.datentime.isValid())
        {
            setFoodList([...foodList, newFoodEntry].sort((a, b)=>{
                return a.datentime-b.datentime;
            }));
        }
        
    }
    return (
        <div style={{margin:"auto", display: "table", padding:"5%" }}>
            <Card sx={{ minWidth: 10, maxHeight: 300, overflow: "auto", margin:'5%' }}>
                <CardContent>
                    {foodList.map((food) => (<Food data={food} />))}
                </CardContent>
            </Card>
            <div style={{}}>
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
                        onChange={(e) => setNewFoodEntry({ ...newFoodEntry, datentime: e})}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                
                <Button variant='contained' color='primary' size='large' fullWidth onClick={handleSubmit}>Add</Button>
            </div>
        </div>
    );
}

export default FoodEntry;
