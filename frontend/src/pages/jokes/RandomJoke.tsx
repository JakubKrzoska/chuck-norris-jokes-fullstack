import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Alert } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import heroImg from '../../assets/hero.png';
import { api } from '../../api'; 

export default function RandomJoke() {
  const [rawJoke, setRawJoke] = useState<string>("Loading joke...");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [impersonateName, setImpersonateName] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null); // New state for save feedback

  const fetchJoke = useCallback(async () => {
    setSaveStatus(null); // Reset status when fetching a new joke
    try {
      let url = 'https://api.chucknorris.io/jokes/random';
      if (selectedCategory) url += `?category=${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();
      setRawJoke(data.value);
    } catch {
      setRawJoke("Chuck Norris broke the API. Try again.");
    }
  }, [selectedCategory]);

  const displayedJoke = useMemo(() => {
    if (impersonateName.trim() !== '') {
      return rawJoke.replaceAll('Chuck Norris', impersonateName);
    }
    return rawJoke;
  }, [rawJoke, impersonateName]);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchJoke();
  }, [fetchJoke]);

  const handleSaveJoke = async () => {
    try {
      await api.request('/jokes', {
        method: 'POST',
        body: JSON.stringify({ text: displayedJoke }),
      });
      setSaveStatus({ type: 'success', message: 'Joke saved successfully!' });
    } catch (err) {
      const error = err as Error;
      setSaveStatus({ type: 'error', message: error.message || 'Failed to save joke' });
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', flexDirection: 'column', height: '100%', 
      justifyContent: 'space-between', position: 'relative', pb: 2 
    }}>
      <Box 
        component="img" src={heroImg} alt="Hero"
        sx={{ 
          position: 'absolute', top: -110, left: '50%', transform: 'translateX(-50%)',
          width: 350, height: 110, borderRadius: 3, border: '4px solid #FDFDFA', 
          boxShadow: '0px 10px 15px rgba(0,0,0,0.3)', objectFit: 'cover', zIndex: 10
        }}
      />

      <Box sx={{ pt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
          Get your random joke
        </Typography>

        {saveStatus && <Alert severity={saveStatus.type} sx={{ mb: 2, maxWidth: '95%' }}>{saveStatus.message}</Alert>}

        <Typography 
          sx={{ 
            fontSize: '24px', fontStyle: 'italic', lineHeight: 1.3,
            color: 'text.primary', maxWidth: '95%', fontWeight: 600
          }}
        >
          "{displayedJoke}"
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-end', mb: 7 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
           <TextField 
              fullWidth label="Impersonate" placeholder="Impersonate Chuck Norris"
              value={impersonateName} onChange={(e) => setImpersonateName(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <Button 
              variant="contained" fullWidth onClick={fetchJoke} 
              sx={{ py: 1, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}
            >
              DRAW A {impersonateName ? impersonateName.toUpperCase() : 'RANDOM CHUCK NORRIS'} JOKE
            </Button>
        </Box>

        <Box sx={{ width: '35%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <FormControl 
              fullWidth
              sx={{ 
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.light' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.main' }
              }}
            >
              <InputLabel shrink>Categories</InputLabel>
              <Select 
                  value={selectedCategory} onChange={(e: SelectChangeEvent) => setSelectedCategory(e.target.value)} displayEmpty
              >
                  <MenuItem value=""><em>Categories</em></MenuItem>
                  {categories.map(cat => <MenuItem key={cat} value={cat}>{cat.toUpperCase()}</MenuItem>)}
              </Select>
            </FormControl>
            
            <Button 
              variant="contained" color="secondary" fullWidth onClick={handleSaveJoke} // <-- Attached the handler here
              sx={{ py: 1, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}
            >
              SAVE THIS JOKE
            </Button>
        </Box>
      </Box>
    </Box>
  );
}