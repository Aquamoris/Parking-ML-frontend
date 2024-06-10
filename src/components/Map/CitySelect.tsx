import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface ICitySelect {
    label: string,
    minWidth: number,
    maxWidth: number,
    values: string[],
}

const CitySelect: React.FC<ICitySelect> = ({ label, minWidth, maxWidth, values }) => {
    return (
        <Box sx={{ minWidth, maxWidth }}>
            <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label={label}
                >
                    { values.map(v => (<MenuItem value={v}>{v}</MenuItem>)) }
                </Select>
            </FormControl>
        </Box>
    );
};

export default CitySelect;