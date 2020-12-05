import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { productNavList } from '../../util/ProductNavList';
import './ProductMenuBar.scss';
import ProductSubList from './ProductSubList';

export default function ProductMenuBar() {
    const [showProductSubList, setShowProductSubList] = useState(false);
    const [currentProductSectionOptions, setCurrentProductSectionOptions] = useState([]);

    const setCurrentSectionContext = (key, flag) => {
        setCurrentProductSectionOptions(key);
        setShowProductSubList(flag);
    }

    const getProductMenuList = () => {
        return productNavList.map(productList => {
            return (
                <div className="productList">
                    <p className="productList-text"
                        // onClick={() => setCurrentSectionContext(productList.options, true)}
                    onMouseOver={() => setCurrentSectionContext(productList.options, true)}
                    onMouseLeave={() => setCurrentSectionContext(productList.options, false)}
                    >{productList.key}</p>
                </div>
            )
        });
    }

    return (
        <div className="paperBar-root">
            <Paper elevation={2} className="paperBar">
                <div className="productBar">
                    {getProductMenuList()}
                </div>
            </Paper>
            {
                showProductSubList &&
                <ProductSubList options={currentProductSectionOptions} />
            }
        </div>
    );
}

