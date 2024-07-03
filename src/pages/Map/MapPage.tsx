import React from 'react';
import CitySelect from "../../components/Map/CitySelect";
import MapImage from "../../components/Map/MapImage";

const MapPage = () => {
    return (
        <div>
            <CitySelect
                label={'Город'}
                minWidth={120}
                maxWidth={200}
                values={['Владивосток', 'Хабаровск', 'Находка']}
            />
            <MapImage />
        </div>
    );
};

export default MapPage;