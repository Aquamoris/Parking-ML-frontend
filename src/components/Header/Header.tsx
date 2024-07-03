import React, { useContext } from 'react';
import "./Header.scss";
import { Button, ButtonGroup } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from '../../services/AppContext';

const Header: React.FC = () => {
    const route = useLocation();
    const navigate = useNavigate();
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Header must be used within an AppProvider');
    }

    const { state, updateUser } = context;

    const linksData = [
        { title: 'Карта', url: '/' },
        { title: 'Алгоритм', url: '/algorithm' },
        { title: 'Дополнительная информация', url: '/additional-data' }
    ];

    const handleLogout = () => {
        updateUser(null); // Удаляем информацию о пользователе из контекста
        localStorage.removeItem('user'); // Удаляем информацию о пользователе из localStorage
        navigate('/login'); // Перенаправление на страницу логина
    };

    return (
        <div className="header">
            {state.user &&
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <ButtonGroup>
                        {linksData.map(link => (
                            <Link to={link.url} key={link.url}>
                                <Button variant={route.pathname === link.url ? 'contained' : undefined}>{link.title}</Button>
                            </Link>
                        ))}
                    </ButtonGroup>
                    <Button variant="outlined" color="secondary" onClick={handleLogout}>
                        Выход
                    </Button>
                </div>
            }
        </div>
    );
};

export default Header;
