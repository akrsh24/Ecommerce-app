import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    grow: {
        display: "flex",
        flexGrow: 1,
    },
    appBar: {
        background: "#2874f0",
        height: "56px",
    },
    toolbar: {
        [theme.breakpoints.up('md')]: {
            position: "absolute",
            left: "150px",
            minHeight: "51px",
            margin: "0px 10px 0px 10px", // TRBL
        }
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(15),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "black"
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: theme.spacing(1),
        transition: theme.transitions.create('width'),
        fontSize: "0.9em",
        fontFamily: "Arial",
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '80ch',
        },
        color: "black"
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        ShopKart
                    </Typography>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search for products, brands and more"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    </div>
                    <div>
                        <ShoppingCartIcon />
                        <span style={{ position: "relative", bottom: "5px", left: "5px", fontFamily: "Roboto sans-serif", fontSize: "16px", fontWeight:"bold" }}>Cart</span>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
