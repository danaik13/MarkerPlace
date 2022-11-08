import { Container, AppBar, Toolbar, Button, IconButton, Box, Typography, Badge } from '@mui/material';
import { ShoppingBasket, AccountCircle } from '@mui/icons-material';
import Search from './Search';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

const Header = () => {
  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const { auth } = useSelector((state: RootState) => state.auth);

  return (
    <AppBar position="static">
      <Container >
      <Toolbar sx={{pl: '0 !important', pr: '0 !important'}}>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            mr: '1rem'
          }}
        >
          MarketPlace
        </Typography>
        <Search />
        <Box sx={{ display: 'flex' }} >

          <Button 
            color="inherit" 
            size='small'
            startIcon={              
              <Badge badgeContent={cartTotalQuantity} color="error">
                <ShoppingBasket />
              </Badge>
            }
          >
            Корзина
          </Button>
            
          {auth 
          ? 
            <IconButton
              size="large"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          :
          <Button 
            color="inherit"
            startIcon={<AccountCircle />}
          >
            Войти
          </Button>
          }
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;