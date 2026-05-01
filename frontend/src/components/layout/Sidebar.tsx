import { Box, Typography, Button, Stack } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import chuckLogo from '../../assets/chuck-logo.svg';

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login');

  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: '#FDFDFA',
    textDecoration: isActive ? 'underline' : 'none',
    textUnderlineOffset: '6px',
    fontSize: '20px',
    fontWeight: 400,
    textTransform: 'uppercase' as const,
    fontFamily: '"Josefin Slab", serif'
  });

  return (
    <Box 
    sx={{ 
      width: 250, 
      minWidth: 250, 
      flexShrink: 0, 
      backgroundColor: 'text.secondary', //
      borderRadius: 4,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: 6,
    }}
  >
      <Box 
        component="img" 
        src={chuckLogo} 
        alt="Logo" 
        sx={{ width: 60, mb: 6, filter: 'brightness(0) invert(1)' }} 
      />

      <Stack spacing={3} sx={{ width: '100%', flexGrow: 1, pl: 1 }}>
        <NavLink to="/random-joke" style={navLinkStyle}>RANDOM JOKE</NavLink>
        <NavLink to="/my-jokes" style={navLinkStyle}>MY JOKES</NavLink>
        <NavLink to="/add-joke" style={navLinkStyle}>ADD JOKE</NavLink>
      </Stack>

      <Box sx={{ width: '100%', pl: 1 }}>
        <Button 
          onClick={handleLogout}
          sx={{ 
            color: '#FDFDFA', 
            fontSize: '20px', 
            p: 0, 
            mb: 3, 
            fontFamily: '"Josefin Slab", serif',
            '&:hover': { background: 'transparent', textDecoration: 'underline' } 
          }}
          disableRipple
        >
          LOG OUT
        </Button>
        <Typography sx={{ color: '#FDFDFA', fontSize: '10px', opacity: 0.8 }}>
          made with Chuck by Chuck - 2024
        </Typography>
      </Box>
    </Box>
  );
}