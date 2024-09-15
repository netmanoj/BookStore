import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';


const Banners = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % 2); // Switch between 0 and 1
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Box className="banners-container">
      <Box className={`banner ${currentBanner === 0 ? 'active' : ''}`}>
        <img src="/banner1.webp" alt="Banner 1" className="banner-image" />
      </Box>
      <Box className={`banner ${currentBanner === 1 ? 'active' : ''}`}>
        <img src="/banner2.webp" alt="Banner 2" className="banner-image" />
      </Box>
    </Box>
  );
};



export default Banners;
