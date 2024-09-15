import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Free Delivery</Typography>
            <Typography>Free Delivery</Typography>
            <Typography variant="h6">Cash on Delivery</Typography>
            <Typography>Cash on Delivery</Typography>
            <Typography variant="h6">Original Products</Typography>
            <Typography>Original Products</Typography>
            <Typography variant="h6">Easy Replacement</Typography>
            <Typography>Easy Replacement</Typography>
            <Box mt={2}>
              <img src="/images/logo.png" alt="Bookchor Logo" style={{ width: '100px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Our Links</Typography>
            <ul>
              <li><Link href="#" color="inherit">About Us</Link></li>
              <li><Link href="#" color="inherit">Contact Us</Link></li>
              <li><Link href="#" color="inherit">Blogs</Link></li>
              <li><Link href="#" color="inherit">Bookchor Wholesale</Link></li>
              <li><Link href="#" color="inherit">Sell with Us</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <ul>
              <li><Link href="#" color="inherit">Track Order</Link></li>
              <li><Link href="#" color="inherit">FAQs</Link></li>
              <li><Link href="#" color="inherit">Privacy Policy</Link></li>
              <li><Link href="#" color="inherit">Terms & Conditions</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Support</Typography>
            <Typography>Call: <Link href="tel:+9050111218" color="inherit">90501 11218</Link></Typography>
            <Typography>Email: <Link href="mailto:cs@bookchor.com" color="inherit">cs@bookchor.com</Link></Typography>
            <Typography variant="h6">Download Mobile App</Typography>
            <Box>
              <a href="#"><img src="/images/android.svg" alt="Download on Android" style={{ width: '135px', height: '40px' }} /></a>
              <a href="#"><img src="/images/app-store.svg" alt="Download on App Store" style={{ width: '135px', height: '40px' }} /></a>
            </Box>
            <Typography variant="h6">Our Products</Typography>
            <Typography>Bookchor Lock The Box Dump</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#ffffff', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Bookchor, All rights reserved.
        </Typography>
        <Box mt={2}>
          <img src="/images/payment-methods.png" alt="Payment Methods" style={{ width: '200px' }} />
        </Box>
        <Box mt={2}>
          <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
