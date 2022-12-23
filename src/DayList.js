import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function DayList(props) {
    return (
        <div>
            <Card sx={{ minWidth: 100, maxHeight: 300, overflow: "auto" }}>
                <CardContent>
                    <Typography>
                        Date: {props.day}
                    </Typography>
                    <Typography>
                        Total Calorie: {Math.round(props.calorie*100)/100}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default DayList;
