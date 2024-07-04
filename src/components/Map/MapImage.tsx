import React, {useState} from 'react';
import styles from './MapImage.module.scss';
import MapPin from "./MapPin";
import Loading from "./Loading";
import {Button} from "@mui/material";

interface IMapPage {
    area: string
}

const MapImage: React.FC<IMapPage> = React.memo(({ area }) => {
    const colors = ['#2AA06E', '#FFCC00', '#FF0000'];
    const [isLoading, setIsLoading] = useState(false);

    const data = [
        { top: '220px', left: '750px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр', address: 'Батарейная', amount: 52 },
        { top: '900px', left: '800px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр', address: 'Набережная', amount: 75 },
        { top: '820px', left: '1150px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр' },
        { top: '780px', left: '1450px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр' },
        { top: '720px', left: '1800px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр' },
        { top: '330px', left: '1800px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр' },
        { top: '310px', left: '1270px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Район центр' },

        { top: '1090px', left: '1130px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Первореченский район' },
        { top: '160px', left: '800px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Первореченский район' },
        { top: '850px', left: '1520px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Первореченский район' },
        { top: '550px', left: '1250px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Первореченский район' },
        { top: '860px', left: '460px', fill: colors[Math.floor(Math.random() * colors.length)], area: 'Первореченский район' },
    ];

    const update = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <>
            <Button onClick={update} sx={{position: 'absolute', right: '25px'}}>Обновить</Button>
            <div className={styles.map}>
                {
                    area === 'Первореченский район'
                        ? <img className={styles.mapImage} src="/FirstRiverMap.png" alt="Map"/>
                        : <img className={styles.mapImage} src="/CenterMap.png" alt="Map"/>
                }
                {
                    isLoading ? <Loading /> :data.filter(e => e.area === area).map(e => (
                        <div className={styles.mapImagePin} style={{top: `${e.top}`, left: `${e.left}`}}>
                            <MapPin fill={e.fill} address={e.address} amount={e.amount}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
});

export default MapImage;