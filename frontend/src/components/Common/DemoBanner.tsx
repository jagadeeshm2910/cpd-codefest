import React from 'react';
import { Alert, AlertTitle, Box, Chip, Typography } from '@mui/material';
import { Info, Science } from '@mui/icons-material';

const DemoBanner: React.FC = () => {
  const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true';
  
  if (!isDemoMode) return null;
  
  return (
    <Box sx={{ mb: 3 }}>
      <Alert 
        severity="info" 
        icon={<Science />}
        sx={{ 
          backgroundColor: '#e8f5e8',
          border: '2px solid #4caf50',
          borderRadius: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ flex: 1 }}>
            <AlertTitle sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Info fontSize="small" />
              <strong>Metadata-Driven UI Testing Framework - Demo Mode</strong>
            </AlertTitle>
            <Typography variant="body2">
              This demonstration showcases the framework's capabilities using sample data. 
              The backend API ({import.meta.env.VITE_API_BASE_URL}) is not connected.
            </Typography>
          </Box>
          <Chip 
            label="DEMO" 
            color="success" 
            size="small" 
            sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
          />
        </Box>
      </Alert>
    </Box>
  );
};

export default DemoBanner;
