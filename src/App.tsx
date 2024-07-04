import React from 'react';
import { Route, Routes } from "react-router";
import MapPage from "./pages/Map/MapPage";
import AlgorithmPage from './pages/Algorithm/AlgorithmPage';
import Header from "./components/Header/Header";
import ReferenceDataPage from './pages/ReferenceData/RefercenceDataPage';
import LoginPage from './pages/Login/LoginPage';
import { AppProvider } from './services/AppContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProfilePage from './pages/Profile/ProfilePage';

const App: React.FC = () => {
    const storedUser = localStorage.getItem('user')
    return (
        <AppProvider>
            <div>
                <Header /> 
                <Routes>
                    {!storedUser && <Route path='/login' element={<LoginPage />} />}
                    <Route path='/' element={<ProtectedRoute element={<MapPage />} />} />
                    <Route path='/algorithm' element={<ProtectedRoute element={<AlgorithmPage />} />} />
                    <Route path='/additional-data' element={<ProtectedRoute element={<ReferenceDataPage />} />} />
                    <Route path='/profile' element={<ProtectedRoute element={<ProfilePage />} />} />
                </Routes>
            </div>
        </AppProvider>
    );
};

export default App;
