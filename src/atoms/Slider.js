import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CreateSlider = (props) => {
    const color = props.color;
    
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
            step={1}
            marks
            min={1}
            max={5}
            style={{color: color}}
            />
        </Box>
    );
}

export default CreateSlider;