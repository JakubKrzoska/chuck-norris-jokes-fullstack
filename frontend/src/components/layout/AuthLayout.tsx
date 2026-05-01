import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import chuckLogo from '../../assets/chuck-logo.svg';
import { api } from '../../api'; 

interface AuthLayoutProps {
  buttonText: string;
  linkText: string;
  linkLabel: string;
  linkPath: string;
}

export default function AuthLayout({ buttonText, linkText, linkLabel, linkPath }: AuthLayoutProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname.includes('login'); 

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const data = await api.request(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem('access_token', data.access_token);
    
      navigate('/random-joke');
    } catch(err: unknown) {
      setError(err.message || 'Connection failed');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper 
        elevation={6} 
        sx={{ 
          p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', 
          alignItems: 'center', width: '90%', maxWidth: 1100,
          borderRadius: 4, backgroundColor: 'background.paper', 
        }}
      >
        <Box component="img" src={chuckLogo} alt="Logo" sx={{ width: 60, mb: 4 }} />
        <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', textAlign: 'center' }}>
          Explore "Chuck Jokes" with us!
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 600 }}>
          
          {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

          <TextField
            margin="dense" fullWidth label="E-mail" placeholder="Type your email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }} sx={{ mb: 2 }} 
          />
          <TextField
            margin="dense" fullWidth label="Password" type="password" placeholder="Type your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }} sx={{ mb: 3 }} 
          />
          <Button
            type="submit" fullWidth variant="contained" size="large" disabled={!isFormValid} 
            sx={{ py: 1.2, mb: 2, fontSize: '20px', '&.Mui-disabled': { backgroundColor: '#D9D9D9', color: '#A0A0A0' } }} 
          >
            {buttonText}
          </Button>

          <Typography align="center" sx={{ color: 'text.secondary', mb: 3, fontSize: '18px' }}>
            {linkText} <Link component={RouterLink} to={linkPath} sx={{ color: 'text.primary', fontWeight: 700, textDecoration: 'none' }}>{linkLabel}</Link>
          </Typography>

          <Typography align="center" sx={{ display: 'block', color: 'secondary.main', fontStyle: 'italic', fontSize: '18px', marginTop: 5 }}>
            "Chuck Norris can login without signing up, on any website."
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}