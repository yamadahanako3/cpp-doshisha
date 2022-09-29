import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CreateSlider = (props) => {
    const color = props.color;
    const mode = props.mode;
    let max = 5;
    let step = 1;

    if(mode == 5){
        max = 5;
        step = 1;
    }else if(mode == 100){
        max = 100;
        step = 10;
    }
    
    const valuetext = (value) => {
        return `${value}°C`;
    };

    return (
        <Box sx={{ width: 250, height: 70 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={step}
                marks
                min={0}
                max={max}
                style={{color: color}}
                name={props.name}
            />
        </Box>
    );
}

export default CreateSlider;