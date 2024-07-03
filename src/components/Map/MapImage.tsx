import React from 'react';
import styles from './MapImage.module.scss';

const MapImage = () => {
    return (
        <div className={styles.map}>
            <div className={styles.map__pointer}>
                <div className={styles.map__pointer_head}></div>
                <div className={styles.map__pointer_body}></div>
            </div>
        </div>
    );
};

export default MapImage;