// ShopByCategories.js
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ShopByCategories = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="shop-by-categories">
      <Typography variant="body1" component="div" className="category">Shop By Store</Typography>
      <Typography variant="body1" component="div" className="category">Used Books</Typography>
      <Typography variant="body1" component="div" className="category">39 Store</Typography>
      <Typography variant="body1" component="div" className="category">59 Store</Typography>
      <Typography variant="body1" component="div" className="category">99 Store</Typography>
      <Typography variant="body1" component="div" className="category">Hindi Literature</Typography>
      <Typography variant="body1" component="div" className="category">Children</Typography>
      <Typography variant="body1" component="div" className="category">Text Books</Typography>
      <div className="category hover-category">
        <Button
          aria-controls={open ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
        >
          Harry Potter
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 200,
              width: 'auto',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Subcategory 1</MenuItem>
          <MenuItem onClick={handleClose}>Subcategory 2</MenuItem>
          <MenuItem onClick={handleClose}>Subcategory 3</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default ShopByCategories;
