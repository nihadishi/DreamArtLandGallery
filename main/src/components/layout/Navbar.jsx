// import React, { useState } from 'react'
// // import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { MenuProps } from 'antd';
// import { Menu } from 'antd';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Products from '../pages/Products';
// const Navbar = () => {
//     const navigation = useNavigate()
//     const items = [
//         {
//           label: 'Home',
//           key: 'home',
//           onClick: (()=>{navigation('/')}),
//         //   icon: <MailOutlined />,
//         },
//         {
//           label: 'About',
//           key: 'about',
//           onClick: (()=>{navigation('/about')}),
//         },
//         {
//           label: 'Products',
//           key: 'allproducts',         
//           onClick: (()=>{navigation('/products')}),
//         },
//         {
//           label: 'Favorites',
//           key: 'bestsellers',         
//           onClick: (()=>{navigation('/products')}),
//         },
//         {
//           label: 'Login',
//           key: 'Login',
//           onClick: (()=>{navigation('/login')}),
//         },
//       ];

//       const [current, setCurrent] = useState('home');

//       const onClick= (e) => {
//         setCurrent(e.key);
//         console.log(e);
//       };

//       return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='navbar'/>;
// }

// export default Navbar
import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { FavContext } from '../API/FavContext';

export default function Navbar(props) {
  const { Fav, isExists, ToggleFav } = React.useContext(FavContext)
  const navigation = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  //desktop-->>
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    //login menu
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => { navigation('/login') }}>Login</MenuItem>
      <MenuItem onClick={() => { navigation('/login') }}>SignUp</MenuItem>
    </Menu>
  );
  //<<--desktop

  //mobile-->>
  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  ///<<--mobile

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            sd
          >
            <MenuIcon />
          </IconButton> */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            onClick={() => { navigation('/') }}
            style={{ cursor: 'pointer' }}
          >
            Dream Art Land Gallery
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* //products */}
            <IconButton size="large" aria-label="show products" color="inherit">
              <Badge badgeContent={props.fav} color="error">
                <ShoppingCartIcon onClick={() => { navigation('/products') }} />
              </Badge>
            </IconButton>
            {/* favoriutes */}
            <IconButton size="large" aria-label="show favourites" color="inherit">
              <Badge badgeContent={props.fav} color="error">
                <FavoriteIcon onClick={() => { navigation('/favourites') }} />
              </Badge>
            </IconButton>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>{Fav.length > 0 ? `(${Fav.length})` : ''}</Typography>
            {/* login signup */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}