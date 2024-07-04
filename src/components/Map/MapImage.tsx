import React from 'react';
import styles from './MapImage.module.scss';
import MapPin from "./MapPin";

const MapImage = () => {
    const data = [
        { top: '220px', left: '750px', fill: '#2AA06E' },
        { top: '900px', left: '900px', fill: '#FF0000' },
        { top: '820px', left: '1150px', fill: '#FFCC00' }
    ]

    return (
        // // @ts-ignore
        // <Box width={1200} heigh={700} sx={{ border: '1px solid #007FFF', borderRadius: '12px' }}>
        //     <img src="/CenterMap.png" alt="Map"/>
        //     <MapPin fill='#2AA06E'/>
        //     <MapPin fill='#FF0000'/>
        //     <MapPin fill='#FFCC00'/>
        // </Box>

        <div className={styles.map}>
            <img className={styles.mapImage} src="/CenterMap.png" alt="Map"/>
            {
                data.map(e => (
                    <div className={styles.mapImagePin} style={{top: `${e.top}`, left: `${e.left}`}}>
                        <MapPin fill={e.fill} />
                    </div>
                ))
            }
        </div>
    );
};

export default MapImage;