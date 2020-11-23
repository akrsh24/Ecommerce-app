import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 322,
            md: 427,
            lg: 770,
            xl: 1026,
            xxl: 1442
        },
    },
});

const useStyles = makeStyles(() => ({
    grow: {
        display: "flex",
        flexGrow: 1,
    },
    appBar: {
        background: "#2874f0",
        height: "56px",
        width: "100vw"
    },
    toolbar: {
        [theme.breakpoints.up('md')]: {
            position: "absolute",
            left: "10%",
            minHeight: "51px",
            width: "50%"
        }
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('md')]: {
        //     display: 'block',
        // },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        marginRight: theme.spacing(15),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(2),
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
        width: 'inherit'
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
            width: '100%',
        },
        color: "black"
    },
    userRoot: {
        display: "flex",
    },
    userChild: {
        position: "relative",
        top: "2%",
        paddingRight: "50%"
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h6" >
                        ShopKart
                    </Typography>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search"
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
                    <div className={classes.userRoot}>
                        <AccountCircleIcon className={classes.userChild} />
                        <div className={classes.userChild} >
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                            <span style={{ position: "absolute", top: "5px", left: "50%", fontFamily: "Roboto sans-serif", fontSize: "16px", fontWeight: "bold" }}>Cart</span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
