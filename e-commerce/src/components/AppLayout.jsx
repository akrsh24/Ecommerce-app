import React from 'react';
import NavBar from './appbar/NavBar';
import ContentComponent from './content/ContentComponent';
import ProductMenuBar from './productAppBar/ProductMenuBar';

const AppLayout = () => {
    return (
        <>
            <NavBar />
            <ProductMenuBar />
            <ContentComponent />
        </>
    )
}

export default AppLayout;