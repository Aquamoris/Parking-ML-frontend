// App.tsx
import React from 'react';
import { Route, Routes } from "react-router";
import MapPage from "./pages/Map/MapPage";
import AlgorithmPage from './pages/Algorithm/AlgorithmPage';
import Header from "./components/Header/Header";
import ReferenceDataPage from './pages/ReferenceData/RefercenceDataPage';
import LoginPage from './pages/Login/LoginPage';
import { AppProvider } from './services/AppContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App: React.FC = () => {
    return (
        <AppProvider>
            <div>
                <Header />
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={<ProtectedRoute element={<MapPage />} />} />
                    <Route path='/algorithm' element={<ProtectedRoute element={<AlgorithmPage />} />} />
                    <Route path='/additional-data' element={<ProtectedRoute element={<ReferenceDataPage />} />} />
                </Routes>
            </div>
        </AppProvider>
    );
};

export default App;
