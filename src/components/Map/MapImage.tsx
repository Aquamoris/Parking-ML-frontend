import React from 'react';
import styles from './MapImage.module.scss';
import MapPin from "./MapPin";
import {Box} from "@mui/material";

const MapImage = () => {
    return (
        // @ts-ignore
        <Box width={1200} heigh={700} sx={{ border: '1px solid #007FFF', borderRadius: '12px' }}>
            <MapPin fill='#2AA06E'/>
            <MapPin fill='#FF0000'/>
            <MapPin fill='#FFCC00'/>
        </Box>
    );
};

export default MapImage;