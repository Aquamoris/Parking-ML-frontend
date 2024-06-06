import React from 'react';
import {Route, Routes} from "react-router";
import Map from "./pages/Map/Map";
import Algorithm from "./pages/Algorithm/Algorithm";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Map />} />
                <Route path='/algorithm' element={<Algorithm />} />
            </Routes>
        </div>
    );
};

export default App;