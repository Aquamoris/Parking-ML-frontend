import React from 'react';
import styles from './MapImage.module.scss';
import MapPin from "./MapPin";

interface IMapPage {
    area: string
}

const MapImage: React.FC<IMapPage> = ({ area }) => {
    const data = [
        { top: '220px', left: '750px', fill: '#2AA06E' },
        { top: '900px', left: '800px', fill: '#FFCC00' },
        { top: '820px', left: '1150px', fill: '#FF0000' },
        { top: '780px', left: '1450px', fill: '#FFCC00' },
        { top: '720px', left: '1800px', fill: '#FFCC00' },
        { top: '330px', left: '1800px', fill: '#FFCC00' },
        { top: '310px', left: '1270px', fill: '#2AA06E' },
    ]

    return (
        <div className={styles.map}>
            {
                area === 'Первореченский район'
                    ? <img className={styles.mapImage} src="/FirstRiverMap.png" alt="Map"/>
                    : <img className={styles.mapImage} src="/CenterMap.png" alt="Map"/>
            }
            {
                data.map(e => (
                    <div className={styles.mapImagePin} style={{top: `${e.top}`, left: `${e.left}`}}>
                        <MapPin fill={e.fill} />
                    </div>
                ))
            }
        </div>
        // // @ts-ignore
        // <Box width={1200} heigh={700} sx={{ border: '1px solid #007FFF', borderRadius: '12px' }}>
        //     <img src="/CenterMap.png" alt="Map"/>
        //     <MapPin fill='#2AA06E'/>
        //     <MapPin fill='#FF0000'/>
        //     <MapPin fill='#FFCC00'/>
        // </Box>
    );
};

export default MapImage;