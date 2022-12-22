import  React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Food(props) {
    console.log(props.data.datentime);
    return (
        <div>
            <Card sx={{ minWidth: 100, maxHeight: 300, overflow: "auto" }}>
                <CardContent>
                    <Typography>
                        Date & time: {props.data.datentime.format()}
                    </Typography>
                    <Typography>
                        Name: {props.data.name}
                    </Typography>
                    <Typography>
                        Calorie: {props.data.calorie}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Food;
