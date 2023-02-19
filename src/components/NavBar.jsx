import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import CartWidget from './CartWidget';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['perros', 'gatos', 'ropa'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <NavLink to={"/"} >
              
              <Typography
                variant="h6"
                noWrap
                component="a"
                
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ASLANPETSTORE
              </Typography>
              </NavLink >

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <NavLink to="/categorias">
                    
                      <MenuItem key="categorias" onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Categorias</Typography>
                      </MenuItem>
                  </NavLink>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <NavLink to={"/"}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ASLANPETSTORE
              </Typography>
              </NavLink>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavLink to='/categorias'>
                
                    <Button
                      key="categorias"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Categorias
                    </Button>

                </NavLink>
                {pages.map((page) => (
                  <NavLink to={`/categorias/${page}`} key={page}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, }} mt={2} mb={2} width={100}>
                <CartWidget />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
      </ThemeProvider>
    </Container>
  );
}

export default NavBar;