import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#1976d2' }}>
      <Typography variant="body2" color="white">
        © 2025 Pramodya Samarakoon. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
