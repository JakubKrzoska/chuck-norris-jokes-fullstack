import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'primary.main', //
        p: { xs: 2, md: 4 },
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          width: '100%', 
          maxWidth: 1100,
          height: 570,    
          gap: 4, 
          alignItems: 'stretch', 
        }}
      >
        <Sidebar />

        <Paper 
          elevation={6} 
          sx={{ 
            flexGrow: 1, 
            borderRadius: 5,
            backgroundColor: 'background.paper',
            pt: { xs: 4, md: 6 }, 
            px: { xs: 4, md: 6 }, 
            pb: { xs: 2, md: 3 }, // Reduced from 6 to 3
            position: 'relative', 
            display: 'flex',
            flexDirection: 'column',
            overflow: 'visible',
          }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}