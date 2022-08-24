import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CreateSlider = () => {
    const  color = 'secondary';

    const valuetext = (value) => {
        return `${value}°C`;
    };

    return (
    <Box sx={{ width: 200 }}>
        <Slider
        aria-label="Temperature"
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        color={color}
        />
    </Box>
    );
}

export default CreateSlider;