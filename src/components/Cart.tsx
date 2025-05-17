import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5">Your cart is empty</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText
                primary={item.name}
                secondary={`$${item.price.toFixed(2)}`}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Remove />
                </IconButton>
                <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Add />
                </IconButton>
              </Box>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography variant="h6" gutterBottom>
          Total: ${total.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={clearCart}
          sx={{ mr: 2 }}
        >
          Clear Cart
        </Button>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default Cart; 