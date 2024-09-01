import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3, // padding top and bottom
        px: 2, // padding left and right
        mt: 'auto', // margin top auto to push the footer to the bottom of the page
        backgroundColor: 'primary.main', // or any other color from your theme
        color: 'white', // text color
        textAlign: 'center' // center the text
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy-policy" color="inherit">
          Privacy Policy
        </Link> |{' '}
        <Link href="/terms-of-service" color="inherit">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};
