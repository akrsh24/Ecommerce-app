import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { productNavList } from '../../util/ProductNavList';
import './ProductMenuBar.scss';
import ProductSubList from './ProductSubList';

export default function ProductMenuBar() {
    const [showProductSubList, setShowProductSubList] = useState(false);
    const [currentProductSectionKey, setCurrentProductSectionKey] = useState("");

    const setCurrentSectionContext = (key, flag) => {
        setCurrentProductSectionKey(key);
        setShowProductSubList(flag);
    }

    const getProductMenuList = () => {
        return productNavList.map(productList => {
            return (
                <div className="productList">
                    <p className="productList-text"
                        // onClick={() => setShowProductSubList(true)}
                        onMouseOver={() => setCurrentSectionContext(productList.key, true)}
                        onMouseLeave={() => setCurrentSectionContext(productList.key, false)}
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
                <ProductSubList sectionKey={currentProductSectionKey} />
            }
        </div>
    );
}

