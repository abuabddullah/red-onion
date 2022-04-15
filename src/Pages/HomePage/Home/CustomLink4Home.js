import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink4Home = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
        <Link
            style={{ borderBottom: match ? "1px solid red" : "none", color: match ? "red" : "black" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
        {match && ""}
        </>
    );
};

export default CustomLink4Home;

