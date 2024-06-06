import React from 'react';
import {Route, Routes} from "react-router";
import Map from "./pages/Map/Map";
import Algorithm from "./pages/Algorithm/Algorithm";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Map />} />
            <Route path='/algorithm' element={<Algorithm />} />
        </Routes>
    );
};

export default App;