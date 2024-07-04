import React, {useState} from 'react';
import CitySelect from "../../components/Map/CitySelect";
import MapImage from "../../components/Map/MapImage";

const MapPage = () => {
    const [area, setArea] = useState('Район центр');

    const changeCityHandler = (e: any) => {
        setArea(e.target.value)
    }

    return (
        <div>
            <CitySelect
                label={'Район'}
                minWidth={120}
                maxWidth={200}
                values={['Район центр', 'Первореченский район']}
                changeCity={changeCityHandler}
            />
            <MapImage area={area}/>
        </div>
    );
};

export default MapPage;