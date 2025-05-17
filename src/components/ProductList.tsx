import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import { useCart } from '../context/CartContext';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 99.99,
    image: 'https://via.placeholder.com/200',
    description: 'This is a sample product description.'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 149.99,
    image: 'https://via.placeholder.com/200',
    description: 'Another sample product description.'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 199.99,
    image: 'https://via.placeholder.com/200',
    description: 'Yet another sample product description.'
  },
];

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList; 