import { Paper } from '@material-ui/core';
import React from 'react';
import "./ProductSubList.scss";

const ProductSubList = (props) => {

    return (
        <div className="product-sublist-div">
            <Paper elevation={3} style={{ height: "50vh" }} >
                <div className="product-sublist-item">
                    {
                        props.options.map(product => {
                            return (
                                <>
                                    <h4 style={{ marginBottom: 0 }}>{product.productSection}</h4>
                                    {
                                        product.brands.map(brand => <h5>{brand}</h5>)
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </Paper>
        </div>
    );
}

export default ProductSubList;