import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { AccountCircle, Home, ShoppingCart } from "@material-ui/icons";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";

const useStyles = makeStyles({
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        color: "white",
        fontSize: 20,
    }
})

export default function Customnavbar() {
    const classes = useStyles();
    const [anchorWEl, setAnchorWEl] = React.useState(null);
    const [anchorMEl, setAnchorMEl] = React.useState(null);
    const [anchorMenuEl, setAnchorMenuEl] = React.useState(null);
    const womanButton = Boolean(anchorWEl);
    const manButton = Boolean(anchorMEl);
    const [isopenProfile, setIsOpenProfile] = React.useState(false);

    const handleWClick = (event) => {
        setAnchorWEl(event.currentTarget);
    };
    const handleWClose = () => {
        setAnchorWEl(null);
    };

    const handleMClick = (event) => {
        setAnchorMEl(event.currentTarget);
    };
    const handleMClose = () => {
        setAnchorMEl(null);
    };

    const handleMenu = (event) => {
        setAnchorMenuEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorMenuEl(null);
    };
    const handleProfileOpen = () => { 
        setIsOpenProfile(!isopenProfile);
        setAnchorMenuEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" color="secondary">
                <Toolbar className={classes.nav}>
                    <div>
                        <IconButton
                            href="/all"
                            size="large"
                            aria-label="Home"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Home fontSize="large" />
                        </IconButton>
                        <Button
                            id="all-button"
                            href="/all"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            fontSize="large"
                        >
                            All
                        </Button>
                        <Button
                            id="woman-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={womanButton ? 'true' : undefined}
                            onClick={handleWClick}
                            fontSize="large"
                        >
                            WOMAN
                        </Button>
                        <Menu
                            id="woman-menu"
                            anchorEl={anchorWEl}
                            open={womanButton}
                            onClose={handleWClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/all">
                                All
                            </MenuItem>
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/dress">
                                Dress
                            </MenuItem>
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/blouse">
                                Blouse
                            </MenuItem>
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/skirt">
                                Skirt
                            </MenuItem>
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/short">
                                Short
                            </MenuItem>
                            <MenuItem onClick={handleWClose} component={Link} to="/woman/jeans">
                                Jeans
                            </MenuItem>
                        </Menu>

                        <Button
                            id="man-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={manButton ? 'true' : undefined}
                            onClick={handleMClick}
                            fontSize="large"
                        >
                            MAN
                        </Button>
                        <Menu
                            href="/man"
                            id="man-menu"
                            anchorEl={anchorMEl}
                            open={manButton}
                            onClose={handleMClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleMClose} component={Link} to="/man/all">
                                All
                            </MenuItem>
                            <MenuItem onClick={handleMClose} component={Link} to="/man/t-shirt">
                                T-Shirt
                            </MenuItem>
                            <MenuItem onClick={handleMClose} component={Link} to="/man/short">
                                Short
                            </MenuItem>
                            <MenuItem onClick={handleMClose} component={Link} to="/man/jeans">
                                Jeans
                            </MenuItem>
                        </Menu>
                    </div>

                    <div className={classes.nav}>
                        <IconButton
                            size="large"
                            aria-label="Shopping cart"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <ShoppingCart fontSize="large" />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle fontSize="large" />
                        </IconButton>
                        {

                        }
                        <ProfileComponent 
                                isComponentOpenned={isopenProfile}
                                handleCloseComponent={() => setIsOpenProfile(false)} 
                            />
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorMenuEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorMenuEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => handleProfileOpen()}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose} color="red" component={Link} to="/">
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}