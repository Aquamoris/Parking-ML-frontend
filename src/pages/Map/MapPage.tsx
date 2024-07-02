import React from 'react';
import CitySelect from "../../components/Map/CitySelect";

const MapPage = () => {
    return (
        <div>
            <CitySelect
                label={'Город'}
                minWidth={120}
                maxWidth={200}
                values={['Владивосток', 'Хабаровск', 'Находка']}
            />
        </div>
    );
};

export default MapPage;