import { Box, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import chuckLogo from '../../assets/chuck-logo.svg';

interface AuthLayoutProps {
  buttonText: string;
  linkText: string;
  linkLabel: string;
  linkPath: string;
}

export default function AuthLayout({ buttonText, linkText, linkLabel, linkPath }: AuthLayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper 
        elevation={6} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '90%',
          maxWidth: 1100,
          borderRadius: 4,
          backgroundColor: 'background.paper', //
        }}
      >
       
        <Box 
          component="img" 
          src={chuckLogo} 
          alt="Logo" 
          sx={{ width: 60, mb: 4, marginBottom: 4 }} 
        />
        
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 3, 
            color: 'text.primary', 
            textAlign: 'center',
          
          }}
        >
          Explore "Chuck Jokes" with us!
        </Typography>

        <Box component="form" sx={{ width: '100%', maxWidth: 600 }}>
          <TextField
            margin="dense" 
            fullWidth
            label="E-mail"
            placeholder="Type your email"
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ mb: 2 }} 
          />
          <TextField
            margin="dense"
            fullWidth
            label="Password"
            type="password"
            placeholder="Type your password"
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ mb: 3 }} 
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ py: 1.2, mb: 2, fontSize: '20px' }} 
          >
            {buttonText}
          </Button>

          <Typography align="center" sx={{ color: 'text.secondary', mb: 3, fontSize: '18px' }}>
            {linkText}{' '}
            <Link component={RouterLink} to={linkPath} sx={{ color: 'text.primary', fontWeight: 700, textDecoration: 'none' }}>
              {linkLabel}
            </Link>
          </Typography>

          <Typography 
            align="center" 
            sx={{ 
              display: 'block', 
              color: 'secondary.main', 
              fontStyle: 'italic', 
              fontSize: '18px',
              marginTop: 5
            }}
          >
            "Chuck Norris can login without signing up, on any website."
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}