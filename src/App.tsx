import React from 'react';
import {Route, Routes} from "react-router";
import MapPage from "./pages/Map/MapPage";
import AlgorithmPage from './pages/Algorithm/AlgorithmPage';
import Header from "./components/Header/Header";
import AdditionalDataPage from './pages/AdditionalData/AdditionalDataPage';
import ReferenceDataPage from './pages/ReferenceData/RefercenceDataPage';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<MapPage />} />
                <Route path='/algorithm' element={<AlgorithmPage />} />
                {/*<Route path='/additional-data' element={<AdditionalDataPage />} />*/}
                <Route path='/additional-data' element={<ReferenceDataPage />} />
            </Routes>
        </div>
    );
};

export default App;