import React from 'react';
import "./Header.scss";
import {Button, ButtonGroup} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const route = useLocation();

    const linksData = [
        {title: 'Карта', url: '/'},
        {title: 'Алгоритм', url: '/algorithm'},
        {title: 'Дополнительная информация', url: '/additional-data'}
    ]

    return (
        <div className="header">
            <ButtonGroup>
                {
                    linksData.map(link => (
                        <Link to={link.url} key={link.url}>
                            <Button variant={route.pathname === link.url ? 'contained' : undefined}>{link.title}</Button>
                        </Link>
                    ))
                }
            </ButtonGroup>
        </div>
    );
};

export default Header;