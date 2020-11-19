import React from 'react';
import { Paper } from '@material-ui/core';
import { productNavList } from '../../util/ProductNavList';
import './ProductMenuBar.scss';

const GetProductMenuList = () => {
    return productNavList.map(productList => {
        return (
            <div className="productList">
                <p className="productList-text">{productList.key}</p>
            </div>
        )
    });
}

export default function ProductMenuBar() {
    return (
        <div className="root">
            <Paper elevation={2} className="paperBar">
                <div className="productBar">
                    {GetProductMenuList()}
                </div>
            </Paper>
        </div>
    );
}

