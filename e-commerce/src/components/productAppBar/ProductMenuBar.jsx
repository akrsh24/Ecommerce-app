import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { productNavList } from '../../util/ProductNavList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        '& > *': {
            height: theme.spacing(6),
        },
    },
    paperBar: {
        width: "100%",
        position: "relative"
    },
    productBar: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        height: "100%",
        position: "absolute",
        left: "2%",
        right: "2%"
    },
    productList: {
        flexGrow: 1,
        fontFamily: 'Roboto, Arial sans-serif',
        cursor: 'pointer',
        fontWeight: 500,
        height: "100%",
        position:"relative",
        top:"30%"
    }
}));

const GetProductMenuList = () => {
    const classes = useStyles();
    return productNavList.map(productList => {
        return (
            <span className={classes.productList}>
                {productList.key}
            </span>
        )
    });
}

export default function ProductMenuBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paperBar}>
                <div className={classes.productBar}>
                    {GetProductMenuList()}
                </div>
            </Paper>
        </div>
    );
}

