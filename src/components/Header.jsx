// Header.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box className="header-container">
      <Box className="promo-banner">
        <Typography variant="body1" component="div">
          Get Rs50 extra off, Use Code: APP50 &nbsp;|&nbsp; GET APP
        </Typography>
      </Box>
      <Box className="info-section">
        <Box className="info-item">
          <Typography variant="body2" component="div">
            <strong>Lock The Box</strong>
          </Typography>
        </Box>
        <Box className="info-item">
          <Typography variant="body2" component="div">
            <strong>Wholesale</strong>
          </Typography>
        </Box>
        <Box className="info-item">
          <Typography variant="body2" component="div">
            <strong>Call: 90501 11218</strong>
          </Typography>
        </Box>
        <Box className="info-item">
          <Typography variant="body2" component="div">
            <strong>Track Order</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
