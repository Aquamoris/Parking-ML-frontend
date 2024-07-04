import React, {useState} from 'react';
import CitySelect from "../../components/Map/CitySelect";
import MapImage from "../../components/Map/MapImage";

const MapPage = () => {
    const [area, setArea] = useState('');

    return (
        <div>
            <CitySelect
                label={'Город'}
                minWidth={120}
                maxWidth={200}
                values={['Район центр', 'Первореченский район']}
            />
            <MapImage />
        </div>
    );
};

export default MapPage;