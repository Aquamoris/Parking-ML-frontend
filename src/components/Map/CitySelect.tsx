import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface ICitySelect {
    label: string,
    minWidth: number,
    maxWidth: number,
    values: string[],
    changeCity: (e: any) => void
}

const CitySelect: React.FC<ICitySelect> = ({ label, minWidth, maxWidth, values, changeCity }) => {
    return (
        <Box sx={{ minWidth, maxWidth }}>
            <FormControl variant="standard" sx={{ m: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label={label}
                    onChange={changeCity}
                >
                    { values.map(v => (<MenuItem value={v}>{v}</MenuItem>)) }
                </Select>
            </FormControl>
        </Box>
    );
};

export default CitySelect;